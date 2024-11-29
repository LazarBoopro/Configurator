import ConfigurationLeft from "../components/moleculs/ConfiguratorLeft.molecul";
import ConfiguratorRight from "./ConfiguratorRight.molecul";

import "../styles/configurator.scss";

export default function Configurator({
    setPage,
    visible,
}: {
    setPage: CallableFunction;
    visible: boolean;
}) {
    return (
        <div className="configurator" style={{ display: visible ? undefined : "none" }}>
            <ConfigurationLeft visible={visible} />
            <ConfiguratorRight setPage={setPage} />
        </div>
    );
}
