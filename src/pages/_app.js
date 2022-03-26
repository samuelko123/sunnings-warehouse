import {
	ThemeProvider,
	createGlobalStyle,
} from 'styled-components'

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
`

function App(props) {
	const {
		Component,
		pageProps,
	} = props

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
