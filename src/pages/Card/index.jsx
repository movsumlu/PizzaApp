import { ReturnComponent } from "../../components/ReturnComponent";
import emptyCartImage from "../../assets/images/emptyCart.svg";

const Card = () => {
  return (
    <ReturnComponent
      title="Ой, пусто!"
      subtitle="Для того, чтобы заказать пиццу, перейди в меню."
      srcOfImage={emptyCartImage}
    />
  );
};

export { Card };
