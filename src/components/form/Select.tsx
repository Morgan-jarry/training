import classNames from 'classnames'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
  className?: string
  defaultValue?: string
  handChange?: () => React.ChangeEventHandler<HTMLSelectElement>
  id?: string
  label?: string
  name: string
  placeholder?: string
  value?: string
}

const Select = ({
  children,
  className,
  id,
  label,
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
      <select
        {...props}
        className={classNames(
          'shadow',
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
      >
        {children}
      </select>
    </>
  )
}

export default Select
