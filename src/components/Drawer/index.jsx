import React from "react";
import "./Drawer.scss";

function Drawer({ opener, onClickCloseCart, onRemoveItem, cartItems = [] }) {
    return (
        <div className={`overlay ${opener ? "overlay_show" : ""}`}>
            <div className="drawer d-flex flex-column">
                <h2 className="mb-30 d-flex justify-between ">
                    Корзина
                    <img
                        onClick={onClickCloseCart}
                        className="remove_btn cu-p"
                        src="/images/Remove.svg"
                        alt=""
                    />
                </h2>

                {cartItems.length > 0 ? (
                    <>
                        <div className="items flex">
                            {cartItems.map((item) => (
                                <div className="cart_item d-flex align-center mb-20">
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.imageUrl})`,
                                        }}
                                        className="cart_item_img"
                                    ></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{item.title}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemoveItem(item.id)}
                                        className="remove_btn"
                                        src="/images/Remove.svg"
                                        alt=""
                                    />
                                </div>
                            ))}
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
                    </>
                ) : (
                    <div className="empty_cart d-flex align-center justify-center flex-column flex">
                        <img
                            width={120}
                            height={120}
                            className="mb-20"
                            src="../../images/Empty.jpg"
                            alt=""
                        />
                        <h2>Корзина пуста!</h2>
                        <p className="opacity-6">
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ.
                        </p>
                        <button onClick={onClickCloseCart} className="green_button">
                            <img src="../../images/Arrow.svg" alt="" />
                            Вернуться к покупкам
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;
