export function getImagePath(product: { image?: string }) {
  return product.image ? `${process.env.PUBLIC_URL}/images/products/${
    product.image
    }` : undefined
}

export interface IPaypolloProduct {
  code: string;
  description?: string;
  name: string;
  price: number;
  image?: string;
}

export default [
  {
    code: "MACBOOK",
    description: "MacBooc pro di Zio. Usato 128Gb Space Gray 2016",
    image: 'SP747_mbp13-gray.jpg',
    name: "MacBook Pro di Zio",
    price: 1500
  },
  {
    code: "MACBOOK2",
    description: "MacBooc pro 256Gb ram 8Gb Space Gray 2016",
    image: 'SP747_mbp13-gray.jpg',
    name: "MacBook Pro 2016 Space Gray",
    price: 2000
  },
  {
    code: "AIRPODS",
    description: "Apple AirPods ",
    image: 'MMEF2.jpeg',
    name: "Apple AirPods",
    price: 179
  },
  {
    code: "HOMEPOD",
    description: "Apple HomePod",
    image: 'homepod.jpeg',
    name: "Apple HomePod",
    price: 349
  },
  {
    code: "HOVERBOARD",
    description: "A fantastic hoverboard",
    image: "hoverboard-with-lights-blue.jpg",
    name: "Hoverboard",
    price: 159
  }
] as IPaypolloProduct[];
