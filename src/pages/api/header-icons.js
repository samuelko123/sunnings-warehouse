export default function handler(req, res) {
	res.json({
		left: [
			{
				href: '/',
				tooltip: 'Menu',
				img: {
					src: '/img/menu.svg',
					alt: 'menu',
				},
			},
			{
				href: '/',
				tooltip: 'Search',
				img: {
					src: '/img/search.svg',
					alt: 'search',
				},
			},
		],
		center: [
			{
				href: '/',
				tooltip: 'Home',
				img: {
					src: '/img/logo.svg',
					alt: 'Sunnings',
				},
			},
		],
		right: [
			{
				href: '/',
				tooltip: 'Project',
				img: {
					src: 'https://media.prod.bunnings.com.au/api/public/content/5b42ad75d69f451ebfe36fc80c66ebb3?v=b01b10ae',
					alt: 'project',
				},
			},
			{
				href: '/',
				tooltip: 'Account',
				img: {
					src: 'https://media.prod.bunnings.com.au/api/public/content/8207dca2dffb4169bef3a304820afad9?v=e72120af',
					alt: 'account',
				},
			},
			{
				href: '/',
				tooltip: 'Cart',
				img: {
					src: 'https://media.prod.bunnings.com.au/api/public/content/7a70f27a22174a8f8498160090353845?v=9af2832a',
					alt: 'cart',
				},
			},
		],
	})
}