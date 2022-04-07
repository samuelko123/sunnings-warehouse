import styled from 'styled-components'
import { FlexBox } from '../components/Flexbox'
import { ShopButton } from '../components/Button'
import { selectAllCartItems } from '../redux/slices/cartSlice'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import {
	Section,
	SectionHeader,
} from '../components/Section'

const EmptyCartContainer = styled(FlexBox)`
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
	const items = useSelector(state => selectAllCartItems(state))

	return (
		<>
			{
				items.length === 0 &&
				<EmptyCartContainer
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
					<Link passHref={true} href='/'>
						<ShopButton>
							Continue Shopping
						</ShopButton>
					</Link>
				</EmptyCartContainer>
			}
			{
				items.length > 0 &&
				<div>
					<Section>
						<SectionHeader>
							1. Review Cart
						</SectionHeader>
						<p>WIP</p>
					</Section>
					<Section>
						<SectionHeader>
							2. Contact details
						</SectionHeader>
						<p>WIP</p>
					</Section>
					<Section>
						<SectionHeader>
							3. Payment
						</SectionHeader>
						<p>WIP</p>
					</Section>
				</div>
			}
		</>
	)
}