import { RootProvider } from 'fumadocs-ui/provider'
import 'fumadocs-ui/style.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { pageTree } from './source'
import { DocsLayout } from 'fumadocs-ui/layout'
import { AlgoliaSearch } from "@/components/AlgoliaSearch"

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RootProvider search={{ SearchDialog: AlgoliaSearch }}>
          <DocsLayout tree={pageTree} nav={{ title: 'My App', githubUrl: "https://github.com/Sheraff/root", enabled: true, }} >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  )
}
