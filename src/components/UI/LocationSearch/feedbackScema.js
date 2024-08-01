import * as Yup from "yup";
import { ERR_SHORT, ERR_REQUIRED } from "./constants";

export const feedbackSchema = Yup.object().shape({
  topic: Yup.string().min(3, ERR_SHORT).required(ERR_REQUIRED),
});
