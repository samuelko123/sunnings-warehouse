import {
	ThemeProvider,
	createGlobalStyle,
} from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import {
	persistor,
	store,
} from '../redux/store'
import { Layout } from '../components/Layout'
import { theme } from '../styles/theme'
import '../styles/fonts.css'

const GlobalStyle = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-size: 16px;
		font-weight: normal;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		background-color: ${props => props.theme.color.background};
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

	figure {
		margin: 0;
	}

	.slick-dots li button:before,
	.slick-dots li.slick-active button:before {
		font-size: 0.6rem;
		position: relative;
		opacity: 1;
		color: transparent;
		border: 2px solid ${props => props.theme.color.primary};
		border-radius: 50%;
	}

	.slick-dots li.slick-active button:before {
		background-color: ${props => props.theme.color.primary};
	}
`

function App(props) {
	const {
		Component,
		pageProps,
	} = props

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<Layout>
						<GlobalStyle />
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
