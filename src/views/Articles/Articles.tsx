import { useEffect, useState } from 'react'
import { Tarticle } from 'ts/types/article'
import { fetchApi } from 'utils/fetch'
import { useParams } from 'react-router-dom'
import Layout from 'components/template/layout'
import ButtonLink from 'components/ButtonLink'

interface IParams {
  userId: string
}

const Articles = (): JSX.Element | null => {
  const { userId } = useParams<IParams>()
  const [articles, setArticles] = useState<Tarticle[]>([])

  useEffect(() => {
    fetchApi<Tarticle[]>(`/articles?author_id=${userId}`).then((response) => {
      setArticles(response)

      return response
    })
  }, [])

  if (!articles || articles.length < 1) {
    return (
      <Layout className="flex justify-center items-center">Chargement…</Layout>
    )
  }

  return (
    <Layout>
      <table className="table-fixed shadow-lg bg-white">
        <thead>
          <tr className="flex-initial">
            {Object.keys(articles[0])
              .filter((label) => ['title', 'description'].includes(label))
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
          {articles.map((article) => (
            <tr key={article.id}>
              <td className="border px-5 py-4">{article.title}</td>
              <td className="border px-5 py-4">{article.description}</td>
              <td className="border px-5 py-4">
                <ButtonLink to={`/article/${article.id}/show`}>Show</ButtonLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Articles
