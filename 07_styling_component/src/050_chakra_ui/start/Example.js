import Todo from "./components/Todo"
import { ChakraProvider } from "@chakra-ui/react";

const Example = () => {
  return (
    <>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
