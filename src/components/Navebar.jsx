import { Link, useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaHome, FaCode, FaFolder, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const navItems = [
  { to: "/", icon: FaHome, label: "Home" },
  { to: "/skills", icon: FaCode, label: "Skills" },
  { to: "/projects", icon: FaFolder, label: "Projects" },
  { to: "/contact", icon: FaEnvelope, label: "Contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  
  return (
    <Motion.nav
    className="navbar"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      {navItems.map(({ to, icon: Icon, label }) => (
        <Motion.div
        key={to}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        >
          <Link
            to={to}
            className={`navbar-link${pathname === to ? " active" : ""}`}
            aria-label={label}
          >
            <Icon />
          </Link>
        </Motion.div>
      ))}
    </Motion.nav>
  );
}

export default Navbar;
