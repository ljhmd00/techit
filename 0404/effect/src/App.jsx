import Counter from "./components/Counter";
import { useState } from "react";

function App() {
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0);
    const onClickToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
            {/* {toggle ? <Counter /> : "카운터"} */}
            {toggle && <Counter count={count} setCount={setCount} />}
            <button
                onClick={onClickToggle}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-full
"
            >
                버튼
            </button>
        </div>
    );
}

export default App;
