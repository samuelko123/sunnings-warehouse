import styled from 'styled-components'

export const HeaderTop = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;

    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`

export const HeaderBottom = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: nowrap;
    justify-content: center;
    align-content: center;

    padding: 0.5rem;

    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};
`

export const HeaderContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;

    flex: 1;
`

export const HeaderContainerCentre = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    flex: 1;
`

export const HeaderContainerRight = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: center;

    flex: 1;
`

export const HeaderLink = styled.a`
    padding: 1rem 0.5rem;

    &:hover {
        background-color: ${props => props.theme.color.hoverPrimary};
    }
`