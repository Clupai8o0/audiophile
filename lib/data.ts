export const categories = [
	{
		name: "Headphones",
		url: "/category/headphones",
		src: "/shared/desktop/image-category-thumbnail-headphones.png",
	},
	{
		name: "Speakers",
		url: "/category/speakers",
		src: "/shared/desktop/image-category-thumbnail-speakers.png",
	},
	{
		name: "Earphones",
		url: "/category/earphones",
		src: "/shared/desktop/image-category-thumbnail-earphones.png",
	},
];

import _products from "../data.json";

interface ImageSizes {
	mobile: string;
	tablet: string;
	desktop: string;
}
export interface Product {
	slug: string;
	newProduct: boolean;
	name: string;
	desc: string;
	price: number;
	image: ImageSizes;
	features: string;
	includes: {
		quantity: number;
		item: string;
	}[];
	gallery: {
		first: ImageSizes;
		second: ImageSizes;
		third: ImageSizes;
	};
	otherProducts: {
		image: ImageSizes;
		name: string;
		slug: string;
	}[]
}

export const products: Product[] = _products.map((product) => {
	return {
		slug: product.slug,
		newProduct: product.new,
		name: product.name,
		desc: product.description,
		price: product.price,
		image: product.image,
		features: product.features,
		includes: product.includes,
		gallery: product.gallery,
		otherProducts: product.others,
	}
})