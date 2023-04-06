import { Box } from "@chakra-ui/react";
import C from "./C";

function B() {
    return (
        <div>
            <Box w={100} h={100} bgColor="green.500">
                B
            </Box>
            <C />
        </div>
    );
}

export default B;
