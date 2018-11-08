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
  rating?: number;
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
    price: 20.60
  },
  {
    code: "CANON",
    description: "Fotocamera Reflex, Nero, Lunghezza Focale 18-55 mm",
    image: "canon.jpeg",
    name: "Canon EOS 4000D",
    price: 400
  },
  {
    code: "IPHONEXR",
    description: "Apple Iphone Xr 6 colori 2018",
    image: "iphones xr.jpeg",
    name: "Iphone Xr",
    price: 889
  },
  {
    code: "PRUSA",
    description: "L'Original Prusa I3 MK3 è il successore dell'acclamata stampante 3D Original Prusa i3 MK2. Grazie all'estrusore riprogettato, una pletora di sensori e il nuovo piano riscaldato magnetico MK52 con superficie rimovibile in acciaio flessibile rivestito in PEI,  siamo convinti di aver progettato la nostra migliore stampante fino ad ora!",
    image: "prusa.jpg",
    name: "Prusa I3 MK3",
    price: 779
  },
  {
    code: "HPPRINT",
    description: "HP OfficeJet 3833 Stampante Multifunzione con 4 Mesi di Prova Gratuita del Servizio Instant Ink",
    image: "stampanre.jpg",
    name: "HP OfficeJet",
    price: 42
  },
  {
    code: "OCULUS",
    description: "Oculus Rift il visore per la realtà virtuale",
    image: "oculus.jpg",
    name: "Oculus Rift",
    price: 449
  }
] as IPaypolloProduct[];
