export default interface Product {
  _id: string;
  category: {
    name: string
  };
  title: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  image: {
    public_id: string;
    url: string;
  };
  updatedAt: string;
  checked: false;
  createdAt: string
}