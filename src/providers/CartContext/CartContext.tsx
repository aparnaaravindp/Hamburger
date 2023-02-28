/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  ICartContext,
  ICartProduct,
  IGetProductResponse,
  IProduct,
} from './@types';
import { api } from '../../services/api';
import { IDefaultProviderProps } from '../UserContext/@types';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [search, setSearch] = useState('');

  const [cartProductList, setCartProductList] = useState<ICartProduct[]>([]);

  const getProduct = async () => {
    const token = localStorage.getItem('@TOKEN');
    try {
      const response = await api.get<IGetProductResponse[]>(`/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const searchProductList = productList.filter((product) =>
    search === ''
      ? true
      : product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addProductToCart = (product: IProduct) => {
    const cartProductFind = cartProductList.find(
      (cartItem) => product.id === cartItem.id
    );
    if (!cartProductFind) {
      setCartProductList([...cartProductList, product]);
      toast.success('Produto adicionado com sucesso', { autoClose: 2000 });
    } else {
      toast.error('Produto já adicionado ao carrinho');
    }
  };

  const totalValue = cartProductList.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price),
    0
  );

  const removeCartList = (currentCartProductList: ICartProduct) => {
    const newLists = cartProductList.filter(
      (product) => product.id !== currentCartProductList.id
    );
    toast.success('Produto removido com sucesso', { autoClose: 2000 });
    setCartProductList(newLists);
  };

  return (
    <CartContext.Provider
      value={{
        cartModalOpen,
        setCartModalOpen,
        productList,
        setProductList,
        addProductToCart,
        searchProductList,
        cartProductList,
        setCartProductList,
        search,
        setSearch,
        totalValue,
        removeCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
