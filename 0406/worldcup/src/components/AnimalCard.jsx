const AnimalCard = ({ animal }) => {
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`} />
        </div>
    );
};

export default AnimalCard;
