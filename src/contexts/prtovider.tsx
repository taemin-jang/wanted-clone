import ModelProvider from '@/contexts/modal'
import ReduxProvider from '@/redux/provider'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReduxProvider>
			<ModelProvider>{children}</ModelProvider>
		</ReduxProvider>
	)
}

export default Provider
