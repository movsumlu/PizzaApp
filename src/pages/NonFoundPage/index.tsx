import { FC } from "react";

import ReturnComponent from "components/ReturnComponent";
import nonFoundPageImage from "assets/images/nonFoundPageImage.svg";

const NonFoundPage: FC = () => (
  <ReturnComponent
    title="Ой, не туда!"
    subtitle="Страница не найдена, либо еще не создана."
    srcOfImage={nonFoundPageImage}
  />
);

export default NonFoundPage;
