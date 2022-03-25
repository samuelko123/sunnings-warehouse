import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Slider from 'react-slick'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

import {
	HeaderBottom,
	HeaderContainerCentre,
	HeaderContainerLeft,
	HeaderContainerRight,
	HeaderLink,
	HeaderTop,
} from '../components/Header'

import { LinkText } from '../components/Text'
import {
	SlideContainer,
	SlideContentLeft,
	SlideContentRight,
} from '../components/Slide'

export default function Home() {
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
									src='/menu.svg'
									alt='menu'
									width={16}
									height={16}
								/>
							</HeaderLink>
						</Link>
						<Link href='/' passHref={true}>
							<HeaderLink title='Search'>
								<Image
									src='/search.svg'
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
									src='/logo.svg'
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
					autoplaySpeed={5000} // 5s
					dots={true}
					infinite={true}
					pauseOnDotsHover={true}
					pauseOnHover={true}
					speed={800} // 1s
					slidesToShow={1}
					slidesToScroll={1}
				>
					<SlideContainer>
						<SlideContentLeft>
							<Image
								alt='Flybuys logo'
								src='https://media.prod.bunnings.com.au/api/public/content/6baf878a4cd24e54b3edef44a5760363?v=55744704'
								width={48 / 1007 * 2888}
								height={48}
								layout='fixed'
							/>
							<h2>Collect even more points online and on Special Order purchases</h2>
						</SlideContentLeft>
						<SlideContentRight>
							<figure>
								<picture>
									<source
										media='(min-width: 1024px)'
										srcSet='https://media.prod.bunnings.com.au/api/public/content/a901d4787caf4ec99286589222cb9776?v=2d3e0f4c&amp;t=w704h408SmartCropdpr1 1x, https://media.prod.bunnings.com.au/api/public/content/a901d4787caf4ec99286589222cb9776?v=2d3e0f4c&amp;t=w704h408SmartCropdpr2 2x'
									/>
									<source
										media='(min-width: 768px)'
										srcSet='https://media.prod.bunnings.com.au/api/public/content/a901d4787caf4ec99286589222cb9776?v=2d3e0f4c&amp;t=w800dpr1 1x, https://media.prod.bunnings.com.au/api/public/content/a901d4787caf4ec99286589222cb9776?v=2d3e0f4c&amp;t=w800dpr2 2x'
									/>
									<source
										media='(min-width: 0px)'
										srcSet='https://media.prod.bunnings.com.au/api/public/content/a901d4787caf4ec99286589222cb9776?v=2d3e0f4c&amp;t=w300dpr1 1x, https://media.prod.bunnings.com.au/api/public/content/a901d4787caf4ec99286589222cb9776?v=2d3e0f4c&amp;t=w300dpr2 2x'
									/>
									<Image
										alt='person using flybuys card to shop online on the Bunnings website'
										src='https://media.prod.bunnings.com.au/api/public/content/a901d4787caf4ec99286589222cb9776?v=2d3e0f4c&amp;t=w704h408SmartCropdpr1'
										width={704}
										height={408}
									/>
								</picture>
							</figure>
						</SlideContentRight>
					</SlideContainer>
				</Slider>
			</main>
		</div>
	)
}
