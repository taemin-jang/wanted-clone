import { ReadonlyURLSearchParams } from 'next/navigation';

const utilCreateQueryString = (
	name: string,
	value: string,
	searchParams: ReadonlyURLSearchParams,
) => {
	const params = new URLSearchParams(searchParams);
	params.set(name, value);

	return params.toString();
};

export default utilCreateQueryString;
