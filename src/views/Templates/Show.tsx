import { useEffect, useState } from 'react'
import { Ttemplate } from 'ts/types/template'
import { fetchApi } from 'utils/fetch'
import { useParams, useHistory } from 'react-router-dom'
import Layout from 'components/template/layout'
import Button from 'components/form/Button'
import { TprintProperty } from 'ts/types/print-property'
import InputField from 'components/form/InputField'
import Select from 'components/form/Select'
import { ICommonProps } from 'ts/interfaces/common-props'

interface IParams {
  templateId: string
}

const renderInputForm = ({
  id,
  name,
  label,
  input,
  values,
  ...props
}: TprintProperty & ICommonProps): JSX.Element => {
  switch (input) {
    case 'select':
      return (
        <Select {...props} placeholder={name} name={`${name}[]`} label={label}>
          {values.map((value, index) => (
            <option value={`${name}_${index}`} key={value}>
              {value}
            </option>
          ))}
        </Select>
      )

    default:
      return (
        <InputField
          {...props}
          id={`template-input-${id}`}
          label={label}
          name={name}
          placeholder={name}
          type="text"
        />
      )
  }
}

const ShowTemplates = (): JSX.Element | null => {
  const history = useHistory()
  const { templateId } = useParams<IParams>()
  const [template, setTemplate] = useState<Ttemplate>()
  const [printProperties, setPrintProperties] = useState<TprintProperty[]>([])

  useEffect(() => {
    fetchApi<Ttemplate[]>(`/templates?id=${templateId}`)
      .then((response) => {
        console.log('template', response)

        setTemplate(response[0])

        return response
      })
      .then(([{ print_properties_ids }]) => {
        if (print_properties_ids.length === 0) return

        console.log('print_properties_ids', print_properties_ids)

        fetchApi<TprintProperty[]>(
          `/print_properties?id=${print_properties_ids.join('&id=')}`,
        ).then((response) => {
          console.log('print_properties_ids', response)

          setPrintProperties(response)
        })
      })
  }, [])

  if (!template) {
    return (
      <Layout className="flex justify-center items-center">Chargement…</Layout>
    )
  }

  return (
    <Layout>
      <aside className="flex justify-center p-4">
        <Button
          modifier="primary"
          className="max-w-xs"
          onClick={() => history.goBack()}
        >
          Go back
        </Button>
      </aside>
      <div className="container mx-auto">
        <div className="bg-white p-4 my-4 rounded shadow">
          <header className="mb-5 pb-5 border-b">
            <h1 className="text-3xl">{template.name}</h1>
          </header>

          <form>
            {printProperties.map((printProperty) => (
              <div key={printProperty.id}>
                {renderInputForm({ ...printProperty, className: 'max-w-xs' })}
              </div>
            ))}
            <InputField
              label="Add input"
              type="text"
              name="addInput"
              placeholder="foobar"
            />
            <Button className="max-w-xs" type="submit">
              Create template
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ShowTemplates
