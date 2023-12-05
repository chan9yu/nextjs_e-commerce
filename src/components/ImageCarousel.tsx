'use client';

import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { useState } from 'react';

const images = [
	{
		original: 'https://picsum.photos/id/1018/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1013/1000/600/',
		thumbnail: 'https://picsum.photos/id/1013/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1012/1000/600/',
		thumbnail: 'https://picsum.photos/id/1012/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1011/1000/600/',
		thumbnail: 'https://picsum.photos/id/1011/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1016/1000/600/',
		thumbnail: 'https://picsum.photos/id/1016/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/'
	}
];

export default function ImageCarousel() {
	const [index, setIndex] = useState(0);

	return (
		<div>
			<Carousel animation="fade" withoutControls wrapAround speed={10} slideIndex={index}>
				{images.map((image, index) => (
					<Image key={index} src={image.original} alt="image" width={1000} height={600} />
				))}
			</Carousel>
			<div style={{ display: 'flex' }}>
				{images.map((image, idx) => (
					<div key={idx} onClick={() => setIndex(idx)}>
						<Image src={image.thumbnail} alt="image" width={100} height={60} />
					</div>
				))}
			</div>
		</div>
	);
}
