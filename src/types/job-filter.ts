export interface Data {
	keyword: string;
	style?: string;
	query: {
		key: string;
		value: string;
	};
}

export type onClick = (key: string, value: string) => void;
