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
    useColorModeValue,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from "@chakra-ui/react"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const MainPage = () => {
    const chartColor = useColorModeValue('rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 1)');
    const chartBackgroundColor = useColorModeValue('rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)');

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Revenue',
                data: [3000, 5000, 4000, 7000, 8000, 10000],
                fill: false,
                backgroundColor: chartBackgroundColor,
                borderColor: chartColor,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Revenue',
                color: chartColor,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: chartColor,
                },
            },
            y: {
                ticks: {
                    color: chartColor,
                },
            },
        },
    }

    return (
        <Container maxW={"container.xl"} boxShadow={"base"} rounded={10}>
            <Tabs variant="line" colorScheme="black" p={5}>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Recent Sales</Tab>
                    <Tab>Top Customers</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={3} mb={5}>
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

                        <Box boxShadow={"base"} p={5} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                            <Line data={data} options={options} />
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box>
                            <Text fontSize="xl" mb={4}>Recent Sales</Text>
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
                    </TabPanel>

                    <TabPanel key="top-customers">
                        <Box>
                            <Text fontSize="xl" mb={4}>Top Customers</Text>
                            <Stack spacing={3}>
                                <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Box display="flex" alignItems="center">
                                        <Avatar name="Liam Smith" src="https://bit.ly/broken-link" />
                                        <Box ml={3}>
                                            <Text>Liam Smith</Text>
                                            <Text fontSize="sm">liam.smith@email.com</Text>
                                        </Box>
                                    </Box>
                                    <Text>$12,000.00</Text>
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Box display="flex" alignItems="center">
                                        <Avatar name="Emma Johnson" src="https://bit.ly/broken-link" />
                                        <Box ml={3}>
                                            <Text>Emma Johnson</Text>
                                            <Text fontSize="sm">emma.johnson@email.com</Text>
                                        </Box>
                                    </Box>
                                    <Text>$9,000.00</Text>
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Box display="flex" alignItems="center">
                                        <Avatar name="Noah Brown" src="https://bit.ly/broken-link" />
                                        <Box ml={3}>
                                            <Text>Noah Brown</Text>
                                            <Text fontSize="sm">noah.brown@email.com</Text>
                                        </Box>
                                    </Box>
                                    <Text>$8,500.00</Text>
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Box display="flex" alignItems="center">
                                        <Avatar name="Sophia Garcia" src="https://bit.ly/broken-link" />
                                        <Box ml={3}>
                                            <Text>Sophia Garcia</Text>
                                            <Text fontSize="sm">sophia.garcia@email.com</Text>
                                        </Box>
                                    </Box>
                                    <Text>$7,800.00</Text>
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center" boxShadow={"base"} p={3} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Box display="flex" alignItems="center">
                                        <Avatar name="Ava Martinez" src="https://bit.ly/broken-link" />
                                        <Box ml={3}>
                                            <Text>Ava Martinez</Text>
                                            <Text fontSize="sm">ava.martinez@email.com</Text>
                                        </Box>
                                    </Box>
                                    <Text>$7,500.00</Text>
                                </Box>
                            </Stack>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default MainPage
