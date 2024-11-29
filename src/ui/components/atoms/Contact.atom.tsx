import email from "../../../assets/email.svg";
import tel from "../../../assets/tel.svg";
import "../../styles/atoms.scss";

const Contact = () => {
    return (
        <div className="schedule">
            <p>Zakažite izlazak na teren</p>
            <div>
                <a href="mailto:info@deking.com" className="mailto">
                    <img src={email} alt="mail" />
                    <p>Pošaljite email</p>
                </a>
                <a href="tel:+38162209207" className="tel">
                    <img src={tel} alt="tel" />
                    <p>Pozovite nas</p>
                </a>
            </div>
        </div>
    );
};

export default Contact;
