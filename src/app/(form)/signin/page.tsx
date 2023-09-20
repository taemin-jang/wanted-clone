'use client'
import { useRef, useState } from 'react'
import {
	useForm,
	UseFormRegister,
	FieldValues,
	FieldErrors,
	ValidationRule,
} from 'react-hook-form'
import { useModalDispatchContext } from '@/contexts/modal'
import ModalComponent from '@/components/modal'
import isValid from '@/utils/isvalid'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { logIn, logOut } from '@/redux/slice/auth-slice'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface ErrorState {
	isError: boolean
	message: string
	type: string
}
interface InputData {
	type: string
	text: string
	placeholder: string
	error: ErrorState
	register: UseFormRegister<FieldValues>
	formErrors: FieldErrors<FieldValues>
	required: {
		required: string
		pattern?: ValidationRule<RegExp>
	}
}

const TextField = ({ inputDatas }: { inputDatas: InputData[] }) => {
	return (
		<>
			{inputDatas.map((data: InputData, index: number) => (
				<div
					key={index}
					className='flex flex-col py-2'>
					<label
						htmlFor={data.type}
						className='text-sm font-semibold text-gray-500 mb-2'>
						{data.text}
					</label>
					<input
						type={data.type}
						id={data.type}
						placeholder={data.placeholder}
						className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
							(data.error.type === data.type && data.error.isError) ||
							data.formErrors[data.type]
								? 'focus:border-red-500'
								: 'focus:border-blue-500'
						} focus:border-2`}
						{...data.register(data.type, data.required)}
					/>
					{data.formErrors[data.type] && (
						<small
							className='text-red-500 p-1'
							role='alert'>
							{data.formErrors[data.type]?.message as string}
						</small>
					)}
				</div>
			))}
		</>
	)
}

export default function Signin() {
	const {
		register,
		handleSubmit,
		setFocus,
		formState: { errors },
	} = useForm()
	const dispatch = useModalDispatchContext()
	const reduxDispatch = useDispatch<AppDispatch>()
	const modalContent = useRef('')
	const router = useRouter()
	let error = useRef({ isError: false, message: '', type: '' })
	const [selected, setSelected] = useState({ value: 'korean', icon: 'KR' })
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		switch (e.target.value) {
			case 'korean':
				setSelected({ value: 'korean', icon: 'KR' })
				break
			case 'english':
				setSelected({ value: 'english', icon: 'WW' })
				break
			case 'japanese':
				setSelected({ value: 'japanese', icon: 'JP' })

				break
		}
	}
	const inputDatas: InputData[] = [
		{
			type: 'id',
			text: '아이디',
			placeholder: '아이디를 입력해주세요.',
			error: error.current,
			register,
			formErrors: errors,
			required: { required: '아이디 입력은 필수입니다.' },
		},
		{
			type: 'password',
			text: '비밀번호',
			placeholder: '비밀번호를 입력해주세요.',
			error: error.current,
			register,
			formErrors: errors,
			required: {
				required: '비밀번호 입력은 필수입니다.',
				pattern: {
					value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%#*?&^~]).{8,}$/,
					message: '비밀번호 형식에 맞지 않습니다.',
				},
			},
		},
	]

	return (
		<div>
			<form
				onSubmit={handleSubmit((data) => {
					error.current = isValid('login', JSON.stringify(data))
					if (error.current.isError) {
						modalContent.current = error.current.message
						setFocus(error.current.type)
						dispatch({ type: 'open' })
					} else {
						reduxDispatch(logIn(data.id))
						router.push('/')
					}
					console.log(data, error.current)
				})}>
				<TextField inputDatas={inputDatas} />
				<button className='bg-blue-500 rounded-3xl text-white font-bold w-full py-2 mt-6 mb-2'>
					로그인 진행
				</button>
				<p>{error.current.isError}</p>
				<ModalComponent
					modalTitle='로그인'
					modalContent={modalContent.current}></ModalComponent>
			</form>
			<div className='flex flex-col w-full gap-3 my-2'>
				<p className='text-center text-xs text-gray-400 font-semibold'>또는</p>
				<div className='flex justify-evenly text-xs text-gray-400 font-semibold'>
					<button className='flex flex-col gap-1 justify-center items-center'>
						<svg
							viewBox='0 0 57 56'
							className='h-14 w-14'>
							<path
								d='M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z'
								fill='black'></path>
							<path
								d='M28.8182 19.359C30.0068 19.359 31.4968 18.5307 32.384 17.4264C33.1876 16.4256 33.7736 15.0279 33.7736 13.6302C33.7736 13.4404 33.7568 13.2506 33.7233 13.0953C32.4008 13.147 30.8104 14.0098 29.8561 15.1659C29.1028 16.046 28.4164 17.4264 28.4164 18.8413C28.4164 19.0484 28.4499 19.2555 28.4666 19.3245C28.5503 19.3418 28.6843 19.359 28.8182 19.359ZM24.6329 40.2381C26.2568 40.2381 26.9767 39.1165 29.0023 39.1165C31.0615 39.1165 31.5135 40.2036 33.3215 40.2036C35.0961 40.2036 36.2847 38.5126 37.4064 36.8561C38.6619 34.958 39.1809 33.0944 39.2144 33.0081C39.0972 32.9736 35.6988 31.5414 35.6988 27.5209C35.6988 24.0352 38.3773 22.465 38.528 22.3442C36.7535 19.7214 34.0581 19.6524 33.3215 19.6524C31.3294 19.6524 29.7055 20.8947 28.6843 20.8947C27.5794 20.8947 26.1229 19.7214 24.3986 19.7214C21.1173 19.7214 17.7858 22.5168 17.7858 27.7969C17.7858 31.0755 19.0247 34.5438 20.5481 36.787C21.8539 38.6851 22.9923 40.2381 24.6329 40.2381Z'
								fill='white'></path>
						</svg>
						<p>Apple</p>
					</button>
					<button className='flex flex-col gap-1 justify-center items-center'>
						<svg
							viewBox='0 0 57 56'
							className='h-14 w-14 border rounded-full'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M41.6657 28.3122C41.6657 27.34 41.5789 26.4044 41.4158 25.5068H28.5V30.8112H35.8813C35.5629 32.5255 34.5968 33.9792 33.1446 34.9514V38.3922H37.5758C40.1693 36.0044 41.6657 32.4889 41.6657 28.3122Z'
								fill='#3D82F0'></path>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M28.5003 41.7146C32.2032 41.7146 35.3072 40.4864 37.5761 38.3927L33.1449 34.9504C31.9167 35.7733 30.3457 36.2594 28.5003 36.2594C24.9285 36.2594 21.9053 33.8472 20.8264 30.606H16.2443V34.1595C18.5011 38.6411 23.1396 41.7146 28.5003 41.7146Z'
								fill='#31A752'></path>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M20.8261 30.606C20.5518 29.7831 20.3964 28.9039 20.3964 28.0002C20.3964 27.0966 20.5518 26.2174 20.8261 25.3945V21.841H16.244C15.316 23.6924 14.7857 25.7877 14.7857 28.0002C14.7857 30.2128 15.316 32.3081 16.244 34.1595L20.8261 30.606Z'
								fill='#F9BA00'></path>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M28.5003 19.7407C30.5133 19.7407 32.322 20.4325 33.7422 21.7917L37.6767 17.8588C35.3011 15.6447 32.1971 14.2855 28.5003 14.2855C23.1396 14.2855 18.5011 17.359 16.2443 21.842L20.8264 25.394C21.9053 22.1529 24.9285 19.7407 28.5003 19.7407Z'
								fill='#E64234'></path>
						</svg>
						<p>Google</p>
					</button>
					<button className='flex flex-col gap-1 justify-center items-center'>
						<svg
							viewBox='0 0 57 56'
							className='h-14 w-14'>
							<path
								d='M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z'
								fill='#FEE500'></path>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M28.5 16.2063C21.5606 16.2063 15.9286 20.5812 15.9286 25.9617C15.9286 29.3183 18.1034 32.2474 21.4223 34.0326L20.0269 39.1492C20.0005 39.2509 20.006 39.3583 20.0424 39.4569C20.0788 39.5555 20.1446 39.6406 20.2307 39.7008C20.3169 39.761 20.4195 39.7934 20.5246 39.7937C20.6297 39.7939 20.7324 39.7621 20.8189 39.7023L26.9286 35.6417C27.444 35.6417 27.972 35.7297 28.5 35.7297C35.4394 35.7297 41.0714 31.3549 41.0714 25.9617C41.0714 20.5686 35.4394 16.2063 28.5 16.2063Z'
								fill='#181600'></path>
						</svg>
						<p>Kakao</p>
					</button>
				</div>
				<p className='text-center text-sm text-gray-500 font-semibold my-2'>
					계정을 잊으셨나요? {'>'}
				</p>
			</div>
			<hr />
			<div className='flex flex-col justify-center items-center gap-3 text-gray-400 text-xs my-4'>
				<span className='flex gap-3'>
					<p>이용약관</p>
					<p className='font-extrabold text-gray-600'>개인정보처리방침</p>
				</span>
				<span>© Wantedlab, Inc.</span>
				<div className='flex gap-1 font-bold text-gray-600 border rounded px-3 py-2 mt-2'>
					<Image
						src={`https://static.wanted.co.kr/images/wantedoneid/ico_${selected.icon}.svg`}
						alt={selected.value}
						width={23}
						height={16}
						className='border'
					/>
					<select
						id='language'
						value={selected.value}
						onChange={handleSelect}>
						<option value='korean'>한국어</option>
						<option value='english'>English</option>
						<option value='japanese'>日本語</option>
					</select>
				</div>
			</div>
		</div>
	)
}
