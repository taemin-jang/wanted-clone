interface Img {
	origin: string
	thumb: string
}

export interface Job {
	address: {
		country: string
		location: string
	}
	category_tags: { id: number; parent_id: number }[]
	company: {
		id: number
		industry_name: string
		name: string
	}
	compare_country: boolean
	due_time?: string
	hidden: boolean
	id: number
	is_bookmark: boolean
	is_like: boolean
	like_count: number
	logo_img: Img
	matching_score?: number
	position: string
	reward: {
		formatted_recommendee: string
		formatted_recommender: string
		formatted_total: string
	}
	score?: number
	status: string
	title_img: Img
}

export interface JobAPI {
	jobs: {
		data: Job[]
	}
}
