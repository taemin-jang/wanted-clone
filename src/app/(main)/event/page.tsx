import Image from 'next/image'

export default function Event() {
	return (
		<>
			<div>
				<Image
					src={
						'https://static.wanted.co.kr/images/banners/themes/452_34d234da.jpg'
					}
					width={1900}
					height={200}
					alt='kakao'
				/>
				<div className='max-w-wanted mt-10 m-auto'>
					<h1 className='text-3xl font-bold'>
						카카오벤처스 X 패밀리 기업 공동 채용
					</h1>
					<div className='text-lg text-gray-400'>
						<br />
						<p>Startup’s most reliable partner! KakaoVentures</p>
						<br />
						<p>
							창업이 더 나은 세상을 만들 수 있을까요? 끊임없는 도전과 혁신의
							아이콘 {`"카카오벤처스 패밀리"`}를 소개 합니다.
						</p>
						<br />
						<p>
							#셀렉트스타 _ All in One AI DATA SOLUTION, 데이터는 셀렉트스타!
							#스와치온 _ 패션브랜드들이 그들의 메시지를 표현할 수 있는 더 멋진
							방법을 제시한다 #스파이더랩 _ 도서 유통시장의 유튜브를 꿈꾸며,
							양방향 서비스를 통해 시장을 혁신합니다 #프릿지크루 _ 반려동물 No.1
							플랫폼, 헬로티피를 함께 만들어갈 분을 찾습니다 #브이에이게임즈 _
							애니메이션을 넘어서는 카툰 렌더링 게임을 함께 만들어 가고 있습니다
							#가지랩 _ 웰니스 No.1 플랫폼, 가지랩을 함께 만들어갈 분을 찾습니다
							#드리모 _ 전 세계 유저들에게 사랑받는 게임을 함께 만들어갈 분을
							찾습니다 #제이앤피메디 _ 블록체인 기술을 활용한 임상시험 데이터
							플랫폼 #리콘랩스 _ 누구나 쉽게 3D 콘텐츠를 만들고 활용할 수 있는
							온라인 서비스 #프라이데이즈랩 _ 고객의 구매 주기에 맞는 개인화
							상품 추천 글로벌 SaaS를 만들어요!
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
