export function getImagePath(product: { image?: string }) {
  return product.image
    ? `${process.env.PUBLIC_URL}/images/products/${product.image}`
    : undefined;
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
    description: "MacBook pro di Zio. Usato 128Gb Space Gray 2016",
    image: "SP747_mbp13-gray.jpg",
    name: "MacBook Pro di Zio",
    price: 1500
  },
  {
    code: "MACBOOK2",
    description: "MacBook pro 256Gb ram 8Gb Space Gray 2016",
    image: "SP747_mbp13-gray.jpg",
    name: "MacBook Pro 2016 Space Gray",
    price: 2000
  },
  {
    code: "AIRPODS",
    description: "Apple AirPods ",
    image: "MMEF2.jpeg",
    name: "Apple AirPods",
    price: 179
  },
  {
    code: "HOMEPOD",
    description: "Apple HomePod",
    image: "homepod.jpeg",
    name: "Apple HomePod",
    price: 349
  },
  {
    code: "HOVERBOARD",
    description: "Un hoverboard fantastico!",
    image: "hoverboard-with-lights-blue.jpg",
    name: "Hoverboard",
    price: 159
  },
  {
    code: "MAVICAIR",
    description: "Il Mavic Air e un drone da racing con videocamera in 4K Fool HD",
    image: "mavic air.jpg",
    name: "Mavic Air",
    price: 749
  },
  {
    code: "GALAXYS9",
    description: "Samsung Galaxy S9 Blue",
    image: "galaxy s9.jpeg",
    name: "Galaxy S9",
    price: 499
  },
  {
    code: "EVO850",
    description: "SSD Samsung Evo 850 da 250gb",
    image: "samsungevo.jpeg",
    name: "SSD Samsung",
    price: 140
  },
  {
    code: "KINGUSB",
    description: "Kingston DataTraveler SE9 G2 chiavetta 64GB USB 3.0",
    image: "Kingston.jpg",
    name: "Kingston chiavetta USB",
    price: 20
  }
] as IPaypolloProduct[];
