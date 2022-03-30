import styled from 'styled-components'
import { FlexBox } from '../components/Flexbox'
import { ShopButton } from '../components/Button'

const Container = styled(FlexBox)`
	margin: 2.5rem auto;
    text-align: center;

	@media (min-width: 48rem) {
		width: 24rem;
	}
`

const Title = styled.h1`
	margin: 0;
    font-family: Futura, "Helvetica Neue", sans-serif;
    font-size: 2rem;
    line-height: 1.5;
`

const Paragraph = styled.p`
	margin: 0;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 1rem;
    line-height: 1.5;
`

export default function Cart() {
	return (
		<Container
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			gap={4}
		>
			<img
				src='/img/trolley.svg'
				alt='Empty cart Icon'
			/>
			<Title>
				Your cart is empty!
			</Title>
			<Paragraph>
				To add items to your cart and continue shopping, check out our wide range of products that are now available to buy online
			</Paragraph>
			<ShopButton>
				Continue Shopping
			</ShopButton>
		</Container>
	)
}