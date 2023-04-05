import * as yup from 'yup';

export const currencySchema = yup.object().shape({
  nep: yup
    .string()
    .required('A NEP value is required.')
    .matches(
      /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
      'Please enter a valid value.'
    ),
  busd: yup.string().required('A BUSD value is required.')
    .matches(
      /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
      'Please enter a valid value.'
    ),
});
