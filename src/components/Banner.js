import { Grid } from '@mui/material'
import styled from 'styled-components'

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

export const BannerContainer = styled(Grid)`
    background-color: #e5e0ce;
`