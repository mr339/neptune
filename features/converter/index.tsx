import { yupResolver } from '@hookform/resolvers/yup';
import { logo } from 'imageConfig';
import getConfig from 'next/config';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { currencySchema } from 'schemas/converter';

//REACT ICONS
import { FaMoneyBillAlt } from 'react-icons/fa';
import { SiConvertio } from 'react-icons/si';

//COMPONENTS
import PrimaryButton from '@shared/components/buttons/primary-button';
//STYLES
import { calculateConversion } from '@shared/utils/converter-utils/converter.util';
import styles from './converter.module.scss';

const ConverterComponent = () => {
  const { publicRuntimeConfig } = getConfig();
  const router = useRouter();
  const rate = 3; // setting the example rate;

  const [nepValue, setNepValue] = useState<any>();
  const [busdValue, setBusdValue] = useState<any>();

  const handleNepValueChange = (event: any) => {
    const nepValue = event.target.value;
    setNepValue(nepValue);
    if (Object.keys(errors).length === 0) {
      setBusdValue(calculateConversion(nepValue, 'nep-to-busd', rate)); // convert NEP to BUSD
    }
  };

  const handleBusdValueChange = (event: any) => {
    const busdValue = event.target.value;
    setBusdValue(busdValue);
    if (Object.keys(errors).length === 0) {
      setNepValue(calculateConversion(busdValue, 'busd-to-nep', rate)); // convert BUSD to NEP
    }
  };

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(currencySchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const checkWalletConnection = async (data: any) => {
    setIsLoading(true);

  };
  //EFFECTS

  return (
    <>
      {isLoading ?
        <div>Loader</div>
        :
        <div className="w-60 mx-auto">
          <div className="d-flex align-items-center">
            <div className="w-50 text-center">
              <Image alt="Image" src={logo} height={500} width={300} />
            </div>
            <div className={styles.login_form}>
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
                      value={nepValue}
                      onChange={(e) => {
                        handleNepValueChange(e);
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

                <div className={`${styles.covert_Icon} mb-3`}>
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
                      value={busdValue}
                      onChange={(e) => {
                        handleBusdValueChange(e);
                        register('nep').onChange(e);
                      }}
                    />
                    {errors?.busd && (
                      <p className="invalid-feedback d-block mb-0">
                        {errors?.busd?.message?.toString()}
                      </p>
                    )}
                  </InputGroup>
                </Form.Group>

                <Form.Group className="my-4" controlId="convertValue">
                  1 NEP equals {rate} BUSD
                </Form.Group>
                <PrimaryButton
                  type="button"
                  btnLabel="Check Wallet Details"
                  isLoading={isLoading}
                  className="w-100"
                />
              </Form>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ConverterComponent;
