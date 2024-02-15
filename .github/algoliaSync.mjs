//@ts-check
import algoliasearch from 'algoliasearch'
import { readFileSync } from "node:fs"
import { sync } from 'fumadocs-core/search-algolia/server'
import { join } from "node:path"

/**
 * @typedef {Object} Page
 * @property {string} url
 * @property {Object} data
 * @property {string} data.title
 * @property {string} data.description
 * @property {Object} data.exports
 * @property {Object} data.exports.structuredData
 * @property {{heading: string, content: string}[]} data.exports.structuredData.contents
 * @property {{id: string, content: string}[]} data.exports.structuredData.headings
 * @property {{title: string, url: string, depth: number}[]} data.exports.toc
 */

// Hacking the build step because fumadocs uses a webpack plugin to generate pages data as a virtual import
// So we output the data as a static api route GET:/api/pages and we read it here
const rawPages = readFileSync(join(import.meta.dirname, '../out/api/pages'), 'utf-8')
/** @type {Page[]} */
const allDocs = JSON.parse(rawPages)

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY)

sync(client, {
	documents: allDocs.map((doc) => ({
		_id: doc.url,
		url: doc.url,
		title: doc.data.title,
		structured: doc.data.exports.structuredData
	}))
})