const Card = ({ color, cardName }) => {
    return <div className={`${color} w-40 h-60`}>{cardName}</div>;
};
export default Card;
