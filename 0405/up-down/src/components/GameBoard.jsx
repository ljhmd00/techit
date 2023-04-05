import { useState, useEffect } from "react";

const GameBoard = () => {
    const [point, setPoint] = useState(5);
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
    const [choiceNum, setChoiceNum] = useState("");
    const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

    const onChangeChoice = (e) => {
        setChoiceNum(e.target.value);
    };

    const onClickCheck = () => {
        //예외처리 1. 문자입력 2. 0 ~ 100 이외의 숫자
        let checkNum = parseInt(choiceNum);

        if (isNaN(checkNum)) {
            setHint("숫자를 입력해주세요!");
            return;
        }
        if (checkNum < 0 || checkNum >= 100) {
            setHint("0 ~ 100미만의 숫자만 입력해주세요.");
            return;
        }
        if (randomNum === checkNum) {
            setHint("정답입니다! 랜덤 값을 초기화 합니다.");
            if (point > 0) {
                //기존의 점수 불러옴
                let savedPoint = localStorage.getItem("point");
                //현재 점수와 기존의 점수 합침
                localStorage.setItem("point", parseInt(savedPoint) + point);
            }
            setRandomNum(Math.floor(Math.random() * 100));
            setChoiceNum("");
            setPoint(5);
        } else if (randomNum > checkNum) {
            setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
            setPoint(point - 1);
        } else if (randomNum < checkNum) {
            setHint(`정답은 ${checkNum}보다 낮은 숫자입니다.`);
            setPoint(point - 1);
        }
    };

    // useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);
    // useEffect(() => console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`), [choiceNum]);
    useEffect(() => console.log(`현재점수 ${point}`), [point]);

    return (
        <div className=" w-full grow flex flex-col justify-center items-center">
            <div className="mb-4 text-xl font-bold">{hint}</div>
            <div>
                <input
                    className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
                    type="text"
                    value={choiceNum}
                    onChange={onChangeChoice}
                />
                <button
                    onClick={onClickCheck}
                    className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
                >
                    확인
                </button>
            </div>
        </div>
    );
};

export default GameBoard;
