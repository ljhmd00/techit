import { useState } from "react";

function FunctionComp() {
    const [count, setCount] = useState(0);

    const onClickAdd = () => {
        setCount(count + 1);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="bg-blue-300 px-4 py-2 rounded-md">{count}</div>
            <button onClick={onClickAdd} className="bg-red-300 px-4 py-2 rounded-md ml-4">
                +
            </button>
        </div>
    );
}

export default FunctionComp;
