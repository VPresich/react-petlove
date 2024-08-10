import * as Yup from "yup";

import {
  ERR_SHORT,
  ERR_LONG,
  ERR_REQUIRED,
  ERR_EMAIL,
  ERR_EMAIL_REQUIRED,
  ERR_PASSWORD,
  ERR_PASSWORD_REQUIRED,
  ERR_CONFIRM_REQUIRED,
  ERR_PASSWORD_MATCH,
} from "../constants";

import { EMAIL_PATTERN } from "../../../../auxiliary/patterns";

export const feedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, ERR_SHORT).max(50, ERR_LONG).required(ERR_REQUIRED),
  email: Yup.string()
    .matches(EMAIL_PATTERN, ERR_EMAIL)
    .required(ERR_EMAIL_REQUIRED),
  password: Yup.string().min(7, ERR_PASSWORD).required(ERR_PASSWORD_REQUIRED),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], ERR_PASSWORD_MATCH)
    .required(ERR_CONFIRM_REQUIRED),
});
