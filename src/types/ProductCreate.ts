export default interface ProductCreating {
    category: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: {
      public_id: string;
      url: string;
    };
  }