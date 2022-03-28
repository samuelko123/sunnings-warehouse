import React from 'react'
import { Box } from '@mui/material'
import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.article`
	position: relative;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;

    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};
`

const CardImage = styled.img`
	width: 100%;
`

const CardTitle = styled.span`
	font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 1.25rem;

	color: ${props => props.theme.color.primary};
`

const CardHeader = styled(Box)`
	position: absolute;
	top: 0;
	z-index: 2;

	width: 100%;
	height: auto;
	max-height: 2.5rem;

	background-color: ${props => props.theme.color.surface};
	overflow: hidden;

	${Card}:hover & {
		max-height: 10rem;
	}

	transition: max-height 1s ease;
`

const CardDesc = styled.p`
	margin-top: 0.5rem;
	margin-bottom: 0;
	font-family: "Helvetica Neue", sans-serif;
    font-size: 0.9rem;
    line-height: 1.5rem;

	display: -webkit-box;
	overflow: hidden;
   	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
   	-webkit-box-orient: vertical;
`

const Figure = styled.figure`
	position: relative;
	top: 2.5rem;
	z-index: 1;
`

export const ArticleCard = (props) => {
	const {
		picLink1,
		picLink2,
		name,
		desc,
	} = props

	return (
		<Link href='/' passHref={true}>
			<a>
				<Card>
					<CardHeader p={1}>
						<CardTitle>
							{name}
						</CardTitle>
						<CardDesc>
							{desc}
						</CardDesc>
					</CardHeader>
					<Figure>
						<picture>
							<source
								media='(min-width: 0px)'
								srcSet={picLink1}
							/>
							<CardImage
								alt='illustration image'
								src={picLink2}
							/>
						</picture>
					</Figure>
				</Card>
			</a>
		</Link>
	)
}