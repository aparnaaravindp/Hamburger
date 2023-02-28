import { StyledLoadingDiv } from './loadingStyle';
import loadingImg from '../../assets/loadingImg.svg';

export const Loading = () => (
  <StyledLoadingDiv>
    <img src={loadingImg} alt='loadingImg' />
  </StyledLoadingDiv>
);
