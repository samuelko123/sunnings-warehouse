import styled from 'styled-components'

export const Slide = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;

    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`