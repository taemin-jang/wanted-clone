'use client'
import { useRef } from 'react'
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
				<button className='bg-blue-500 rounded-3xl text-white font-bold w-full py-2 mt-8 mb-2'>
					로그인 진행
				</button>
				<p>{error.current.isError}</p>
				<ModalComponent
					modalTitle='로그인'
					modalContent={modalContent.current}>
					<button></button>
				</ModalComponent>
			</form>
		</div>
	)
}
