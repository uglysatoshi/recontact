import {
    Box,
    Text,
    Container,
    StatHelpText,
    StatNumber,
    StatLabel,
    Stat,
    SimpleGrid,
    Avatar,
    Stack,
    useColorModeValue
} from "@chakra-ui/react"

const MainPage = () => {
    return (
        <Container maxW={"container.xl"} boxShadow={"base"}  rounded={10} >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={3} p={5}>
                <Stat boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                    <StatLabel>Total Revenue</StatLabel>
                    <StatNumber>$45,231.89</StatNumber>
                    <StatHelpText>+20.1% from last month</StatHelpText>
                </Stat>
                <Stat boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                    <StatLabel>Subscriptions</StatLabel>
                    <StatNumber>+2350</StatNumber>
                    <StatHelpText>+180.1% from last month</StatHelpText>
                </Stat>
                <Stat boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                    <StatLabel>Sales</StatLabel>
                    <StatNumber>+12,234</StatNumber>
                    <StatHelpText>+19% from last month</StatHelpText>
                </Stat>
                <Stat boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                    <StatLabel>Active Now</StatLabel>
                    <StatNumber>+573</StatNumber>
                    <StatHelpText>+201 since last hour</StatHelpText>
                </Stat>
            </SimpleGrid>

            <Box p={5}>
                <Text fontSize="xl" mb={4}>Recent Sales</Text>
                <Box>
                    <Text mb={2}>You made 265 sales this month.</Text>
                    <Stack spacing={3}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Box display="flex" alignItems="center">
                                <Avatar name="Olivia Martin" src="https://bit.ly/broken-link" />
                                <Box ml={3}>
                                    <Text>Olivia Martin</Text>
                                    <Text fontSize="sm">olivia.martin@email.com</Text>
                                </Box>
                            </Box>
                            <Text>$1,999.00</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Box display="flex" alignItems="center">
                                <Avatar name="Jackson Lee" src="https://bit.ly/broken-link" />
                                <Box ml={3}>
                                    <Text>Jackson Lee</Text>
                                    <Text fontSize="sm">jackson.lee@email.com</Text>
                                </Box>
                            </Box>
                            <Text>$39.00</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Box display="flex" alignItems="center">
                                <Avatar name="Isabella Nguyen" src="https://bit.ly/broken-link" />
                                <Box ml={3}>
                                    <Text>Isabella Nguyen</Text>
                                    <Text fontSize="sm">isabella.nguyen@email.com</Text>
                                </Box>
                            </Box>
                            <Text>$299.00</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Box display="flex" alignItems="center">
                                <Avatar name="William Kim" src="https://bit.ly/broken-link" />
                                <Box ml={3}>
                                    <Text>William Kim</Text>
                                    <Text fontSize="sm">will@email.com</Text>
                                </Box>
                            </Box>
                            <Text>$99.00</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Box display="flex" alignItems="center">
                                <Avatar name="Sofia Davis" src="https://bit.ly/broken-link" />
                                <Box ml={3}>
                                    <Text>Sofia Davis</Text>
                                    <Text fontSize="sm">sofia.davis@email.com</Text>
                                </Box>
                            </Box>
                            <Text>$39.00</Text>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Container>
        
    )
}

export default MainPage