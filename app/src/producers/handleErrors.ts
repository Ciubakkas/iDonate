import { notification } from "antd";

export const handleErrors: producer = ({
  errors = observe.errors,
  setShow = update.errors[param.type].showed,
  host = observe.config.host,
}) => {
  if (!errors || host !== "https://mittleieforhold-dev.klpeiendom.no/") return;
  Object.keys(errors).forEach((type) => {
    if (!errors[type].showed) {
      notification.error({
        message: type,
        description: errors[type].message,
      });
      setShow.set(true, { type });
    }
  });
};
