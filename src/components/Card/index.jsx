import React from "react";
import "./Card.scss";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);
    
    const addToCart = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="card">
            <div className="favorite" onClick={onClickFavorite}>
                <img  src={isFavorite ? "/images/Heart-like.svg" : "/images/Heart-unliked.svg"} alt="Не нравится" />
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
                <img 
                    onClick={addToCart}
                    className="cu-p" 
                    src={isAdded ? "./images/Added.svg" : "./images/Plus.svg"} 
                    alt="Добавить" 
                />
            </div>
        </div>
    );
}

export default Card;
