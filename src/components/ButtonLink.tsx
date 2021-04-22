import classNames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {
  modifier?: 'primary' | 'secondary'
  size?: 'tiny' | 'default' | 'big'
}

const ButtonLink = ({
  children,
  className,
  modifier = 'secondary',
  size = 'default',
  to,
  ...props
}: Props): JSX.Element => {
  const textSize = { tiny: 'tiny', default: 'base', big: 'lg' }

  return (
    <Link
      {...props}
      to={to}
      className={classNames(
        'w-full',
        'flex',
        'items-center',
        'justify-center',
        'px-4',
        'py-2',
        'border',
        'border-transparent',
        `text-${textSize[size]}`,
        'font-medium',
        'rounded-md',
        'focus:outline-none',
        'focus:ring',
        {
          'text-white': modifier === 'primary',
          'bg-indigo-600': modifier === 'primary',
          'hover:bg-indigo-700': modifier === 'primary',
          'focus:bg-indigo-700': modifier === 'primary',
          'focus:border-indigo-300': modifier === 'primary',
          'bg-gray-200': modifier === 'secondary',
          'hover:bg-gray-300': modifier === 'secondary',
          'focus:bg-gray-300': modifier === 'secondary',
          'focus:border-gray-300': modifier === 'secondary',
        },
        className,
      )}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
