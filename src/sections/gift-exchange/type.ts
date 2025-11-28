export type Gift = {
  name: string;
  img: string;
  price: number;
  quantity?: number;
};
export type GiftCategory = {
  name: string;
  gift: Gift[];
};
