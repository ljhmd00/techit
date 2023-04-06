import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";

function App() {
    const [isLoading, setisLoading] = useState(true);

    return (
        <ChakraProvider>
            <Box>Hello, ChakraUI</Box>
            <Button
                isLoading={isLoading}
                colorScheme="twitter"
                leftIcon={<PhoneIcon />}
                variant="solid"
            >
                Call
            </Button>
        </ChakraProvider>
    );
}

export default App;
