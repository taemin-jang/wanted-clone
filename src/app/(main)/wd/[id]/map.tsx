export default function Map({
	address,
	lng,
	lat,
}: {
	address: string
	lng: number
	lat: number
}) {
	return (
		<>
			<a
				href={`https://map.naver.com/?dlevel=13&pinTitle=${address}&lat=${lat}&lng=${lng}`}
				target='_blank'>
				<img
					className='mt-3'
					src={`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=700&h=254&markers=type:d|color:Red|pos:${lng} ${lat}&X-NCP-APIGW-API-KEY-ID=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}></img>
			</a>
		</>
	)
}
