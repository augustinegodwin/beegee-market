type User = {
  _id: string;
  name: string;
  phoneNumber: string;
  address: string;
  level: string;
  school: string;
  profileImage: string;
  appartment: string;
  walletBalance: number;
  verified: boolean;
  walletDebt: number;
  suspended: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Product = {
  _id: string;
  user: string;
  title: string;
  description: string;
  category: string;
  image: productImage[];
  price: number;
  replacementPrice: any;
  rating: number;
  views: any[];
  availabilityStatus: boolean;
  forSale: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: any[];
  id: string;
};

type productImage = {
  url: string;
  width: number;
  height: number;
  aspectRatio: number;
  _id: string;
  id: string;
};

type Order = {
  _id: string;
  status: string;
  subtotal: number;
  rentHours: number;
  forSale: boolean;
  item: {
    title: string;
    category: string;
    price: number;
  };
  user: {
    name: string;
    phoneNumber: string;
  };
  renter: {
    name: string;
    phoneNumber: string;
  };
};
