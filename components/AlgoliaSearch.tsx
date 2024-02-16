"use client"
import { useStaticContext } from "@/components/StaticContext"
import algoliasearch from 'algoliasearch/lite'
import type { SharedProps } from 'fumadocs-ui/components/dialog/search'
import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia'
import Image from "next/image"
import { useState } from "react"

export function AlgoliaSearch(props: SharedProps) {
	const { basePath, algoliaAppId, algoliaSearchApiKey } = useStaticContext()
	const [index] = useState(() => {
		const client = algoliasearch(algoliaAppId, algoliaSearchApiKey)
		const index = client.initIndex("document")
		return index
	})
	return <SearchDialog index={index} {...props} footer={<Image src={`${basePath}/algolia.svg`} alt="Algolia logo" width={80} height={20} style={{ marginLeft: "auto" }} />} />
}