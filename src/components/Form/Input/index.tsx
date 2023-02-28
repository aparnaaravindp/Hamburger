import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  label: string;
  type: 'text' | 'email' | 'password' | 'passwordConfirmation';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, register, error }: IInputProps) => (
  <fieldset>
    <StyledTextField label={label} {...register} type='text' />
    {error ? (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    ) : null}
  </fieldset>
);

export default Input;
