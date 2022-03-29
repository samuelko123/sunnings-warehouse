import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.article`
	position: relative;

	:hover {
		border: 1px solid ${props => props.theme.color.primary};
	}
`

const CardHeader = styled.div`
	padding: 0.5rem;
	width: 100%;
	height: auto;
	max-height: 3rem;
	${Card}:hover & {
		max-height: 10rem;
	}
	transition: max-height 0.7s ease;

	background-color: ${props => props.theme.color.surface};

	position: absolute;
	bottom: 0;
	z-index: 2;
	overflow: hidden;
`

const CardTitle = styled.p`
	margin: 0;
	height: 2rem;

	font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
	color: ${props => props.theme.color.primary};
`

const CardDesc = styled.p`
	margin-top: 0.5rem;
	margin-bottom: 0;
	font-family: "Helvetica Neue", sans-serif;
    font-size: 0.9rem;
    line-height: 1.5rem;
	color: ${props => props.theme.color.onSurface};

	display: -webkit-box;
	overflow: hidden;
   	text-overflow: ellipsis;
	-webkit-line-clamp: 4;
   	-webkit-box-orient: vertical;

	opacity: 0;
	${Card}:hover & {
		opacity: 1;
	}
	transition: opacity 0.5s ease 0.2s;

	@media (max-width: 48rem) {
		line-height: 1.2rem;
		-webkit-line-clamp: 3;
	}
`

const CardImage = styled.img`
	width: 100%;
`

export const ArticleCard = (props) => {
	const {
		imgSrc,
		name,
		desc,
	} = props

	return (
		<Link href='/' passHref={true}>
			<a>
				<Card>
					<CardHeader>
						<CardTitle>
							{name}
						</CardTitle>
						<CardDesc>
							{desc}
						</CardDesc>
					</CardHeader>
					<figure>
						<CardImage
							alt='illustration image'
							src={imgSrc}
						/>
					</figure>
				</Card>
			</a>
		</Link>
	)
}