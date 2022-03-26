import styled from 'styled-components'

export const LinkText = styled.a`
    font-size: ${props => props.size}px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`