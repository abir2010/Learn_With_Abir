import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCartShopping,
  faEnvelope,
  faLanguage,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <nav class="header">
        {/* Logo Part */}
        <h1 class="logo">
          <div className="logo-box">
            <motion.div
              className="box icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a>
                <FontAwesomeIcon
                  icon={faTerminal}
                  size="xl"
                  style={{ color: "#405cf5" }}
                />
              </a>
            </motion.div>
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a href="#">Learn_With_Abir</a>
            </motion.div>
          </div>

          <p>
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              style={{ color: "#405cf5" }}
            />
          </p>
        </h1>

        {/* Navigation part */}
        <ul class="main-nav">
          {/* nav box part */}
          <li>
            <motion.div
              className="box"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="nav-box">Courses</p>
            </motion.div>
          </li>
          <li>
            <motion.div
              className="box"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="nav-box">Offer Today</p>
            </motion.div>
          </li>
          <li>
            <motion.div
              className="box"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="nav-box">About Us</p>
            </motion.div>
          </li>
          <li>
            <motion.div
              className="box"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="nav-box">Contact</p>
            </motion.div>
          </li>

          {/* nav icon part */}
          <li className="icon">
            <motion.div
              className="box"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p>
                <FontAwesomeIcon
                  icon={faBell}
                  beatFade
                  size="xl"
                  style={{ color: "#405cf5" }}
                />
              </p>
            </motion.div>
          </li>
          <li className="icon">
            <motion.div
              className="box"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p>
                <FontAwesomeIcon
                  icon={faLanguage}
                  size="xl"
                  style={{ color: "#405cf5" }}
                />
              </p>
            </motion.div>
          </li>
          <li className="icon">
            <motion.div
              className="box"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="xl"
                  style={{ color: "#405cf5" }}
                />
              </p>
            </motion.div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
