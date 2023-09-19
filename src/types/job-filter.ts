export interface Data {
	keyword: string
	style?: string
	query: {
		key: string
		value: string
	}
}

export interface Tag extends Data {
	id: number
	kind_title: string
	title: string
}

export type onClick = (key: string, value: string) => void
