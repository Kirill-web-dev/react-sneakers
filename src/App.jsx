function App() {
    return (
        <div className="wrapper clear">
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
                    <li className="mr-30">
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
            <div className="content p-40">
                <h1 className="mb-40">Все кроссовки</h1>

                <div className="sneakers d-flex justify-between">
                    <div className="card">
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

                    <div className="card">
                        <img
                            src="./images/sneakers/2.png"
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

                    <div className="card">
                        <img
                            src="./images/sneakers/3.png"
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

                    <div className="card">
                        <img
                            src="./images/sneakers/4.png"
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
                </div>
            </div>
        </div>
    );
}

export default App;
