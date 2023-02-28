import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

import { CartContext } from '../../../providers/CartContext/CartContext';

const CartProductList = () => {
  const { setCartProductList, totalValue } = useContext(CartContext);
  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {totalValue.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => setCartProductList([])}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
