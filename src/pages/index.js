import Head from 'next/head'
import Image from 'next/image'
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
	HeaderLink,
	HeaderTop,
} from '../components/Header'

import { LinkText } from '../components/Text'
import { Slide } from '../components/Slide'
import {
	Banner,
	BannerContent,
	BannerDesc,
	BannerProducts,
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
import { CategoryList } from '../components/CategoryList'

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
								<Image
									src='/img/menu.svg'
									alt='menu'
									width={16}
									height={16}
								/>
							</HeaderLink>
						</Link>
						<Link href='/' passHref={true}>
							<HeaderLink title='Search'>
								<Image
									src='/img/search.svg'
									alt='search'
									width={16}
									height={16}
								/>
							</HeaderLink>
						</Link>
					</HeaderContainerLeft>
					<HeaderContainerCentre>
						<Link href='/' passHref={true}>
							<a title='Home'>
								<Image
									src='/img/logo.svg'
									alt='Gunnings'
									width={139}
									height={25}
								/>
							</a>
						</Link>
					</HeaderContainerCentre>
					<HeaderContainerRight>
						<Link href='/' passHref={true}>
							<HeaderLink title='Project'>
								<Image
									src='https://media.prod.bunnings.com.au/api/public/content/5b42ad75d69f451ebfe36fc80c66ebb3?v=b01b10ae'
									alt='project'
									width={16}
									height={16}
								/>
							</HeaderLink>
						</Link>
						<Link href='/' passHref={true}>
							<HeaderLink title='Account'>
								<Image
									src='https://media.prod.bunnings.com.au/api/public/content/8207dca2dffb4169bef3a304820afad9?v=e72120af'
									alt='account'
									width={16}
									height={16}
								/>
							</HeaderLink>
						</Link>
						<Link href='/' passHref={true}>
							<HeaderLink title='Cart'>
								<Image
									src='https://media.prod.bunnings.com.au/api/public/content/7a70f27a22174a8f8498160090353845?v=9af2832a'
									alt='cart'
									width={16}
									height={16}
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
					autoplaySpeed={4000} // 4s
					dots={true}
					infinite={true}
					pauseOnDotsHover={true}
					pauseOnHover={true}
					speed={800} // 1s
					slidesToShow={1}
					slidesToScroll={1}
				>
					{banners.map((banner, index) => {
						return (
							<Slide key={index}>
								<Banner>
									<BannerContent>
										<BannerTitle>{banner.title}</BannerTitle>
										<BannerDesc>{banner.desc}</BannerDesc>
										<ShopButton>Shop now</ShopButton>
									</BannerContent>
									<BannerProducts>
										<ProductTile
											{...banner.product1}
										/>
										<ProductTile
											{...banner.product2}
										/>
									</BannerProducts>
								</Banner>
							</Slide>
						)
					})}
				</Slider>
				<Section>
					<SectionHeader>Featured categories this week</SectionHeader>
					<CategoryList>
						{categories.map((category, index) => {
							return (
								<CategoryTile
									key={index}
									{...category}
								/>
							)
						})}

					</CategoryList>
				</Section>
			</main>
		</div>
	)
}
