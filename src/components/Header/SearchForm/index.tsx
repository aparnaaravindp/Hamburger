import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CartContext/CartContext';
import { ISubmitHandler } from '../../../providers/CartContext/@types';

const SearchForm = () => {
  const { setSearch } = useContext(CartContext);
  const { handleSubmit, register } = useForm<ISubmitHandler>();

  const submit: SubmitHandler<ISubmitHandler> = (data) => {
    setSearch(data.search);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(submit)}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        {...register('search')}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
