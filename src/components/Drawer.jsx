import React from "react";

function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="mb-30 d-flex justify-between ">
                    Корзина
                    <img
                        className="remove_btn cu-p"
                        src="/images/Remove.svg"
                        alt=""
                    />
                </h2>

                <div className="items flex">
                    <div className="cart_item d-flex align-center mb-20">
                        <div
                            style={{
                                backgroundImage: "url(/images/sneakers/1.png)",
                            }}
                            className="cart_item_img"
                        ></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="remove_btn"
                            src="/images/Remove.svg"
                            alt=""
                        />
                    </div>

                    <div className="cart_item d-flex align-center mb-20">
                        <div
                            style={{
                                backgroundImage: "url(/images/sneakers/1.png)",
                            }}
                            className="cart_item_img"
                        ></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="remove_btn"
                            src="/images/Remove.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="total_block">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="green_button">
                        Оформить заказ
                        <img src="/images/Arrow.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
