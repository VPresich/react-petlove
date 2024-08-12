import * as Yup from "yup";

import { ERR_REQUIRED, ERR_IMAGE_URL /*, ERR_BIRTHDAY*/ } from "./constants";

// import { BIRTHDAY_PATTERN } from "../../auxiliary/patterns";

import { URL_PATTERN } from "../../auxiliary/patterns";

export const feedbackSchema = Yup.object().shape({
  name: Yup.string().required(ERR_REQUIRED),
  title: Yup.string().required(ERR_REQUIRED),
  imgURL: Yup.string()
    .matches(URL_PATTERN, ERR_IMAGE_URL)
    .required(ERR_REQUIRED),
  species: Yup.string().required(ERR_REQUIRED),
  // birthday: Yup.string().required(ERR_REQUIRED),
  sex: Yup.string().default("unknown"),
});

// .matches(BIRTHDAY_PATTERN, ERR_BIRTHDAY)
