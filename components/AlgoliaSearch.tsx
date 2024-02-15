"use client"
import algoliasearch from 'algoliasearch/lite'
import type { SharedProps } from 'fumadocs-ui/components/dialog/search'
import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia'

const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!)
const index = client.initIndex("document")

export function AlgoliaSearch(props: SharedProps) {
	return <SearchDialog index={index} {...props} />
}