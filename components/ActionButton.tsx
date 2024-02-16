import type { ComponentProps, ReactNode } from "react"

export function ActionButton({ label, ...props }: ComponentProps<'a'> & { label: ReactNode }) {
	return (
		<a {...props} style={{
			backgroundColor: 'rgb(46, 160, 67)',
			borderRadius: 6,
			border: '1px solid rgba(240, 246, 252, 0.1)',
			display: "flex",
			textDecoration: "none",
			padding: "3px 12px",
			justifyContent: "center",
			fontWeight: 500,
			color: "white",
		}}>
			{label}
		</a>
	)
}