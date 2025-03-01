//import { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import BurgerMenuIcon from "/icons/BurgerMenuIcon.png";
import Search from "/icons/Search.png";
import Exit from "/icons/Multiply.png";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// ------- Lots of commented out text, saved for using later on if needed -------

// const MenuButton = styled.button`
//   background: transparent;
// `;

// Customized styling to the pre-named classes provided in the React Burger Menu
const CustomStyles = styled.div`
  width: 100%;

  /* .burgermenu-wrapper {
    width: 100%;
    height: 55px;
  } */

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 42px;
    height: 42px;
    right: 18px;
    top: 20px;
    z-index: 1000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    position: fixed;
    min-width: 42px;
    min-height: 42px;
    right: 18px;
    top: 20px;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    z-index: 1001;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #202537;
    padding: 2.5em 1.5em 0;
    //max-height: 400px; /* Set the maximum height */
    display: flex;
    justify-content: center;
  }

  /* Wrapper for item list */
  .bm-item-list {
    //color: #b8b7ad;
    //padding: 50px 0 30px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    text-align: left;
    max-width: 300px;
  }

  /* Individual item */
  .bm-item {
    display: flex;
    color: #fff6e9;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .search-wrapper {
    display: flex;
  }

  .search-wrapper img {
    width: 20px;
    height: 20px;
    display: flex;
  }

  #search {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff6e9;
  }

  #react-burger-cross-btn {
    width: 42px;
    height: 42px;
  }
`;
const ExitButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 42px;
  height: 42px;
`;

export const BurgerMenu = () => {
  const { t } = useTranslation();
  // showSettings(event) {
  //   event.preventDefault();
  // };
  // State to control whether the menu is open or closed
  // const [isOpen, setIsOpen] = useState(false);

  // <// Function to toggle the menu
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };>

  {
    /*Button to toggle the sidebar menu*/
  }
  {
    /* <MenuButton onClick={toggleMenu}>
        <img src={BurgerMenuIcon} alt="Toggle Menu" />
      </MenuButton> */
  }
  {
    /* isOpen={isOpen} */
  }

  return (
    /* Sidebar Menu */
    <CustomStyles>
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={CustomStyles}
        right
        width={"100%"}
        customBurgerIcon={<img src={BurgerMenuIcon} />}
        customCrossIcon={
          <ExitButton>
            <img src={Exit} alt="Close Menu" />
          </ExitButton>
        }
      >
        <div className="search-wrapper">
          <Link to={"#"} id="search">
            <img src={Search} />
            <p className="menu-item">{t("burgerMenu.search")}</p>
          </Link>
        </div>
        <Link to={"/"}>
          <p className="menu-item">{t("burgerMenu.home")}</p>
        </Link>
        <Link to={"/aboutus-page"}>
          <p className="menu-item">{t("burgerMenu.about")}</p>
        </Link>
        <Link to={"#"}>
          <p className="menu-item">{t("burgerMenu.course")}</p>
        </Link>
        <Link to={"#"}>
          <p className="menu-item">{t("burgerMenu.resources")}</p>
        </Link>
        <Link to={"#"}>
          <p className="menu-item">{t("burgerMenu.shop")}</p>
        </Link>
      </Menu>
    </CustomStyles>
  );
};
