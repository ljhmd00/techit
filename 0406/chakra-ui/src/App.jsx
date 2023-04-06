import {
    ChakraProvider,
    Button,
    useDisclosure,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider>
            <Flex minH="100vh" justify="center" alignItems="center">
                <Button onClick={onOpen} colorScheme="green">
                    Open
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>hiii</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={20}>안녕하세요</ModalBody>

                        <ModalFooter>Designed by, lee</ModalFooter>
                        <Button onClick={onClose}>닫기</Button>
                    </ModalContent>
                </Modal>
            </Flex>
        </ChakraProvider>
    );
}

export default App;
