'use client'
import ModelProvider from '@/contexts/modal'
import ReduxProvider from '@/redux/provider'
import { SessionProvider } from 'next-auth/react'
const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReduxProvider>
			<SessionProvider>
				<ModelProvider>{children}</ModelProvider>
			</SessionProvider>
		</ReduxProvider>
	)
}

export default Provider
