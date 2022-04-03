export default function handler(req, res) {
	res.json([
		{
			title: 'Lowest prices means completing your toolset for less',
			desc: 'Great value on our range of XU1 power tools',
			product1: {
				itemNum: '0011398',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/700d5084dd4a43db8ff02ca3b3058ddf?v:da4427f2&amp;t:w150dpr1',
				name: 'XU1 500W 13mm Hammer Drill',
				price: 29,
			},
			product2: {
				itemNum: '6290582',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/245b4172b9d24eb190f70f15bf888b79?v=fd2beb2e&t=w150dpr1',
				name: 'XU1 3.6V Li-Ion Cordless Screwdriver',
				price: 19.98,
			},
		},
		{
			title: 'Lowest prices to do up your home',
			desc: 'Get your garden and garage in order with these great value products',
			product1: {
				itemNum: '0038833',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/5e0632b26d474bbb9aa08fd44bdd1b80?v=76c676ff&t=w150dpr1',
				name: 'Ryobi ONE+ 18V 2.0Ah Hedge Trimmer Kit',
				price: 199,
			},
			product2: {
				itemNum: '0177584',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/ededeaadd5b74ff2be54a54029263968?v=7ae6dafe&t=w150dpr1',
				name: 'Montgomery 592 x 280 x 882mm 5 Shelf Basics Storage Unit',
				price: 38,
			},
		},
		{
			title: 'Keep your home fire-safe for less',
			desc: 'Outstanding value on Fire Pro 9V smoke alarms',
			product1: {
				itemNum: '0083609',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/0d924de984674b7fb62ed1d948f3252d?v=21cb134b&t=w150dpr1',
				name: 'Fire Pro 9V Photoelectric Smoke Alarm - 2 Pack',
				price: 22,
			},
			product2: {
				itemNum: '0171735',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/c95b724c83404d5cb0a5bbe8d5be7f15?v=3a7d097a&t=w150dpr1',
				name: 'Fire Pro Extinguisher And Blanket Fire Safety Kit',
				price: 38,
			},
		},
		{
			title: 'You can create the perfect bathroom with our lowest prices',
			desc: "We've got the products and inspiration to create your dream bathroom",
			product1: {
				itemNum: '0225479',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/6334432b4e9240a5957c461355633fb2?v=da62f69e&t=w150dpr1',
				name: 'Living Elements 500 x 750 x 26mm Black Framed Oblong Mirror',
				price: 99,
			},
			product2: {
				itemNum: '0093387',
				imgSrc: 'https://media.prod.bunnings.com.au/api/public/content/51cd40bd6fd443449afd257e39d12e54?v=4a91ccae&t=w150dpr1',
				name: 'British Paints Low Sheen White Clean And Protect Kitchen And Bathroom Interior Paint - 4L',
				price: 79.9,
			},
		},
	])
}