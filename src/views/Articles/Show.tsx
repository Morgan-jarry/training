import { useEffect, useState } from 'react'
import { Tarticle } from 'ts/types/article'
import { fetchApi } from 'utils/fetch'
import { useParams, useHistory } from 'react-router-dom'
import Layout from 'components/template/layout'
import Button from 'components/form/Button'
import ReactMarkdown from 'react-markdown'

interface IParams {
  articleId: string
}

const ShowArticles = (): JSX.Element | null => {
  const history = useHistory()
  const { articleId } = useParams<IParams>()
  const [article, setArticle] = useState<Tarticle>()

  useEffect(() => {
    fetchApi<Tarticle[]>(`/articles?id=${articleId}`).then((response) => {
      console.log('response', response)
      setArticle(response[0])

      return response
    })
  }, [])

  if (!article) {
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
        <article className="bg-white p-4 my-4 rounded shadow">
          <header className="mb-5 pb-5 border-b">
            <h1 className="text-3xl">{article.title}</h1>
            <time className="text-xs" dateTime={`${article.publication_date}`}>
              {article.publication_date}
            </time>
          </header>

          <ReactMarkdown className="markdown">{article.content}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  )
}

export default ShowArticles
