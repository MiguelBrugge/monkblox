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

const Navigation = ({ setPage }) => {
    return (
        <nav id="navigation" class="navbar navbar-expand-sm navbar-dark bg-dark py-0">
            <div class="container-fluid">
                <a class="navbar-brand fs-4 fw-bold" href="javascript:void(0)">MonkBlox</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="contentDiv mynavbar" class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-3 me-4">
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center text-white px-4" onClick={() => setPage("Home")}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center text-white px-4" onClick={() => setPage("Discover")}>Discover</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center text-white px-4" href="javascript:void(0)">Avatar Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center text-white px-4" href="javascript:void(0)">Create</a>
                        </li>
                    </ul>
                    <form id="searchForm" class="d-flex align-items-center bg-white pe-2 rounded">
                        <input className="form-control bg-transparent border-0 shadow-none" type="text" placeholder="Search" />
                        <span>
                            <FontAwesomeIcon className=" fs-5 text-dark" icon={faMagnifyingGlass} />
                        </span>
                    </form>
                    <div id="navButtons" className="d-flex align-items-center gap-2 ms-auto">
                        <button className="d-flex align-items-center justify-content-center rounded">
                            <FontAwesomeIcon className="p-2 rounded fs-5 text-white" icon={faBell} />
                        </button>
                        <button className="d-flex align-items-center justify-content-center rounded">
                            <FontAwesomeIcon className="p-2 rounded fs-5 text-white" icon={faUserGroup} />
                        </button>
                        <button className="d-flex align-items-center justify-content-center rounded">
                            <FontAwesomeIcon className="p-2 rounded fs-5 text-white" icon={faMessage} />
                        </button>
                        <button id="robuxAmount" className="d-flex align-items-center rounded">
                            <FontAwesomeIcon className="p-2 rounded fs-5 text-white" icon={faBrazilianRealSign} />
                            <p className="fs-5 fw-bold text-white m-0">100k+</p>
                        </button>
                        <button className="d-flex align-items-center justify-content-center rounded">
                            <FontAwesomeIcon className="p-2 rounded fs-5 text-white" icon={faGear} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;