import styled from 'styled-components'

export const Header = styled.header`
    position: relative;

    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;

    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`

export const HeaderContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
`

export const HeaderContainerCentre = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`

export const HeaderContainerRight = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: flex-end;
    align-content: center;
`

export const HeaderLink = styled.a`
    padding: 1rem 1rem;
    &:hover {
        background-color: ${props => props.theme.color.hoverPrimary};
    }
`