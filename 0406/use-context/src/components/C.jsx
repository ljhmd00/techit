import { Box, Button } from "@chakra-ui/react";
import { AppContext } from "../App";
import { useContext } from "react";

function C() {
    const { count, setCount } = useContext(AppContext);
    return (
        <div>
            <Box w={100} h={100} bgColor="blue.500">
                {count}
                <Button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </Button>
            </Box>
        </div>
    );
}

export default C;
