import {Box, Button, Checkbox, Container, Flex, Heading, Input, Link, useColorModeValue} from "@chakra-ui/react";
import { useRouter } from "next/router";

const IndexPage = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/main').then(() => 404);
  }

  return (
      <Container maxW={"container.xl"} boxShadow={"base"} height={"100vh"} rounded={10} >
        <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"} >
          <Box boxShadow='base' p='6' rounded='md' background={useColorModeValue("white","#47556930")} >
            <Flex direction={"column"} rounded={6} >
              <Heading mb={6}>Log in</Heading>
              <Input placeholder={"example@mail.com"} variant={"outline"} mb={3} type={"email"}/>
              <Input placeholder={"*******"} variant={"outline"} mb={6} type={"password"}/>
              <Checkbox mb={3} colorScheme={"gray"}>Remember me?</Checkbox>
              <Button colorScheme={"gray"} mb={3} onClick={handleClick}>
                Submit
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>

    );
  
}

export default IndexPage;
