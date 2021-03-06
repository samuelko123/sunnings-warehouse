import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { FlexBox } from '../components/Flexbox'
import { useAjaxData } from '../hooks/useAjaxData'
import { selectCartItemQtyTotal } from '../redux/slices/cartSlice'
import { Badge } from './Badge'

const HeaderTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onPrimary};
`

const HeaderLink = styled.a`
    @media (min-width: 48rem) {
        padding: 1rem 1rem;
    }

	padding: 1rem 0.5rem;

    :hover {
        background-color: ${props => props.theme.color.hoverPrimary};
    }
`

const HeaderIcon = styled.img`
    @media (min-width: 48rem) {
		width: 1.5rem;
    	height: 1.5rem;
    }

	width: 1rem;
    height: 1rem;
`

const CartIconContainer = styled.div`
	position: relative;
	display: flex;
`

const HeaderBottom = styled(FlexBox)`
    background-color: ${props => props.theme.color.surface};
    color: ${props => props.theme.color.onSurface};
    font-size: 0.75rem;
    font-weight: bold;
`

export const Layout = (props) => {
	const { children } = props

	const headerIcons = useAjaxData('/api/header-icons')[1]
	const cartItemCount = useSelector(state => selectCartItemQtyTotal(state))

	return (
		<>
			<Head>
				<title>Sunnings Australia</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header>

				<HeaderTop>
					<FlexBox
						justifyContent='flex-start'
						alignItems='center'
					>
						{headerIcons && headerIcons.left.map((icon, index) => {
							return (
								<Link key={index} href={icon.href} passHref={true}>
									<HeaderLink title={icon.tooltip}>
										<HeaderIcon {...icon.img} />
									</HeaderLink>
								</Link>
							)
						})}
					</FlexBox>
					<FlexBox
						justifyContent='center'
						alignItems='center'
					>
						{headerIcons && headerIcons.center.map((icon, index) => {
							return (
								<Link key={index} href={icon.href} passHref={true}>
									<a title={icon.tooltip}>
										<img {...icon.img} />
									</a>
								</Link>
							)
						})}
					</FlexBox>
					<FlexBox
						justifyContent='flex-end'
						alignItems='center'
					>
						{headerIcons && headerIcons.right.map((icon, index) => {
							return (
								<Link key={index} href={icon.href} passHref={true}>
									<HeaderLink title={icon.tooltip}>
										<HeaderIcon {...icon.img} />
									</HeaderLink>
								</Link>
							)
						})}
						<CartIconContainer>
							<Link
								href='/cart'
								passHref={true}
							>
								<HeaderLink title='Cart'>
									<HeaderIcon
										src='https://media.prod.bunnings.com.au/api/public/content/7a70f27a22174a8f8498160090353845?v=9af2832a'
										alt='cart'
									/>
									{cartItemCount > 0 &&
										<Badge>{cartItemCount}</Badge>
									}
								</HeaderLink>
							</Link>
						</CartIconContainer>
					</FlexBox>
				</HeaderTop>
				<HeaderBottom
					justifyContent='center'
					alignItems='center'
					p={1}
				>
					<Link href='/' passHref={true}>
						<a>Our Price Guarantee</a>
					</Link>
				</HeaderBottom>
			</header>
			<main>
				{children}
			</main>
		</>
	)
}
