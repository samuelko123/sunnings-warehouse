import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import Slider from 'react-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import {
	HeaderBottom,
	HeaderContainerCentre,
	HeaderContainerLeft,
	HeaderContainerRight,
	HeaderIcon,
	HeaderLink,
	HeaderTop,
} from '../components/Header'

import { LinkText } from '../components/Text'
import { Slide } from '../components/Slide'
import {
	BannerDesc,
	BannerTitle,
} from '../components/Banner'
import { ProductTile } from '../components/ProductTile'
import { ShopButton } from '../components/Button'
import { useAjaxData } from '../hooks/useAjaxData'
import {
	Section,
	SectionHeader,
} from '../components/Section'
import { CategoryTile } from '../components/CategoryTile'
import {
	Box,
	Grid,
} from '@mui/material'

export default function Home() {
	const banners = useAjaxData('/api/banners')[1]
	const categories = useAjaxData('/api/categories/featured')[1]

	return (
		<div id='root'>
			<Head>
				<title>Sunnings Australia</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<HeaderTop>
					<HeaderContainerLeft>
						<Link href='/' passHref={true}>
							<HeaderLink title='Menu'>
								<HeaderIcon
									src='/img/menu.svg'
									alt='menu'
								/>
							</HeaderLink>
						</Link>
						<Link href='/' passHref={true}>
							<HeaderLink title='Search'>
								<HeaderIcon
									src='/img/search.svg'
									alt='search'
								/>
							</HeaderLink>
						</Link>
					</HeaderContainerLeft>
					<HeaderContainerCentre>
						<Link href='/' passHref={true}>
							<a title='Home'>
								<img
									src='/img/logo.svg'
									alt='Gunnings'
								/>
							</a>
						</Link>
					</HeaderContainerCentre>
					<HeaderContainerRight>
						<Link href='/' passHref={true}>
							<HeaderLink title='Project'>
								<HeaderIcon
									src='https://media.prod.bunnings.com.au/api/public/content/5b42ad75d69f451ebfe36fc80c66ebb3?v=b01b10ae'
									alt='project'
								/>
							</HeaderLink>
						</Link>
						<Link href='/' passHref={true}>
							<HeaderLink title='Account'>
								<HeaderIcon
									src='https://media.prod.bunnings.com.au/api/public/content/8207dca2dffb4169bef3a304820afad9?v=e72120af'
									alt='account'
								/>
							</HeaderLink>
						</Link>
						<Link href='/' passHref={true}>
							<HeaderLink title='Cart'>
								<HeaderIcon
									src='https://media.prod.bunnings.com.au/api/public/content/7a70f27a22174a8f8498160090353845?v=9af2832a'
									alt='cart'
								/>
							</HeaderLink>
						</Link>
					</HeaderContainerRight>
				</HeaderTop>
				<HeaderBottom>
					<Link href='/' passHref={true}>
						<LinkText size={12} bold={true}>
							Our Price Guarantee
						</LinkText>
					</Link>
				</HeaderBottom>
			</header>
			<main>
				<Slider
					arrows={false}
					autoplay={true}
					autoplaySpeed={5000} // 5s
					dots={true}
					infinite={true}
					pauseOnDotsHover={true}
					pauseOnHover={true}
					speed={500} // 0.5s
					slidesToShow={1}
					slidesToScroll={1}
				>
					{banners.map((banner, index) => {
						return (
							<Slide key={index}>
								<Grid
									container
									spacing={2}
									p={2}
								>
									<Grid
										item xs={12} lg={6}
										container
										direction='column'
										justifyContent='center'
										alignItems='flex-start'
									>
										<Box>
											<BannerTitle>{banner.title}</BannerTitle>
											<BannerDesc>{banner.desc}</BannerDesc>
											<ShopButton>Shop now</ShopButton>
										</Box>
									</Grid>
									<Grid
										item xs={12} lg={6}
										container
										spacing={2}
									>
										<Grid item xs={12} sm={6}>
											<ProductTile
												{...banner.product1}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<ProductTile
												{...banner.product2}
											/>
										</Grid>
									</Grid>
								</Grid>
							</Slide>
						)
					})}
				</Slider>
				<Section>
					<SectionHeader>Featured categories this week</SectionHeader>
					<Grid container spacing={2}>
						{categories.map((category, index) => {
							return (
								<Grid item xs={6} lg={3} key={index}>
									<CategoryTile {...category} />
								</Grid>
							)
						})}
					</Grid>
				</Section>
			</main>
		</div>
	)
}
