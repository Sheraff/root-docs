import { RootProvider } from 'fumadocs-ui/provider'
import 'fumadocs-ui/style.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { pageTree } from './source'
import { DocsLayout } from 'fumadocs-ui/layout'

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RootProvider>
          <DocsLayout tree={pageTree} nav={{ title: 'My App' }}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  )
}
