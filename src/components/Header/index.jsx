import React from "react";
import "./Header.scss";

function Header({ onClickOpenCart }) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img
                    src="./images/logo.png"
                    alt="Логотип"
                    width={40}
                    height={40}
                />
                <div className="header_info">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header_right d-flex">
                <li className="mr-30" onClick={onClickOpenCart}>
                    <img
                        src="./images/Cart.svg"
                        alt="Корзина"
                        width={18}
                        height={18}
                    />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img
                        src="./images/Profile.svg"
                        alt="Корзина"
                        width={18}
                        height={18}
                    />
                </li>
            </ul>
        </header>
    );
}

export default Header;
