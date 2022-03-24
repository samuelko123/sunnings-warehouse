import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {
	HeaderBottom,
	HeaderContainerCentre,
	HeaderContainerLeft,
	HeaderContainerRight,
	HeaderLink,
	HeaderTop,
} from '../components/Header'

import { LinkText } from '../components/Text'

export default function Home() {
	return (
		<div id='root'>
			<Head>
				<title>Gunnings Australia</title>
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
		</div>
	)
}
