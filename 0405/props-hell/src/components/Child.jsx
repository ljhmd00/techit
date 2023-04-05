import GrandChild from "./GrandChild";

const Child = ({ gift, setGift }) => {
    return (
        <div>
            <div className="w-40 h-40 bg-blue-300">Child : {gift}</div>
            <GrandChild gift={gift} setGift={setGift} />
        </div>
    );
};
export default Child;
