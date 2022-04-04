import styled from 'styled-components'

export const Badge = styled.span`
    position: absolute;
    left: 50%;
    top: 15%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.onSecondary};

    font-size: 0.625rem;
    font-weight: bold;
`