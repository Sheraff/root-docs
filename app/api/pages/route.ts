import { getPages } from "@/app/source"


export function GET() {
	return new Response(JSON.stringify(getPages()))
}