import styled from 'styled-components'

export const FlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    gap: ${props => props.gap * 0.5}rem;

    padding: ${props => props.p * 0.5}rem;
    flex: 1;
`