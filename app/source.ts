import { map } from '.map'
import { createMDXSource } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { create } from "components/Icon"
import { icons } from 'lucide-react'

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/',
  rootDir: 'docs',
  source: createMDXSource(map),
  icon(icon) {
    if (icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] })
  },
})
