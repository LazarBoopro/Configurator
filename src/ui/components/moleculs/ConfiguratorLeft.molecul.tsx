import AppCanvas from "../containers/AppCanvas.container";

export default function ConfigurationLeft({ visible }: { visible: boolean }) {
    return (
        <article className="configurator__left">
            <AppCanvas visible={visible} />
        </article>
    );
}
