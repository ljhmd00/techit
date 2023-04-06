import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

const Worldcup = () => {
    const [shuffleAnimal, setShuffleAnimal] = useState();
    const [choice, setChoice] = useState(0);
    const [nextRound, setNextRound] = useState([]);
    const [end, setEnd] = useState(16);

    const onClickChoice = (v) => () => {
        setChoice(choice + 2);
        // let copy = [...nextRound];
        // copy.push(v);
        // setNextRound(copy);
        setNextRound([...nextRound, v]);
    };

    useEffect(() => {
        let shuffleAnimalData = animalData.sort(() => {
            return Math.random() - 0.5;
        });
        setShuffleAnimal(shuffleAnimalData);
    }, []);

    useEffect(() => {
        if (choice === end) {
            setShuffleAnimal(nextRound);
            setNextRound([]);
            setEnd(end / 2);
            setChoice(0);
        }
    }, [choice]);

    return (
        <div className="bg-blue-100 min-h-screen flex justify-center items-center">
            {shuffleAnimal &&
                (end === 1 ? (
                    <WinAnimalCard animal={shuffleAnimal[choice]} />
                ) : (
                    <>
                        <AnimalCard
                            animal={shuffleAnimal[choice]}
                            choice={choice}
                            onClickChoice={onClickChoice}
                        />
                        <div className="text-2xl mx-8 font-bold text-center">
                            <div>{`${end === 2 ? "결승" : end + "강"}`}</div>
                            <div>VS</div>
                        </div>
                        <AnimalCard
                            animal={shuffleAnimal[choice + 1]}
                            choice={choice + 1}
                            onClickChoice={onClickChoice}
                        />
                    </>
                ))}
        </div>
    );
};

export default Worldcup;
