import { ReturnComponent } from "components/ReturnComponent";
import nonFoundPageImage from "assets/images/nonFoundPage.svg";

const NonFoundPage = () => (
  <ReturnComponent
    title="Ой, не туда!"
    subtitle="Страница не найдена, либо еще не создана."
    srcOfImage={nonFoundPageImage}
  />
);

export { NonFoundPage };
