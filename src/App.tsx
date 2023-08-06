import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import {
  Box,
  chakra,
  useTheme,
  ChakraProps,
  Text,
  useColorMode,
  useColorModeValue,
  Button,
  LightMode,
  DarkMode,
} from "@chakra-ui/react";
import { ChakraUIProvider } from "./chakra-ui.provider";

interface CardProps extends ChakraProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Card = chakra<"div", CardProps>("div", {
  baseStyle: {
    shadow: "lg",
    // rounded: 'lg',
    // bg: 'red',
    // h: '30px',
  },
});

function FormiumForm() {
  return(
    <div className="formium" >FormiumForm</div>
  )
}

function StyleColorMode() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  console.log(`bg is ${bg}`);
  console.log(`color is ${color}`);

  return (
    <>
      <Box
        mb={4}
        bg={bg}
        color={color}
        
      >
        This box's style will change based on the color mode.
      </Box>
      <Button
        size='sm'
        onClick={toggleColorMode}
      >
        Toggle Mode
      </Button>
      <LightMode>
        <Button
          size='sm'
          colorScheme='blue'
        >
          Light Mode Always
        </Button>
      </LightMode>

      <DarkMode>
        <Button
          size='sm'
          colorScheme='blue'
        >
          Dark Mode Always
        </Button>
      </DarkMode>

      
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const useThemeReturned = useTheme();

  console.log("chakra useThemeReturned:", useThemeReturned);

  return (
    <ChakraUIProvider>
      <h1>Chakra Demo</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>

      <Box
        m='2px'
        bg={"#f8f8f8"}
      >
        Tomato
      </Box>

      <Card>card</Card>

      <chakra.button
        px='3'
        py={2}
        bg='papayawhip'
        rounded='md'
        _hover={{ bg: "green.300" }}
      >
        chakra.button
      </chakra.button>

      <Box
        bg='red.200'
        w='400px'
      >
        This is a non-responsive box
      </Box>

      <Box
        bg='red.200'
        w={[300, 400, 500, 600, 700, 800]}
      >
        This is a responsive box
      </Box>

      <Text color='text'>will be gray.900 in light mode and gray.50 in dark mode</Text>

      <StyleColorMode />

      <Box sx={{ ".formium": { bg: "gray.50", color: "gray.700" } }}>
        <FormiumForm />
      </Box>
    </ChakraUIProvider>
  );
}

export default App;
