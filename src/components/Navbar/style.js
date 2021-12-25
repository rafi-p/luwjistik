import styled from 'styled-components';
import { Fonts, FontStyles, Images, Colors, Sizes } from '../../constant';

const Container = styled.div`
  background: ${Colors.white.default};
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 2%) 0px 2px 10px 0px;

  .logo {
    height: 40px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
    img {
      height: 100%;
      width: auto;
    }
  }

  .btn-logout {
    border: 1px solid ${Colors.white.default};
    border-radius: 5px;
    padding: 5px 10px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      border: 1px solid ${Colors.blue.bright};
      p {
        color: ${Colors.blue.bright}
      }
    }
  }
`;

export {
  Container,
};