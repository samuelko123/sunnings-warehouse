import Link from 'next/link'
import styled from 'styled-components'
import { CartButton } from './Button'
import { Stepper } from './Stepper'

const CardContainer = styled.article`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;

	width: 100%;
	height: 9rem;
	padding: 0.5rem;
	padding-left: 0;

    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};

	@media (min-width: 48rem) {
		flex-direction: column;
		width: 17rem;
		height: 21rem;
		padding: 1rem;
	}
`

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
`

const ProductImage = styled.img`
	margin: 0;

	width: 8rem;
	height: 8rem;
	@media (min-width: 48rem) {
		width: 10rem;
		height: 10rem;
	}
`

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	gap: 0.5rem;
	flex: 1;
`

const CardTitle = styled.div`
	width: 100%;
`

const ProductName = styled.p`
	margin: 0;

	font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 1.25rem;

	display: -webkit-box;
	overflow: hidden;
   	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
   	-webkit-box-orient: vertical;
`

const CardDetail = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 100%;
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
		imgSrc,
		name,
		price,
		qty,
	} = props

	qty = qty || 0

	return (
		<CardContainer>
			<ImageContainer>
				<Link href='/' passHref={true}>
					<a>
						<figure>
							<ProductImage
								alt='Product image'
								src={imgSrc}
							/>
						</figure>
					</a>
				</Link>
			</ImageContainer>

			<CardContent>
				<CardTitle>
					<ProductName>
						{name}
					</ProductName>
				</CardTitle>
				<CardDetail>
					{qty === 0 &&
						<>
							<ProductPriceTag price={price} />
							<CartButton>
								<img
									alt='add to cart'
									src='/img/add-to-cart.svg'
								/>
							</CartButton>
						</>
					}
					{
						qty > 0 &&
						<Stepper num={qty} />
					}
				</CardDetail>
			</CardContent>
		</CardContainer>
	)
}