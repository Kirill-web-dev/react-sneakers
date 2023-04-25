import React from "react";

function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/images/Heart-unliked.svg" alt="Не нравится" />
            </div>
            <img
                src="./images/sneakers/1.png"
                alt="Кроссовки"
                width={133}
                height={112}
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button cu-p">
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
