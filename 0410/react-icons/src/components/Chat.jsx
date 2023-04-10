import { useState } from "react";
import axios from "axios";
const Chat = () => {
    const [question, setQuestion] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitChat = async (e) => {
        try {
            e.preventDefault();
            if (isLoading) {
                alert("검색중입니다...");
                return;
            }
            if (!question) {
                alert("질문을 입력해주세요!");
                return;
            }
            //로딩중 true
            setIsLoading(true);
            setContent("");

            const response = await axios.post(
                "https://holy-fire-2749.fly.dev/chat",
                {
                    question,
                },
                {
                    headers: {
                        Authorization: "Bearer BLOCKCHAINSCHOOL3",
                    },
                }
            );

            if (response.status !== 200) {
                alert("오류가 발생했습니다.");
                setIsLoading(false);
                return;
            }
            setContent(response.data.choices[0].message.content);

            //로딩중 false
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            //로딩중 false
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-800 flex flex-col justify-center items-center min-h-screen  text-white">
            <form onSubmit={onSubmitChat}>
                <input
                    className="text-black"
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <input className="ml-4" type="submit" value="검 색" />
            </form>
            {content && <div className="mt-4 px-16">{content}</div>}
        </div>
    );
};

export default Chat;
