export type LayoutType = {
  children: React.ReactNode;
};

export interface IItemProps {
  children: string;
  setIsActive: (value: string) => void;
  isActive: string;
}

export interface IShop {
  _id: string;
  shop: string;
  title: string;
  description: string;
  photo: string;
  price: number;
  setCart?: any;
  setTotalPrice?: any;
}
