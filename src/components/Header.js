import { Grid } from '@mui/material'
import styled from 'styled-components'

export const HeaderTop = styled(Grid)`
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`

export const HeaderLink = styled.a`
    @media (max-width: 48rem) {
        padding: 1rem 0.5rem;
    }

    padding: 1rem 1rem;

    :hover {
        background-color: ${props => props.theme.color.hoverPrimary};
    }
`

export const HeaderIcon = styled.img`
    @media (max-width: 48rem) {
        width: 1rem;
        height: 1rem;
    }

    width: 1.5rem;
    height: 1.5rem;
`