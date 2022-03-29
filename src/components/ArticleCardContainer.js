import styled from 'styled-components'

export const ArticleCardContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.gap * 0.5}rem;

    @media (min-width: 48rem) {
        grid-template-columns: repeat(4, 1fr);
    }
`