import Link from 'next/link'
import styled from 'styled-components'
import { CartButton } from './Button'

const Tile = styled.article`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;

    padding: 1rem;

    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};
`

const TileFooter = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
    justify-content: space-between;
    align-content: flex-start;
`

const ProductImage = styled.img`
	margin: auto;
`

const ProductName = styled.p`
	font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 1.25rem;
`

const ProductPrice = styled.span`
	font-family: Challenge, Futura, "Helvetica Neue", sans-serif;
	font-size: 2rem;
`

export const ProductTile = (props) => {
	const {
		picLink1,
		picLink2,
		name,
		price,
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
							<ProductImage
								alt='Product image'
								src={picLink2}
							/>
						</picture>
					</figure>
				</a>
			</Link>
			<ProductName>
				{name}
			</ProductName>
			<TileFooter>
				<ProductPrice>${price}</ProductPrice>
				<CartButton>
					<img
						alt='add to cart'
						src='/img/add-to-cart.svg'
					/>
				</CartButton>
			</TileFooter>
		</Tile>
	)
}