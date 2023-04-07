import { yupResolver } from '@hookform/resolvers/yup';
import { logo } from 'imageConfig';
import Image from 'next/image';
import { ChangeEvent, useCallback, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { currencySchema } from 'schemas/converter';
import ConnectWallet from "@features/connect-wallet-modal";
import { FaMoneyBillAlt } from 'react-icons/fa';
import { SiConvertio } from 'react-icons/si';
import PrimaryButton from '@shared/components/Buttons/primary-button';
import { calculateConversion } from '@shared/utils/converter-utils/converter.util';
import styles from './converter.module.scss';

const ConverterComponent = () => {
  const rate = 3; // setting the example rate;

  const [nepAmount, setNepAmount] = useState<string>('');
  const [busdAmount, setBusdAmount] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);


  const {
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(currencySchema),
  });


  const handleNepAmountChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const nepAmount = event.target.value;
    setNepAmount(nepAmount);
    if (Object.keys(errors).length === 0) {
      setBusdAmount(calculateConversion(nepAmount, 'nep-to-busd', rate)); // convert NEP to BUSD
    }
  }, []);

  const handleBusdAmountChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const busdAmount = event.target.value;
    setBusdAmount(busdAmount);
    if (Object.keys(errors).length === 0) {
      setNepAmount(calculateConversion(busdAmount, 'busd-to-nep', rate)); // convert BUSD to NEP
    }
  }, []);

  const clearValues = async () => {  // resetting values
    setBusdAmount('');
    setNepAmount('');
  }

  const checkWalletConnection = async () => {
    setShowModal(true);
  };


  return (
    <>
      {showModal ? (<ConnectWallet show={showModal} setShow={setShowModal} />) : null}
      <div className="w-60 mx-auto">
        <div className="d-flex align-items-center">
          <div className="w-50 text-center">
            <Image alt="Image" src={logo} height={500} width={300} className="logo_class" />
          </div>
          <div className={styles.converter_form}>
            <h3>Crypto Converter</h3>
            <hr />
            <Form
              autoComplete="off"
              className="fs-sm"
            >
              <Form.Group className="mb-3" controlId="nep">
                <Form.Label>NEP</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaMoneyBillAlt />
                  </InputGroup.Text>
                  <Form.Control
                    {...register('nep')}
                    autoComplete="off"
                    placeholder="0.00"
                    aria-label="text"
                    type="text"
                    aria-describedby="basic-addon1"
                    className="border-start-0 ps-0 fs-sm"
                    value={nepAmount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleNepAmountChange(e);
                      register('nep').onChange(e);
                    }}
                  />
                  {errors?.nep && (
                    <p className="invalid-feedback d-block mb-0">
                      {errors?.nep?.message?.toString()}
                    </p>
                  )}
                </InputGroup>
              </Form.Group>

              <div className={`${styles.covert_Icon} mb-3 text-center`}>
                <SiConvertio />
              </div>

              <Form.Group className="mb-3" controlId="busd">
                <Form.Label>BUSD</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text >
                    <FaMoneyBillAlt />
                  </InputGroup.Text>
                  <Form.Control
                    {...register('busd')}
                    autoComplete="off"
                    type="text"
                    placeholder="0.00"
                    aria-label="text"
                    aria-describedby="basic-addon1"
                    className="border-start-0 ps-0 fs-sm"
                    value={busdAmount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleBusdAmountChange(e);
                      register('busd').onChange(e);
                    }}
                  />
                  {errors?.busd && (
                    <p className="invalid-feedback d-block mb-0">
                      {errors?.busd?.message?.toString()}
                    </p>
                  )}
                </InputGroup>
              </Form.Group>

              <div className={`${styles.middle_info} my-4`}>
                <Form.Group controlId="convertValue">
                  1 NEP equals {rate} BUSD
                </Form.Group>
                <p className={styles.clear_form} onClick={clearValues}>Clear form</p>
              </div>
              <PrimaryButton
                type="button"
                btnLabel="Check Wallet Details"
                className="w-100"
                btnFunction={checkWalletConnection}
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConverterComponent;
