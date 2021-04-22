import classNames from 'classnames'
import { ICommonProps } from 'ts/interfaces/common-props'

const Layout = ({
  className,
  children,
  ...props
}: ICommonProps): JSX.Element => (
  <div
    {...props}
    className={classNames('min-h-screen', 'bg-gray-200', 'pb-4', className)}
  >
    {children}
  </div>
)

export default Layout
