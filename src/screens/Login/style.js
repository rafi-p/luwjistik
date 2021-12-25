import styled from 'styled-components';
import { Fonts, Images, Colors, Sizes } from '../../constant';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media ${Sizes.sm} {
      justify-content: flex-start;
      margin-top: 150px;
    }

    .container-input {
      width: 300px;

      @media ${Sizes.sm} {
        width: calc(100vw - 40px);
      }
      & > * {
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0px;
            margin-top: 20px;
        }
      }
    }

    .btn-login {
      background: ${Colors.grey.darkGrey};
      /* width: 100%; */
      padding: 10px 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        background: ${Colors.black.default};
      }
      &.disabled {
        opacity: .5 !important;
        cursor: not-allowed !important;
        pointer-events: none

        /* &:hover {
            opacity: .5;
        } */

      }
    }
`;

export {
  Container,
};