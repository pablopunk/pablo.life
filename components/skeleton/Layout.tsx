import React, { FunctionComponent } from 'react'
import Nav from 'components/skeleton/Nav'
import Meta from 'components/skeleton/Meta'
import Link from 'next/link'
import { _, locales, DEFAULT_LOCALE } from 'lib/locales'
import { PageProps } from 'types/page'
import { Button } from 'storyblok/components/Button'

const Layout: FunctionComponent<PageProps> = ({
  page,
  nav,
  children,
  statusCode,
}) => {
  const meta = page?.content.metadata || {}
  const lang = page?.lang || DEFAULT_LOCALE
  const mainNav = nav?.content?.main || []

  return (
    <>
      <Meta {...meta} locale={lang} />
      <Nav main={mainNav} />
      <main className="container max-w-screen-lg px-5 py-3 mx-auto fill-height">
        {page ? (
          children
        ) : (
          <div className="flex flex-col items-center justify-center w-full fill-height">
            <h1 className="mb-4 text-2xl">oops! error {statusCode}</h1>
            <Button blok={{ text: 'Go home', link: { url: '/' } }} />
          </div>
        )}
      </main>
      <footer
        className="items-center justify-around hidden w-full p-4 mx-auto md:flex bg-bg2 opacity-80"
        style={{ height: 'var(--footer-height)' }}
      >
        <p>
          {locales.map((l) => {
            return lang === l ? (
              <span key={l}> {l} </span>
            ) : (
              <Link href={'/' + l} locale={l} key={l}>
                {l}
              </Link>
            )
          })}
        </p>
        <p>© Pablo Varela {new Date().getFullYear()}</p>
        <p>
          <a href="https://github.com/pablopunk/pablopunk.com">
            {_('Source code', lang)}
          </a>
        </p>
      </footer>
    </>
  )
}

export default Layout
