export default interface LastProductsType {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: {
    url: string;
  };
  quantity: number;
}
