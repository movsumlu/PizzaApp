import { FC } from "react";

import ReturnComponent from "components/ReturnComponent";
import checkoutImage from "assets/images/checkoutImage.gif";

const Checkout: FC = () => (
  <ReturnComponent
    title="Ура, Ваш заказ принят!"
    subtitle="Мы уже начали его собирать =)"
    srcOfImage={checkoutImage}
  />
);

export default Checkout;
