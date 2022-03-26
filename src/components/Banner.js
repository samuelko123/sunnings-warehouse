import styled from 'styled-components'

export const Banner = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    padding: 1rem;

    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    flex: 1;
`

export const BannerTitle = styled.h2`
    margin: 0;

    font-family: Futura, "Helvetica Neue", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.25;
`

export const BannerDesc = styled.p`
    font-family: "Helvetica Neue", sans-serif;
    line-height: 1.5;
`

export const BannerProducts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;
`