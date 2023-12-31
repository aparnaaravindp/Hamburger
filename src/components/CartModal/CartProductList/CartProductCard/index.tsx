import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/CartContext/CartContext';

const CartProductCard = () => {
  const { cartProductList, removeCartList } = useContext(CartContext);

  return (
    <>
      {cartProductList.map((product) => (
        <StyledCartProductCard key={product.id}>
          <div className='imageBox'>
            <img src={product.img} alt='Hamburguer' />
          </div>
          <div className='contentBox'>
            <StyledTitle tag='h3' $fontSize='three'>
              {product.name}
            </StyledTitle>
            <button
              type='button'
              aria-label='Remover'
              onClick={() => removeCartList(product)}
            >
              <MdDelete size={24} />
            </button>
          </div>
        </StyledCartProductCard>
      ))}
    </>
  );
};

export default CartProductCard;
