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
import LogoBtn from '@/app/(form)/signin/logoBtn'
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

	const handleSubmitForm = (data: FieldValues) => {
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
	}
	return (
		<div>
			<form onSubmit={handleSubmit(handleSubmitForm)}>
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
					<LogoBtn
						name='naver'
						color='bg-naver-main'
					/>
					<LogoBtn name='google' />
					<LogoBtn name='kakao' />
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
