import classNames from 'classnames'
import InputField from 'components/form/InputField'
import Button from 'components/form/Button'
import { ICommonProps } from 'ts/interfaces/common-props'
import Layout from 'components/template/layout'

const Login = ({ className, ...props }: ICommonProps): JSX.Element => {
  return (
    <Layout>
      <div className="w-full max-w-xs m-auto">
        <h1 className="mb-6 text-xl">Publisher Playground</h1>
        <form
          className={classNames(
            'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',
            className,
          )}
          {...props}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <InputField
            label="Email Adress"
            type="email"
            name="email"
            placeholder="foo@bar.fr"
            autoComplete="email"
            required
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="••••••"
            autoComplete="current-password"
            required
          />

          <Button modifier="primary" className="mt-2" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
