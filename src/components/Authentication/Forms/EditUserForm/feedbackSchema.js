import * as Yup from "yup";

import {
  ERR_SHORT,
  ERR_LONG,
  ERR_REQUIRED,
  ERR_EMAIL,
  ERR_EMAIL_REQUIRED,
  EMAIL_PATTERN,
  PHONE_PATTERN,
  ERR_PHONE,
  URL_PATTERN,
  ERR_AVATAR_URL,
} from "../constants";

export const feedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, ERR_SHORT).max(50, ERR_LONG).required(ERR_REQUIRED),
  email: Yup.string()
    .matches(EMAIL_PATTERN, ERR_EMAIL)
    .required(ERR_EMAIL_REQUIRED),
  phone: Yup.string().matches(PHONE_PATTERN, ERR_PHONE),
  avatar: Yup.string().matches(URL_PATTERN, ERR_AVATAR_URL),
});
