import styled from 'styled-components'

export const SlideContainer = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;

    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`

export const SlideContentLeft = styled.div`
    float: left;
    width: 50%;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 5rem;
`

export const SlideContentRight = styled.div`
    float: right;
    width: 50%;
    line-height: 0; // to close gap at bottom of picture
`