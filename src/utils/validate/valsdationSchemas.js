import * as yup from "yup";

const USER_AUTO_SCHEMA = yup.object({
  model: yup
    .string()
    .min(2)
    .max(20)
    .matches(/^[A-Z][a-z].*$/, "Enter normal Brand")
    .required(),
  productionDate: yup.date().min(new Date(1900, 0, 1)).required(),
  km: yup.number().positive().required(),
  number: yup
    .string()
    .length(8)
    .matches(/^[A-Z]{2}/, "Enter normal region")
    .matches(/^..[0-9]{4}/, "Enter normal NUMBER")
    .matches(/[A-Z]{2}$/, "Enter normal seria")
    .required(),
});

USER_AUTO_SCHEMA.validate({
  model: "Audi",
  productionDate: new Date(2000, 4, 5),
  km: 679,
  number: "DF3833YI",
})
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
