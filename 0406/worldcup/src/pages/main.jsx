import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center ">
            <div className="text-6xl">이상형 월드컵</div>
            <Link to="/worldcup">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-8">시 작</button>
            </Link>
        </div>
    );
};
export default Main;
