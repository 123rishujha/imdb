import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RxVideo } from "react-icons/rx";
import { BiSolidUserCircle } from "react-icons/bi";

const activeStyle = {
  color: "Yellow",
  textDecoration: "none",
};

const normalStyle = {
  color: "black",
  textDecoration: "none",
};

const list = [
  {
    to: "/",
    title: "Home",
    icon: <AiFillHome />,
  },
  {
    to: "/search",
    title: "Search",
    icon: <BiSearch />,
  },
  {
    to: "/video",
    title: "Video",
    icon: <RxVideo />,
  },
  {
    to: "/you",
    title: "You",
    icon: <BiSolidUserCircle />,
  },
];

function Navbar() {
  return (
    <div className={Styles.NavbarHolder}>
      {list.map((elem) => (
        <div key={elem.title}>
          <NavLink
            to={elem.to}
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            end
          >
            <div className={Styles.navIconHolder}>
              <p>{elem.icon}</p>
              <p>{elem.title}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
