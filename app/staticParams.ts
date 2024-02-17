export const staticParams = {
	basePath: process.env.CI ? "/root-docs" : "",
	algoliaAppId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
	algoliaSearchApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
}