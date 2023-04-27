import React from "react";
import "./Card.scss";

function Card({ title, imageUrl, price }) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/images/Heart-unliked.svg" alt="Не нравится" />
            </div>
            <img
                className="sneakers_img"
                src={imageUrl}
                alt="Кроссовки"
                width={133}
                height={112}
            />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className="button cu-p" >
                    <img
                        src="./images/Plus.svg"
                        alt="Добавить"
                        width={11}
                        height={11}
                    />
                </button>
            </div>
        </div>
    );
}

export default Card;
