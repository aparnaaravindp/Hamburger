export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICartProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ISubmitHandler {
  search: string;
}

export interface ICartContext {
  cartModalOpen: boolean;
  setCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cartProductList: ICartProduct[];
  addProductToCart: (product: IProduct) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  totalValue: number;
  setCartProductList: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
  removeCartList: (currentCartProductList: ICartProduct) => void;

  searchProductList: IProduct[];
}

export interface IGetProductResponse {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
