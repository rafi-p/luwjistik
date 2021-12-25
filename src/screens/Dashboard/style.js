import styled from 'styled-components';
import { Fonts, Images, Colors, Sizes } from '../../constant';

const Container = styled.div`
  margin: 20px;
  & > * {
      margin-bottom: 20px;

      &:last-child {
          margin-bottom: 0px;
      }
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    .btn-add {
      background: ${Colors.black.default};
      padding: 10px 20px;
      border-radius: 5px;
      transition: all .3s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
          opacity: .8;
      }
    }
  }
  .table-wrapper {
      max-height: calc(100vh - 220px);
      overflow-y: auto;
      overflow-x: auto;
      position: relative;

      background: ${Colors.white.default};
      padding: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      box-shadow: rgb(0 0 0 / 2%) 0px 2px 10px 0px;

      scrollbar-color: ${Colors.grey.lineGrey} ${Colors.white.default};
      scrollbar-width: thin;

      &::-webkit-scrollbar {
          height: 4px
      }
      &::-webkit-scrollbar-track {
          background-color: ${Colors.white.default};
          border-radius: 100px;
      }
      &::-webkit-scrollbar-thumb {
          border-radius: 100px;
          background: ${Colors.grey.lineGrey};
          box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      }
      table {
          table-layout: fixed;
          border-collapse: collapse;
          width: 120vw;
          @media screen and (max-width: 768px){
              table-layout: unset;
          }
          thead {
              position: sticky;
              top: 0;
              left: 0;
              width: 100%;
              background: $white;
          }

          .row-head {
              box-shadow: 0px 2px 10px 0px $shadow;
          }

          td, th {
              text-align: center;
              vertical-align: middle;
          }

          td {
              padding: 15px 10px;
              border-bottom: 1px solid $grayLight;
              font-size: 12px;
              vertical-align: middle;
              border-bottom: 1px solid ${Colors.grey.lineGrey};
          }

          th {
              padding: 15px 10px;
              font-weight: 600;

              white-space: nowrap;
              border-bottom: 1px solid ${Colors.grey.default};

              &.green-head {
                  color: $greenDefault
              }
          }
          th:after{
              content:'';
              position:absolute;
              left: 0;
              bottom: 0;
              width:100%;
              border-bottom: 2px solid $greenDefault;
          }
      }
  }
`;

const ModalInfo = styled.div`
    background: ${Colors.white.default};
    border-radius: 20px;
    width: 486px;
    height: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media ${Sizes.sm} {
      width: unset;
      padding: 20px;
      margin: 10px;
    }
    & > * {
        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0px;
        }
    }


    .xIcon {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }

    .all-text {
        display: grid;
        grid-template-columns: auto 1px auto;
        grid-gap: 10px 25px;
        height: calc(100vh - 300px);
        overflow-y: scroll;
        position: relative;

        scrollbar-color: ${Colors.grey.lineGrey} ${Colors.white.default};
        scrollbar-width: thin;

        &::-webkit-scrollbar {
            width: 4px
        }
        &::-webkit-scrollbar-track {
            background-color: ${Colors.white.default};
            border-radius: 100px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 100px;
            background: ${Colors.grey.lineGrey};
            box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
        }
        @media ${Sizes.sm} {
          grid-gap: 10px 20px;
          grid-template-columns: auto;
        }

        .left, .right {
          & > * {
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0px;
            }
        }

        .sticky-head {
          position: sticky;
          top: 0;
          background: ${Colors.white.default};
        }
      }
    }
    .btn-sub {
        background: ${Colors.black.default};
        padding: 10px 20px;
        border-radius: 5px;
        transition: all .3s;
        cursor: pointer;
        width: -webkit-fill-available;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            opacity: .8;
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

const Separator = styled.div`
  border: 1px solid ${Colors.grey.lightGrey};
`;


export {
  Container,
  ModalInfo,
  Separator
};