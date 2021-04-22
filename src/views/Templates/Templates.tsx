import { useEffect, useState } from 'react'
import { Ttemplate } from 'ts/types/template'
import { fetchApi } from 'utils/fetch'
import { useParams } from 'react-router-dom'
import Layout from 'components/template/layout'
import ButtonLink from 'components/ButtonLink'

interface IParams {
  userId: string
}

const Templates = (): JSX.Element | null => {
  const { userId } = useParams<IParams>()
  const [templates, setTemplates] = useState<Ttemplate[]>([])

  useEffect(() => {
    fetchApi<Ttemplate[]>(`/templates?author_id=${userId}`).then((response) => {
      setTemplates(response)

      return response
    })
  }, [])

  if (!templates || templates.length < 1) {
    return (
      <Layout className="flex justify-center items-center">Chargement…</Layout>
    )
  }

  return (
    <Layout>
      <table className="table-fixed shadow-lg bg-white">
        <thead>
          <tr className="flex-initial">
            {Object.keys(templates[0])
              .filter((label) => ['id', 'name'].includes(label))
              .map((label) => (
                <th
                  key={label}
                  className="bg-indigo-100 border text-left px-8 py-4"
                >
                  {label}
                </th>
              ))}
            <th className="bg-indigo-100 border text-left px-8 py-4" />
          </tr>
        </thead>
        <tbody>
          {templates.map((template) => (
            <tr key={template.id}>
              <td className="border px-5 py-4">{`#${template.id}`}</td>
              <td className="border px-5 py-4">{template.name}</td>
              <td className="border px-5 py-4">
                <ButtonLink to={`/template/${template.id}/show`}>
                  Show
                </ButtonLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Templates
