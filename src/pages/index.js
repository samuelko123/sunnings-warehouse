import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import Slider from 'react-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import {
	HeaderIcon,
	HeaderLink,
	HeaderTop,
} from '../components/Header'

import { LinkText } from '../components/Text'
import { Slide } from '../components/Slide'
import {
	BannerContainer,
	BannerContent,
	BannerDesc,
	BannerProduct,
	BannerTitle,
} from '../components/Banner'
import { ProductCard } from '../components/ProductCard'
import { ShopButton } from '../components/Button'
import { useAjaxData } from '../hooks/useAjaxData'
import {
	Section,
	SectionHeader,
} from '../components/Section'
import { ArticleCard } from '../components/ArticleCard'
import { FlexBox } from '../components/Flexbox'
import { ArticleCardContainer } from '../components/ArticleCardContainer'

export default function Home() {
	const headerIcons = useAjaxData('/api/header-icons')[1]
	const banners = useAjaxData('/api/banners')[1]
	const categories = useAjaxData('/api/categories/featured')[1]
	const recommendations = useAjaxData('/api/recommendations')[1]

	return (
		<div id='root'>
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
					</FlexBox>
				</HeaderTop>
				<FlexBox
					justifyContent='center'
					alignItems='center'
					p={1}
				>
					<Link href='/' passHref={true}>
						<LinkText size={12} bold={true}>
							Our Price Guarantee
						</LinkText>
					</Link>
				</FlexBox>
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
					{banners && banners.map((banner, index) => {
						return (
							<Slide key={index}>
								<BannerContainer>
									<BannerProduct>
										<ProductCard
											{...banner.product1}
										/>
										<ProductCard
											{...banner.product2}
										/>
									</BannerProduct>
									<BannerContent
										item xs={12} md={6}
										container
										direction='column'
										justifyContent='center'
										alignItems='flex-start'
									>
										<BannerTitle>{banner.title}</BannerTitle>
										<BannerDesc>{banner.desc}</BannerDesc>
										<ShopButton>Shop now</ShopButton>
									</BannerContent>
								</BannerContainer>
							</Slide>
						)
					})}
				</Slider>
				<Section>
					<SectionHeader>Featured categories this week</SectionHeader>
					<ArticleCardContainer gap={2}>
						{categories && categories.map((category, index) => {
							return (
								<FlexBox key={index}>
									<ArticleCard {...category} />
								</FlexBox>
							)
						})}
					</ArticleCardContainer>
				</Section>
				<Section>
					<SectionHeader>Recommended for you</SectionHeader>
					<ArticleCardContainer gap={2}>
						{recommendations && recommendations.map((recommendation, index) => {
							return (
								<FlexBox key={index}>
									<ArticleCard {...recommendation} />
								</FlexBox>
							)
						})}
					</ArticleCardContainer>
				</Section>
			</main>
		</div >
	)
}
