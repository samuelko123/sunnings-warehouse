import React from 'react'
import { Box } from '@mui/material'
import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.article`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;

	height: 17rem;

	position: relative;

    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};
`

const CardImage = styled.img`
	margin: auto;
	width: 100%;
`

const CardTitle = styled.span`
	font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 1.25rem;

	color: ${props => props.theme.color.primary};
`

const CardFooter = styled(Box)`
	${Card}:hover & {
		position: absolute;
		bottom: 0;
		background-color: ${props => props.theme.color.surface};
	}

	transition: all 0.5s;
`

const CardDesc = styled.p`
	display: none;
	${Card}:hover & {
		display: -webkit-box;
	}
   	-webkit-line-clamp: 4;
   	-webkit-box-orient: vertical;
   	overflow: hidden;
   	text-overflow: ellipsis;
	transition: all 0.5s;

	margin: 0;

	font-family: "Helvetica Neue", sans-serif;
    font-size: 0.9rem;
    line-height: 1.5rem;
`

export const ArticleCard = (props) => {
	const {
		picLink1,
		picLink2,
		name,
		desc,
	} = props

	const [showDesc, setShowDesc] = React.useState(false)

	return (
		<Link href='/' passHref={true}>
			<a>
				<Card
					onMouseEnter={() => setShowDesc(true)}
					onMouseLeave={() => setShowDesc(false)}
				>
					<figure>
						<picture>
							<source
								media='(min-width: 0px)'
								srcSet={picLink1}
							/>
							<CardImage
								alt='Category image'
								src={picLink2}
							/>
						</picture>
					</figure>

					<CardFooter p={1} expand={showDesc}>
						<CardTitle>
							{name}
						</CardTitle>
						<CardDesc show={showDesc}>
							{desc}
						</CardDesc>
					</CardFooter>
				</Card>
			</a>
		</Link>
	)
}