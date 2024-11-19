import ConfigurationLeft from "../components/moleculs/ConfiguratorLeft.molecul";
import ConfiguratorRight from "./ConfiguratorRight.molecul";

import "../styles/configurator.scss";

export default function Configurator({
  setPage,
}: {
  setPage: CallableFunction;
}) {
  return (
    <div className="configurator">
      <ConfigurationLeft />
      <ConfiguratorRight setPage={setPage} />
    </div>
  );
}
