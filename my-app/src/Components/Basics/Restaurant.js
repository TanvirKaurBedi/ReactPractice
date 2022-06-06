import React from "react";
import MenuCard from "./MenuCard.js";
import Menu from "./menuApi.js";
import "./Style.css";
import Navbar from "./Navbar.js";

const uniqueList = [...new Set(Menu.map((currentElement) => {
    return currentElement.category
}))];
// console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    // console.log(menuData);
    const [menuList, setMenuList] = React.useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currentElement) => {
            return currentElement.category === category;

        });

        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}>
            </Navbar>
            <MenuCard menuData={menuData} />
        </>
    );

};

export default Restaurant;