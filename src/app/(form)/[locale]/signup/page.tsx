'use client'
import { useRef, useState } from 'react'
import isValid from '@/utils/isvalid'
import ModalComponent from '@/components/modal'
import { useModalDispatchContext } from '@/contexts/modal'

interface ObjRef {
	value: string
	isFocus: boolean
}

interface ErrorState {
	isError: boolean
	message: string
	type: string
}
interface InputData {
	type: string
	text: string
	placeholder: string
	event: (e: React.ChangeEvent) => void
	obj: ObjRef
	error: ErrorState
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
						onChange={data.event}
						placeholder={data.placeholder}
						className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
							data.obj?.isFocus && data.error.isError
								? 'focus:border-red-500'
								: 'focus:border-blue-500'
						} focus:border-2`}
					/>
					{data.obj?.isFocus && data.error.isError ? (
						<p className=' inli text-red-500 text-xs p-1'>
							{data.error.message}
						</p>
					) : (
						<></>
					)}
				</div>
			))}
		</>
	)
}

export default function Signup() {
	const [id, setId] = useState('')
	const passwordObj = useRef<ObjRef>({ value: '', isFocus: false })
	const emailObj = useRef<ObjRef>({ value: '', isFocus: false })

	const [error, setError] = useState<ErrorState>({
		isError: false,
		message: '',
		type: '',
	})
	const dispatch = useModalDispatchContext()
	const onChangeId = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement
		setId(() => target.value)
		console.log('state :', id, 'input : ', target.value)
	}

	const onChangePassword = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement
		setError(isValid(target.type, target.value))
		emailObj.current.isFocus = false
		passwordObj.current.value += target.value
		passwordObj.current.isFocus = true
	}

	const onChangeEmail = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement
		setError(isValid(target.type, target.value))
		passwordObj.current.isFocus = false
		emailObj.current.value += target.value
		emailObj.current.isFocus = true
	}

	const onSubmitForm = (e: React.FormEvent) => {
		e.preventDefault()
		dispatch({ type: 'open' })
	}

	const ActiveButton = () => {
		return id.length &&
			passwordObj.current.value &&
			emailObj.current.value &&
			!error.isError ? (
			<button className='bg-blue-500 rounded-3xl text-white font-bold w-full py-2 mt-8 mb-2'>
				회원가입 진행
			</button>
		) : (
			<button
				className='bg-gray-200 rounded-3xl text-gray-400 font-bold w-full py-2 mt-8 mb-2'
				disabled>
				회원가입 진행
			</button>
		)
	}

	const inputDatas: InputData[] = [
		{
			type: 'password',
			text: '비밀번호',
			placeholder: '비밀번호를 입력해주세요.',
			event: onChangePassword,
			obj: passwordObj.current,
			error: error,
		},
		{
			type: 'email',
			text: '이메일',
			placeholder: '이메일을 입력해주세요.',
			event: onChangeEmail,
			obj: emailObj.current,
			error: error,
		},
	]

	return (
		<div>
			<form onSubmit={onSubmitForm}>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='id'
						className='text-sm font-semibold text-gray-500 mb-2'>
						아이디
					</label>
					<input
						type='id'
						id='id'
						value={id}
						onChange={onChangeId}
						placeholder='아이디를 입력해주세요.'
						className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
							id.length ? 'focus:border-blue-500' : 'focus:border-red-500'
						} focus:border-2`}
					/>
				</div>
				<TextField inputDatas={inputDatas} />
				<ActiveButton />
				<ModalComponent
					modalTitle='회원가입'
					modalContent='회원가입이 성공적으로 되었습니다!'
				/>
			</form>
		</div>
	)
}
