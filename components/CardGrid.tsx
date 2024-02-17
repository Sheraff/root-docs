import Image from "next/image"
import type { ReactNode } from "react"

export function CardGrid({ children }: { children: ReactNode }) {
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
			{children}
		</div>
	)
}

export function CardGridItem({ children, title, href, src }: { children: ReactNode, title: string, href: string, src: string | ReactNode }) {
	return (
		<a href={href} style={{ textDecoration: "none", color: "inherit" }} target="_blank">
			<div className="flex flex-col items-center gap-2 h-full not-prose block rounded-lg border bg-card p-4 text-sm text-card-foreground text-center shadow-md transition-colors hover:bg-muted/80">
				{typeof src === 'string' ? <Image src={src} alt={title} width="64" height="64" className="h-16" /> : src}
				<h3 className="font-medium">{title}</h3>
				<div className="text-muted-foreground">
					{children}
				</div>
			</div>
		</a>
	)
}