const WinAnimalCard = ({ animal }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center font-bold text-5xl mb-4">
                🎉🎉🎉{animal}🎉🎉🎉
            </div>
            <img
                className="border-8 border-white shadow-lg shadow-white w-96"
                src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
            />
            <div className="text-2xl mt-4 font-bold">❤{animal}❤</div>
        </div>
    );
};

export default WinAnimalCard;
