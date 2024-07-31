import { NavLink, useLocation } from "react-router-dom";
import css from "./AppNav.module.css";
import clsx from "clsx";

const classItem = ({ isActive, isHomePage }) => {
  return clsx(css.item, isActive && css.active, isHomePage && css.home);
};

export default function AppNav() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => classItem({ isActive, isHomePage })}
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        className={({ isActive }) => classItem({ isActive, isHomePage })}
        to="/find"
      >
        Find pet
      </NavLink>
      <NavLink
        className={({ isActive }) => classItem({ isActive, isHomePage })}
        to="/friends"
      >
        Our friends
      </NavLink>
    </nav>
  );
}
