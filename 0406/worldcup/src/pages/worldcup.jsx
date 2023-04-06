import animalData from "../animalData.json";
import { useEffect, useState } from "react";

const Worldcup = () => {
    const [shuffleAnimal, setShuffleAnimal] = useState();

    useEffect(() => {
        let shuffleAnimalData = animalData.sort(() => {
            return -1;
        });
        console.log(shuffleAnimalData);
    }, []);

    // animalData 랜덤 정렬
    // useEffect(() => {
    //     let shuffleAnimalData = animalData.sort(() => {
    //         return Math.random() - 0.5;
    //     });
    //     setShuffleAnimal(shuffleAnimalData);
    // }, []);

    return <div>worldcup</div>;
};
export default Worldcup;
