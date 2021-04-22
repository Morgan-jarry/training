import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Route from 'components/Route'
import Login from 'views/Login'
import Articles from 'views/Articles'
import ShowArticle from 'views/Articles/Show'
import Templates from 'views/Templates'
import ShowTemplate from 'views/Templates/Show'

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/user/:userId/articles">
          <Articles />
        </Route>

        <Route path="/article/:articleId/show">
          <ShowArticle />
        </Route>

        <Route path="/user/:userId/templates">
          <Templates />
        </Route>

        <Route path="/template/:templateId/show">
          <ShowTemplate />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
