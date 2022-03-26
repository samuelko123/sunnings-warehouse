export default function handler(req, res) {
	res.json([
		{
			title: 'Lowest prices means completing your toolset for less',
			desc: 'Great value on our range of XU1 power tools',
			product1: {
				picLink1: 'https://media.prod.bunnings.com.au/api/public/content/700d5084dd4a43db8ff02ca3b3058ddf?v:da4427f2&amp;t:w150dpr1 1x, https://media.prod.bunnings.com.au/api/public/content/700d5084dd4a43db8ff02ca3b3058ddf?v:da4427f2&amp;t:w150dpr2 2x',
				picLink2: 'https://media.prod.bunnings.com.au/api/public/content/700d5084dd4a43db8ff02ca3b3058ddf?v:da4427f2&amp;t:w150dpr1',
				name: 'XU1 500W 13mm Hammer Drill',
				price: 29,
			},
			product2: {
				picLink1: 'https://media.prod.bunnings.com.au/api/public/content/245b4172b9d24eb190f70f15bf888b79?v=fd2beb2e&t=w150dpr1 1x, https://media.prod.bunnings.com.au/api/public/content/245b4172b9d24eb190f70f15bf888b79?v=fd2beb2e&t=w150dpr2 2x',
				picLink2: 'https://media.prod.bunnings.com.au/api/public/content/245b4172b9d24eb190f70f15bf888b79?v=fd2beb2e&t=w150dpr1',
				name: 'XU1 3.6V Li-Ion Cordless Screwdriver',
				price: 19.98,
			},
		},
		{
			title: 'Lowest prices to do up your home',
			desc: 'Get your garden and garage in order with these great value products',
			product1: {
				picLink1: 'https://media.prod.bunnings.com.au/api/public/content/5e0632b26d474bbb9aa08fd44bdd1b80?v=76c676ff&t=w150dpr1 1x, https://media.prod.bunnings.com.au/api/public/content/5e0632b26d474bbb9aa08fd44bdd1b80?v=76c676ff&t=w150dpr2 2x',
				picLink2: 'https://media.prod.bunnings.com.au/api/public/content/5e0632b26d474bbb9aa08fd44bdd1b80?v=76c676ff&t=w150dpr1',
				name: 'Ryobi ONE+ 18V 2.0Ah Hedge Trimmer Kit',
				price: 199,
			},
			product2: {
				picLink1: 'https://media.prod.bunnings.com.au/api/public/content/ededeaadd5b74ff2be54a54029263968?v=7ae6dafe&t=w150dpr1 1x, https://media.prod.bunnings.com.au/api/public/content/ededeaadd5b74ff2be54a54029263968?v=7ae6dafe&t=w150dpr2 2x',
				picLink2: 'https://media.prod.bunnings.com.au/api/public/content/ededeaadd5b74ff2be54a54029263968?v=7ae6dafe&t=w150dpr1',
				name: 'Montgomery 592 x 280 x 882mm 5 Shelf Basics Storage Unit',
				price: 38,
			},
		},
	])
}