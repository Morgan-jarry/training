import {
  Redirect,
  Route as ReactRoute,
  RouteProps,
  useLocation,
} from 'react-router-dom'

interface Props extends RouteProps {
  withAuth?: 'user' | 'admin' | ['user', 'admin']
}

const Route = ({ withAuth, ...props }: Props): JSX.Element => {
  const location = useLocation()

  return withAuth ? (
    <Redirect to={{ pathname: '/', state: { from: location } }} />
  ) : (
    <ReactRoute {...props} />
  )
}

export default Route
