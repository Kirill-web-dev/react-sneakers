import React from "react";
import axios from "axios";

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
    
    const [sneakers, setSneakers] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios
            .get("https://644a934d79279846dceca942.mockapi.io/items")
            .then((res) => setSneakers(res.data));
        axios
            .get("https://644a934d79279846dceca942.mockapi.io/cart")
            .then((res) => setCartItems(res.data));
    }, []);
    
    const onAddToCart = (addedToCart) => {
        axios.post("https://644a934d79279846dceca942.mockapi.io/cart", addedToCart);
        setCartItems(prev => [...prev, addedToCart]);
    };

    const onRemoveCartItem = (id) => {
        axios.delete(`https://644a934d79279846dceca942.mockapi.io/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            <Drawer
                opener={cartOpened}
                onClickCloseCart={() => setCartOpened(false)}
                cartItems={cartItems}
                onRemoveItem={onRemoveCartItem}
            />
            <Header 
                onClickOpenCart={
                    () => {setCartOpened(true)}
                } 
            />
            <div className="content p-40">
                <div className="mb-40 d-flex align-center justify-between">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="search_block d-flex">
                        <img src="/images/Search.svg" alt="Поиск" />
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')} 
                                className="clear remove_btn cu-p" 
                                src="/images/Remove.svg" 
                                alt="Clear"
                            />)}
                        <input 
                            onChange={onChangeSearchInput} 
                            value={searchValue}
                            type="text"
                            placeholder="Поиск..." 
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {sneakers
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                        <Card 
                            key={index} 
                            onFavorite={null}
                            onPlus={addedToCart => onAddToCart(addedToCart)}
                            {...item} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
