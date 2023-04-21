import "../components/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faHippo,
    faMagnifyingGlass,
    faGear,
    faBrazilianRealSign,
    faUserGroup,
    faBell,
    faMessage
} from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
    return(
        <div id="sideNav" className="bg-dark position-absolute">
            <img className="profileImg rounded-circle mt-3" height={100} src="https://tr.rbxcdn.com/afeca399eb6e5949e20fd82a545a17c1/150/150/AvatarHeadshot/Png"/>
            <a className="profileLink fs-5 text-white ">Monky6021</a>
        </div>
    );
}

export default SideNav;