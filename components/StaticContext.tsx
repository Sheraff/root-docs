"use client"

import { createContext, useContext, type ReactNode } from "react"

type StaticContextValue = {
	basePath: string
	algoliaAppId: string
	algoliaSearchApiKey: string
}

const StaticContext = createContext<StaticContextValue | null>(null)

export function useStaticContext() {
	const context = useContext(StaticContext)
	if (context == null) {
		throw new Error("useStaticContext must be used within a StaticContextProvider")
	}
	return context
}

export const StaticContextProvider = (props: { children: ReactNode, value: StaticContextValue }) => <StaticContext.Provider value={props.value}>{props.children}</StaticContext.Provider>