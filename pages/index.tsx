import {Box, Button, Checkbox, Flex, Heading, Input, Link, useColorModeValue} from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"} >
      <Box boxShadow='base' p='6' rounded='md' background={useColorModeValue("white","#47556930")} >
        <Flex direction={"column"} rounded={6} >
          <Heading mb={6}>Log in</Heading>
          <Input placeholder={"example@mail.com"} variant={"outline"} mb={3} type={"email"}/>
          <Input placeholder={"*******"} variant={"outline"} mb={6} type={"password"}/>
          <Checkbox mb={3} colorScheme={"gray"}>Remember me?</Checkbox>
          <Button colorScheme={"gray"} mb={3}>
            <Link href={"/main"}>
              Submit
            </Link>
          </Button>
        </Flex>
      </Box>
    </Flex>    
    );
  
}

export default IndexPage;
