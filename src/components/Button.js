import styled from 'styled-components'

export const CartButton = styled.button`
	height: fit-content;
	border: none;
	cursor: pointer;

	background-color: #ffab00;
	color: #515151;
	:hover {
		background-color: #ff9900;
	}
`

export const ShopButton = styled.button`
	height: fit-content;
    width: fit-content;
    padding: 1rem 3.5rem;

	border: none;
	cursor: pointer;
    font-weight: bold;

	background-color: ${props => props.theme.color.secondary};
	color: ${props => props.theme.color.onSecondary};
	:hover {
		background-color: ${props => props.theme.color.hoverSecondary};
	}
`