import * as yup from 'yup';

export const EMAIL_VALIDATION_SCHEMA = yup.string().email().required();
export const PASSWORD_VALIDATION_SCHEMA = yup
  .string()
  .required('Пароль обовʼязковий')
  .min(6, 'Пароль має містити щонайменше 6 символів')
  .matches(/[a-z]/, 'Пароль має містити хоча б одну маленьку літеру')
  .matches(/[A-Z]/, 'Пароль має містити хоча б одну велику літеру')
  .matches(/\d/, 'Пароль має містити хоча б одну цифру')
  .matches(
    /[@$!%*?&]/,
    'Пароль має містити хоча б один спеціальний символ (@, $, !, %, *, ?, &)'
  );

export const SIGN_UP_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
  lastName: yup.string().trim().min(2).max(64).required(),
  nickName: yup.string().trim().min(2).max(64),
  email: EMAIL_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Паролі мають збігатися'
    )
    .required(),
  role: yup.string().required('Оберіть роль'),
  isAgree: yup
    .boolean()
    .oneOf([true], 'Ви маєте погодитися з умовами')
    .required('Обовʼязково'),
});

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  email:EMAIL_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
});

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
});

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(64).required(),
  phone: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/, 'Phone number must presspont pattern +111111111111')
    .required(),
  email: yup.string().email(),
  birthday: yup.date().max(new Date()),
});

const USER_AUTO_SCHEMA = yup.object({
  model: yup
    .string()
    .min(2)
    .max(20)
    .matches(/^[A-Z][a-z].*$/, 'Enter normal Brand')
    .required(),
  productionDate: yup.date().min(new Date(1900, 0, 1)).required(),
  km: yup.number().positive().required(),
  number: yup
    .string()
    .length(8)
    .matches(/^[A-Z]{2}/, 'Enter normal region')
    .matches(/^..[0-9]{4}/, 'Enter normal NUMBER')
    .matches(/[A-Z]{2}$/, 'Enter normal seria')
    .required(),
});

// USER_AUTO_SCHEMA.validate({
//   model: "Audi",
//   productionDate: new Date(2000, 4, 5),
//   km: 679,
//   number: "DF3833YI",
// })
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
