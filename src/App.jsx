import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

import { sneakers } from "./data";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content p-40">
                <div className="mb-40 d-flex align-center justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search_block d-flex">
                        <img src="/images/Search.svg" alt="Поиск" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex justify-between flex-wrap">
                    {sneakers.map(item => (
                        <Card 
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
