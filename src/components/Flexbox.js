import styled from 'styled-components'

export const FlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    gap: ${props => props.gap ? `${props.gap * 0.5}rem` : null };

    padding: ${props => props.p ? `${props.p * 0.5}rem` : null };
    flex: 1;
`