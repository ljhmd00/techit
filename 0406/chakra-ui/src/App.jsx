import { ChakraProvider, Box, Button } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <Box>Hello, ChakraUI</Box>
            <Button colorScheme="twitter">button</Button>
        </ChakraProvider>
    );
}

export default App;
