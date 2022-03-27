import { Grid } from '@mui/material'
import styled from 'styled-components'

export const HeaderTop = styled(Grid)`
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`

export const HeaderLink = styled.a`
    padding: 1rem 0.5rem;

    &:hover {
        background-color: ${props => props.theme.color.hoverPrimary};
    }
`