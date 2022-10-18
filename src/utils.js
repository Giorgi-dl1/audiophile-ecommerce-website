export const validateForm = (values) => {
  const errors = {};
  const regexes = {
    email: /\S+@\S+\.\S+/,
    name: /^[a-zA-Z ]{2,30}$/,
    number: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
    // eslint-disable-next-line no-useless-escape
    address: /[A-Za-z0-9'\.\-\s\,]/,
    zipCode: /^\d{4,5}(-\d{4})?$/,
    city: /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/,
    country:
      /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/,
    eMoneyNumber: /^\d{9}$/,
    eMoneyPin: /^\d{4}$/,
  };
  Object.keys(values).forEach((value) => {
    if (!values[value]) {
      errors[value] = `Required`;
    } else if (regexes[value]) {
      if (!regexes[value].test(values[value])) errors[value] = "Wrong format";
    }
  });

  if (values.paymentMethod === "e-Money" && !values.eMoneyNumber) {
    errors.eMoneyNumber = "Required";
  } else if (
    values.paymentMethod === "e-Money" &&
    !regexes.eMoneyNumber.test(values.eMoneyNumber)
  ) {
    errors.eMoneyNumber = "Incorrect type";
  }
  if (values.paymentMethod === "e-Money" && !values.eMoneyPin) {
    errors.eMoneyPin = "Required";
  } else if (
    values.paymentMethod === "e-Money" &&
    !regexes.eMoneyPin.test(values.eMoneyPin)
  ) {
    errors.eMoneyPin = "Incorrect type";
  }

  return errors;
};
