import { Box } from "@chakra-ui/react";
import B from "./B";
import { Fragment } from "react";

function A() {
    return (
        <>
            <Box w={100} h={100} bgColor="red.500">
                A
            </Box>
            <B />
        </>
    );
}

export default A;
