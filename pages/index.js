import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components'

export default function Home() {
	return (
		<div id='root'>
			<Head>
				<title>Gunnings Australia</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header>
				<Link href='/' passHref={true}>
					<a title='Home'>
						<Image src="/logo.svg" alt="Gunnings" width={139} height={25} />
					</a>
				</Link>
			</Header>
		</div>
	)
}
