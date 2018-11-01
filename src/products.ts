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
  }
] as IPaypolloProduct[];
