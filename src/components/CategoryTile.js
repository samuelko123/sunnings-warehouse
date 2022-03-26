import Link from 'next/link'
import styled from 'styled-components'

const Tile = styled.article`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;

	width: 18rem;

    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};
`

const TileFooter = styled.div`
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
`

const CategoryImage = styled.img`
	margin: auto;
	width: 100%;
`

const CategoryName = styled.span`
	font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 1.25rem;

	color: ${props => props.theme.color.primary};
`

const CategoryDesc = styled.p`
	font-family: "Helvetica Neue", sans-serif;
    font-size: 0.9rem;
    line-height: 1.5rem;
`

export const CategoryTile = (props) => {
	const {
		picLink1,
		picLink2,
		name,
		desc,
	} = props

	return (
		<Tile>
			<Link href='/' passHref={true}>
				<a>
					<figure>
						<picture>
							<source
								media='(min-width: 0px)'
								srcSet={picLink1}
							/>
							<CategoryImage
								alt='Category image'
								src={picLink2}
							/>
						</picture>
					</figure>
				</a>
			</Link>

			<TileFooter>
				<CategoryName>
					{name}
				</CategoryName>
				<CategoryDesc>
					{desc}
				</CategoryDesc>
			</TileFooter>
		</Tile>
	)
}