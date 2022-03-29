import styled from 'styled-components'

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    height: 40rem;

    padding: 1rem;
    background-color: #e5e0ce;

    @media (min-width: 48rem) {
        flex-direction: row-reverse;
        padding: 1rem 2rem;
        height: auto;
    }
`

export const BannerTitle = styled.h2`
    margin: 0;

    font-family: Futura, "Helvetica Neue", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.25;

    color: ${props => props.theme.color.primary};
`

export const BannerDesc = styled.p`
    font-family: "Helvetica Neue", sans-serif;
    line-height: 1.5;

    color: ${props => props.theme.color.primary};
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const BannerProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: #e5e0ce;

    @media (min-width: 48rem) {
        flex-direction: row;
    }
`