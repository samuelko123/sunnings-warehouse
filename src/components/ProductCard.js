import { Box } from '@mui/material'
import Link from 'next/link'
import styled from 'styled-components'
import { CartButton } from './Button'

const Card = styled.article`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;

    padding: 1rem;
	width: 17rem;
	height: 21rem;

    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};
`

const CardFooter = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
`

const ProductImage = styled.img`
	margin: auto;
	width: 10rem;
	height: 10rem;
`

const ProductName = styled.span`
	font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 1.25rem;
`

const ProductPriceDollar = styled.span`
	font-family: Challenge, Futura, "Helvetica Neue", sans-serif;
	font-size: 2rem;
`

const ProductPriceCent = styled.sup`
	position: relative;
    font-size: 70%;
    left: 0.3rem;
    vertical-align: 0.4rem;
    line-height: 1;
`

const ProductPriceTag = (props) => {
	const { price } = props

	const [dollar, cent] = price.toFixed(2).split('.')

	return (
		<ProductPriceDollar>
			${dollar}
			{
				cent !== '00' &&
				<ProductPriceCent>.{cent}</ProductPriceCent>
			}
		</ProductPriceDollar>
	)
}

export const ProductCard = (props) => {
	const {
		picLink1,
		picLink2,
		name,
		price,
	} = props

	return (
		<Card>
			<Box>
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
			</Box>
			<CardFooter>
				<ProductPriceTag price={price} />
				<CartButton>
					<img
						alt='add to cart'
						src='/img/add-to-cart.svg'
					/>
				</CartButton>
			</CardFooter>
		</Card>
	)
}