import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import SimpleList from 'components/layout/SimpleList'
import humanNumber from 'human-number'
import Loading from 'components/Loading'
import { t } from 'lib/locales'

const API = 'https://repos.pablo.pink/api'

const ADDITIONAL_REPOS = [
  {
    name: 'lad',
    html_url: 'https://github.com/ladjs/lad',
    stargazers_count: '1700',
    description: 'Lad scaffolds a Koa webapp and API framework for Node.js',
  },
  {
    name: 'forwardemail.net',
    html_url: 'https://github.com/forwardemail/free-email-forwarding',
    stargazers_count: '1500',
    description: 'The best free email forwarding for custom domains',
  },
]

const fetcher = (url) => fetch(url).then((_) => _.json())

export default ({ locale }) => {
  const { data, error } = useSWR(API, fetcher)

  if (error) {
    return <strong style={{ color: 'orangered' }}>Error fetching repos</strong>
  }

  if (!data) {
    return <Loading />
  }

  const repos = [...ADDITIONAL_REPOS, ...data]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 13)
    .map((repo) => ({
      ...repo,
      description: repo.description?.replace('[UNMANTAINED]. ', '') || '',
    }))
    .map((repo) => ({
      ...repo,
      description: t(repo.description ?? '', locale),
    }))
    .map((repo) => ({
      ...repo,
      stargazers_count_nice: humanNumber(repo.stargazers_count),
    }))

  return (
    <SimpleList>
      {repos.map((repo) => (
        <li key={repo.name}>
          <span className="first-line">
            <a href={repo.html_url}>/{repo.name}</a>
            <span>{repo.stargazers_count_nice}</span>
            <span>⭐️</span>
          </span>
          <p>{repo.description}</p>
        </li>
      ))}
      <style jsx>{`
        .first-line {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .first-line > * {
          margin-right: 1rem;
        }
      `}</style>
    </SimpleList>
  )
}
