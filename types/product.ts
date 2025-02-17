export type ProductType = {
  attributes: any;
  id: number;
  ProductName: string;
  slug: string;
  Color: string;
  Size: string | null;
  Description: string;
  actives: boolean;
  isFeatured: boolean;
  Price: number;
  images: {
    id: number;
    url: string;
  }[];
  category: {
    id: number;
    CategoryName: string;
    slug: string;
  };
};
