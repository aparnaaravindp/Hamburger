import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CartContext/CartContext';
import { UserContext } from '../../providers/UserContext/UserContext';

const Header = () => {
  const { setCartModalOpen } = useContext(CartContext);
  const { userLogout } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button type='button' onClick={() => setCartModalOpen(true)}>
                <MdShoppingCart size={28} />
              </button>
              <button type='button'>
                <MdLogout size={28} onClick={() => userLogout()} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
