import classNames from 'classnames'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  label?: string
  autoComplete?: string
  type: string
  name: string
  handChange?: () => React.ChangeEventHandler<HTMLInputElement>
  defaultValue?: string
  value?: string
  id?: string
}

const InputField = ({
  className,
  id,
  label,
  type = 'text',
  ...props
}: Props): JSX.Element => {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <input
        className={classNames(
          'shadow',
          'appearance-none',
          'border',
          'rounded',
          'w-full',
          'py-2',
          'px-3',
          'mb-5',
          'text-gray-700',
          'leading-tight',
          'focus:outline-none',
          'focus:shadow-outline',
          className,
        )}
        id={id}
        type={type}
        {...props}
      />
    </>
  )
}

export default InputField
