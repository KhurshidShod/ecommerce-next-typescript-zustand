export default interface LastProductsType {
  _id: string;
  title: string;
  price: string;
  description: string;
  image: {
    url: string;
  };
  quantity: number;
  sold: number;
}
