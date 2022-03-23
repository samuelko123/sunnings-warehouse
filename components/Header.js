import styled from 'styled-components'

export const Header = styled.header`
    position: relative;

    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    width: 100%;
    height: 5rem;

    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`