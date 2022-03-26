import styled from 'styled-components'

export const Section = styled.section`
    padding: 1rem;
`

export const SectionHeader = styled.h2`
    position: relative;
    word-break: break-word;

    font-family: Futura, "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.5;
    color: ${props => props.theme.color.primary};

    margin-left: 1.5rem;

    :before {
        position: absolute;
        left: -1.5rem;

        content: "";
        width: 0.5rem;
        height: 100%;

        background-color: ${props => props.theme.color.secondary};
    }
`