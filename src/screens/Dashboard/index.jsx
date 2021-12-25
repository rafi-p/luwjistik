import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  CustomModal,
  CustomInput
} from '../../components/index';
import {
  Container,
  ModalInfo,
  Separator
} from './style.js';
import {
  Images,
  Colors,
  FontStyles,
} from '../../constant/index';
import { LocalStorage, validation } from '../../helpers/index';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import * as orderActions from '../../store/order/actions';

const Dashboard = props => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  // start modal
  const [consigneeName, setConsigneeName] = useState('');
  const [errConsigneeName, setErrConsigneeName] = useState('');
  const [consigneeNumber, setConsigneeNumber] = useState('');
  const [errConsigneeNumber, setErrConsigneeNumber] = useState('');
  const [consigneeAddress, setConsigneeAddress] = useState('');
  const [errConsigneeAddress, setErrConsigneeAddress] = useState('');
  const [consigneePostal, setConsigneePostal] = useState('');
  const [errConsigneePostal, setErrConsigneePostal] = useState('');
  const [consigneeCountry, setConsigneeCountry] = useState('');
  const [errConsigneeCountry, setErrConsigneeCountry] = useState('');
  const [consigneeCity, setConsigneeCity] = useState('');
  const [errConsigneeCity, setErrConsigneeCity] = useState('');
  const [consigneeState, setConsigneeState] = useState('');
  const [errConsigneeState, setErrConsigneeState] = useState('');
  const [consigneeProvince, setConsigneeProvince] = useState('');
  const [errConsigneeProvince, setErrConsigneeProvince] = useState('');


  const [pickUpName, setPickUpName] = useState('');
  const [errPickUpName, setErrPickUpName] = useState('');
  const [pickUpNumber, setPickUpNumber] = useState('');
  const [errPickUpNumber, setErrPickUpNumber] = useState('');
  const [pickUpAddress, setPickUpAddress] = useState('');
  const [errPickUpAddress, setErrPickUpAddress] = useState('');
  const [pickUpPostal, setPickUpPostal] = useState('');
  const [errPickUpPostal, setErrPickUpPostal] = useState('');
  const [pickUpCountry, setPickUpCountry] = useState('');
  const [errPickUpCountry, setErrPickUpCountry] = useState('');
  const [pickUpCity, setPickUpCity] = useState('');
  const [errPickUpCity, setErrPickUpCity] = useState('');
  const [pickUpState, setPickUpState] = useState('');
  const [errPickUpState, setErrPickUpState] = useState('');
  const [pickUpProvince, setPickUpProvince] = useState('');
  const [errPickUpProvince, setErrPickUpProvince] = useState('');
  // end modal
  const dataOrders = useSelector(state => state.order.data);
  const getOrders = dispatch(orderActions.getOrders);
  const addOrder = dispatch(orderActions.addOrder);

  useEffect(() => {
    getOrders();
  }, []);

  const disabled = () => {
    let temp = false;
    if (
    consigneeName &&
    consigneeNumber &&
    consigneeAddress &&
    consigneePostal &&
    consigneeCountry &&
    consigneeCity &&
    consigneeState &&
    consigneeProvince &&
    pickUpName &&
    pickUpNumber &&
    pickUpAddress &&
    pickUpPostal &&
    pickUpCountry &&
    pickUpCity &&
    pickUpState &&
    pickUpProvince
    ) {
      temp = true;
    }

    return temp;
  };

  const submit = () => {
    let payload = {

    'consignee_name': consigneeName,
    'consignee_number': consigneeNumber,
    'consignee_address': consigneeAddress,
    'consignee_postal': consigneePostal,
    'consignee_country': consigneeCountry,
    'consignee_city': consigneeCity,
    'consignee_state': consigneeState,
    'consignee_province': consigneeProvince,

    'pickup_contact_name': pickUpName,
    'pickup_contact_number': pickUpNumber,
    'pickup_address': pickUpAddress,
    'pickup_postal': pickUpPostal,
    'pickup_country': pickUpCountry,
    'pickup_city': pickUpCity,
    'pickup_state': pickUpState,
    'pickup_province': pickUpProvince
    };

    if (disabled()) {
      addOrder({}, payload);
    }

    if (!consigneeNumber) {
      setErrConsigneeNumber('Please fill your phone number');
    } else if (!validation.validasiNomorSeluler(consigneeNumber)) {
      setErrConsigneeNumber('Please use the proper phone number');
    }
    if (!pickUpNumber) {
      setErrPickUpNumber('Please fill your phone number');
    } else if (!validation.validasiNomorSeluler(pickUpNumber)) {
      setErrPickUpNumber('Please use the proper phone number');
    }
  };

  useEffect(() => {
    setErrConsigneeNumber('');
    setErrPickUpNumber('');
  }, [consigneeNumber, pickUpNumber]);

  useEffect(() => {
    if (!openModal) {
      setConsigneeName('');
      setConsigneeNumber('');
      setConsigneeAddress('');
      setConsigneePostal('');
      setConsigneeCountry('');
      setConsigneeCity('');
      setConsigneeState('');
      setConsigneeProvince('');


      setPickUpName('');
      setPickUpNumber('');
      setPickUpAddress('');
      setPickUpPostal('');
      setPickUpCountry('');
      setPickUpCity('');
      setPickUpState('');
      setPickUpProvince('');
    }
  }, [openModal]);


  const dataTh = [
    // {
    //   label: 'Order',
    //   value: 'order_id'
    // },
    {
      label: 'Name',
      value: 'consignee_name'
    },
    {
      label: 'Number',
      value: 'consignee_number'
    },
    {
      label: 'Address',
      value: 'consignee_address'
    },
    {
      label: 'Postal',
      value: 'consignee_postal'
    },
    {
      label: 'Country',
      value: 'consignee_country'
    },
    {
      label: 'State',
      value: 'consignee_state'
    },
    {
      label: 'Province',
      value: 'consignee_province'
    },
    {
      label: 'City',
      value: 'consignee_city'
    },
    {
      label: 'Name',
      value: 'pickup_contact_name'
    },
    {
      label: 'Number',
      value: 'pickup_contact_number'
    },
    {
      label: 'Address',
      value: 'pickup_address'
    },
    {
      label: 'Postal',
      value: 'pickup_postal'
    },
    {
      label: 'Country',
      value: 'pickup_country'
    },
    {
      label: 'State',
      value: 'pickup_state'
    },
    {
      label: 'Province',
      value: 'pickup_province'
    },
    {
      label: 'City',
      value: 'pickup_city'
    },
  ];

  const RenderTable = () => {
    return (
      <div className='table-wrapper'>
        <table>
          <thead>
            <tr className='row-head'>
              <th rowSpan='2' colSpan='1' >Order</th>
              <th colSpan='8'>Consignee</th>
              <th colSpan='8'>Pick Up</th>
            </tr>
            <tr className='row-head'>
              {
                dataTh.map((el, i) => {
                  return (
                    <th  key={ i }>{el.label}</th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              dataOrders &&
              dataOrders.map((el, i) => {
                return (
                  <tr key={ i }>
                    <td>{el.order_id}</td>
                    <td>{el.consignee_name}</td>
                    <td>{el.consignee_number}</td>
                    <td>{el.consignee_address}</td>
                    <td>{el.consignee_postal}</td>
                    <td>{el.consignee_country}</td>
                    <td>{el.consignee_state}</td>
                    <td>{el.consignee_province}</td>
                    <td>{el.consignee_city}</td>
                    <td>{el.pickup_contact_name}</td>
                    <td>{el.pickup_contact_number}</td>
                    <td>{el.pickup_address}</td>
                    <td>{el.pickup_postal}</td>
                    <td>{el.pickup_country}</td>
                    <td>{el.pickup_state}</td>
                    <td>{el.pickup_province}</td>
                    <td>{el.pickup_city}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>

      </div>
    );
  };

  return (
    <Container>
      <div className={ 'btn-wrapper' }>
        <div
          className={ 'btn-add' }
          onClick={ () => setOpenModal(true) }
        >
          <Text
            styling={ FontStyles.mediumM }
            text={
              'Create Order'
            }
            color={ Colors.white.default }
          />
        </div>

      </div>
      <RenderTable/>
      <CustomModal
        isOpen={
          // true
          openModal
        }
        closeModal={ () => { setOpenModal(false); } }
      >
        <ModalInfo
        >
          <img
            className='xIcon'
            src={ Images.x }
            alt=''
            onClick={ () => { setOpenModal(false); } }
          />
          <Text
            styling={ FontStyles.heading3 }
            text='CREATE ORDER'
            color={ Colors.black.default }
          />
          <div className='all-text'>
            <div className='left'>
              <Text
                styling={ FontStyles.boldL }
                text='Consignee'
                color={ Colors.black.default }
                className='sticky-head'
              />
              <CustomInput
                keyword={ consigneeName }
                setKeyword={ setConsigneeName }
                placeholder='Robert'
                textLabel='Name'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneeName }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ consigneeNumber }
                setKeyword={ setConsigneeNumber }
                placeholder='08142927479'
                textLabel='Number'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneeNumber }
                validNumber={ true }
              />
              <CustomInput
                keyword={ consigneeAddress }
                setKeyword={ setConsigneeAddress }
                placeholder='Jl. Tugu no.2'
                textLabel='Address'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneeAddress }
              />
              <CustomInput
                keyword={ consigneePostal }
                setKeyword={ setConsigneePostal }
                placeholder='40123'
                textLabel='Postal'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneePostal }
                validNumber={ true }
              />
              <CustomInput
                keyword={ consigneeCountry }
                setKeyword={ setConsigneeCountry }
                placeholder='Indonesia'
                textLabel='Country'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneeCountry }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ consigneeState }
                setKeyword={ setConsigneeState }
                placeholder='Indonesia'
                textLabel='State'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneeState }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ consigneeProvince }
                setKeyword={ setConsigneeProvince }
                placeholder='West Java'
                textLabel='Province'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneeProvince }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ consigneeCity }
                setKeyword={ setConsigneeCity }
                placeholder='Jakarta'
                textLabel='City'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errConsigneeCity }
                validAlpha={ true }
              />
            </div>
            <Separator/>
            <div className='right'>
              <Text
                styling={ FontStyles.boldL }
                text='Pick Up'
                color={ Colors.black.default }
                className='sticky-head'
              />
              <CustomInput
                keyword={ pickUpName }
                setKeyword={ setPickUpName }
                placeholder='Robert'
                textLabel='Name'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpName }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ pickUpNumber }
                setKeyword={ setPickUpNumber }
                placeholder='08142927479'
                textLabel='Number'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpNumber }
                validNumber={ true }
              />
              <CustomInput
                keyword={ pickUpAddress }
                setKeyword={ setPickUpAddress }
                placeholder='Jl. Tugu no.2'
                textLabel='Address'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpAddress }
              />
              <CustomInput
                keyword={ pickUpPostal }
                setKeyword={ setPickUpPostal }
                placeholder='40123'
                textLabel='Postal'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpPostal }
                validNumber={ true }
              />
              <CustomInput
                keyword={ pickUpCountry }
                setKeyword={ setPickUpCountry }
                placeholder='Indonesia'
                textLabel='Country'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpCountry }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ pickUpState }
                setKeyword={ setPickUpState }
                placeholder='Indonesia'
                textLabel='State'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpState }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ pickUpProvince }
                setKeyword={ setPickUpProvince }
                placeholder='West Java'
                textLabel='Province'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpProvince }
                validAlpha={ true }
              />
              <CustomInput
                keyword={ pickUpCity }
                setKeyword={ setPickUpCity }
                placeholder='Jakarta'
                textLabel='City'
                type='text'
                className='inputCustom mb-20'
                width= 'unset'
                errorText = { errPickUpCity }
                validAlpha={ true }
              />
            </div>
          </div>
          <div
            className={ `btn-sub ${!disabled() ? 'disabled' : ''}` }
            onClick={ submit }
          >
            <Text
              styling={ FontStyles.mediumM }
              text={
                'Submit'
              }
              color={ Colors.white.default }
            />
          </div>
        </ModalInfo>
      </CustomModal>
    </Container>
  );
};

export default Dashboard;
