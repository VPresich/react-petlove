import * as Yup from "yup";

import {
  ERR_EMAIL,
  ERR_PASSWORD,
  ERR_EMAIL_REQUIRED,
  ERR_PASSWORD_REQUIRED,
  EMAIL_PATTERN,
} from "../constants";

export const feedbackSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_PATTERN, ERR_EMAIL)
    .required(ERR_EMAIL_REQUIRED),
  password: Yup.string().min(7, ERR_PASSWORD).required(ERR_PASSWORD_REQUIRED),
});
