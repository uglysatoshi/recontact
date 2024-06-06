import {
    Box,
    Text,
    Container,
    FormControl,
    FormLabel,
    Input,
    Button,
    useColorModeValue,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Stack,
    useToast
} from "@chakra-ui/react"
import { useState } from 'react'

const WorkPage = () => {
    const toast = useToast();
    const [sales, setSales] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");

    const handleAddSale = () => {
        if (customerName && email && amount) {
            const newSale = { customerName, email, amount };
            setSales([...sales, newSale]);

            toast({
                title: "Sale added.",
                description: "The sale has been registered successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            setCustomerName("");
            setEmail("");
            setAmount("");
        } else {
            toast({
                title: "Incomplete data.",
                description: "Please fill in all the fields.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Container maxW={"container.xl"} boxShadow={"base"} rounded={10}>
            <Tabs variant="line" colorScheme="black" p={5}>
                <TabList>
                    <Tab>Register Sale</Tab>
                    <Tab>Sales List</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel key="register-sale">
                        <Box boxShadow={"base"} p={5} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Text fontSize="xl" mb={4}>Register a New Sale</Text>
                            <Stack spacing={4}>
                                <FormControl id="customerName">
                                    <FormLabel>Customer Name</FormLabel>
                                    <Input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl id="amount">
                                    <FormLabel>Amount</FormLabel>
                                    <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                </FormControl>
                                <Button  onClick={handleAddSale}>Add Sale</Button>
                            </Stack>
                        </Box>
                    </TabPanel>

                    <TabPanel key="sales-list">
                        <Box boxShadow={"base"} p={5} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Text fontSize="xl" mb={4}>Sales List</Text>
                            <Stack spacing={3}>
                                {sales.map((sale, index) => (
                                    <Box key={index} display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                        <Box>
                                            <Text>{sale.customerName}</Text>
                                            <Text fontSize="sm">{sale.email}</Text>
                                        </Box>
                                        <Text>${sale.amount}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default WorkPage