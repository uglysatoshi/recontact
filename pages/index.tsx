import {Button, Checkbox, Flex, Heading, Input, useColorMode, useColorModeValue} from "@chakra-ui/react";

const IndexPage = () => {
  
  const {toggleColorMode} = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"} >
      <Flex direction={"column"} background={formBackground} p={12} rounded={6}> 
        <Heading mb={6}>Log in</Heading>
        <Input placeholder={"example@mail.com"} variant={"filled"} mb={3} type={"email"}/>
        <Input placeholder={"*******"} variant={"filled"} mb={6} type={"password"}/>
        <Checkbox mb={3} colorScheme={"purple"}>Remember me?</Checkbox>
        <Button colorScheme={"purple"} mb={3}>Submit</Button>
      </Flex>
    </Flex>    
    );
  
}

export default IndexPage;
