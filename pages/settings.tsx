import {
    Box,
    Text,
    Container,
    FormControl,
    FormLabel,
    Input,
    Switch,
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

const SettingsPage = () => {
    const toast = useToast();

    const handleSaveChanges = () => {
        toast({
            title: "Changes saved.",
            description: "Your settings have been updated successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };
    
    return (
        <Container maxW={"container.xl"} boxShadow={"base"} rounded={10}>
            <Tabs variant="line" colorScheme="black" p={5}>
                <TabList>
                    <Tab>Profile</Tab>
                    <Tab>Account</Tab>
                    <Tab>Preferences</Tab>
                </TabList>

                <TabPanels>
                        <TabPanel key="profile">
                            
                                <Box boxShadow={"base"} p={5} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Text fontSize="xl" mb={4}>Profile Settings</Text>
                                    <Stack spacing={4}>
                                        <FormControl id="username">
                                            <FormLabel>Username</FormLabel>
                                            <Input type="text" defaultValue="uglysatoshi" />
                                        </FormControl>
                                        <FormControl id="email">
                                            <FormLabel>Email address</FormLabel>
                                            <Input type="email" defaultValue="uglysatoshi@example.com" />
                                        </FormControl>
                                        <FormControl id="bio">
                                            <FormLabel>Bio</FormLabel>
                                            <Input type="text" defaultValue="Fullstack-developer" />
                                        </FormControl>
                                        <Button onClick={handleSaveChanges}>Save</Button>
                                    </Stack>
                                </Box>
                        </TabPanel>

                        <TabPanel key="account">
                         
                                <Box boxShadow={"base"} p={5} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Text fontSize="xl" mb={4}>Account Settings</Text>
                                    <Stack spacing={4}>
                                        <FormControl id="password">
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" />
                                        </FormControl>
                                        <FormControl id="confirm-password">
                                            <FormLabel>Confirm Password</FormLabel>
                                            <Input type="password" />
                                        </FormControl>
                                        <FormControl display="flex" alignItems="center">
                                            <FormLabel htmlFor="email-alerts" mb="0">
                                                Enable email alerts
                                            </FormLabel>
                                            <Switch id="email-alerts" />
                                        </FormControl>
                                        <Button onClick={handleSaveChanges}>Save Changes</Button>
                                    </Stack>
                                </Box>
                        </TabPanel>

                        <TabPanel key="preferences">
                          
                                <Box boxShadow={"base"} p={5} rounded={6} bg={useColorModeValue('#ffffff40', '#20202340')}>
                                    <Text fontSize="xl" mb={4}>Preferences</Text>
                                    <Stack spacing={4}>
                                        <FormControl display="flex" alignItems="center">
                                            <FormLabel htmlFor="dark-mode" mb="0">
                                                Enable Dark Mode
                                            </FormLabel>
                                            <Switch id="dark-mode" />
                                        </FormControl>
                                        <FormControl display="flex" alignItems="center">
                                            <FormLabel htmlFor="auto-updates" mb="0">
                                                Enable Auto Updates
                                            </FormLabel>
                                            <Switch id="auto-updates" />
                                        </FormControl>
                                        <Button onClick={handleSaveChanges}>Save Changes</Button>
                                    </Stack>
                                </Box>
                        </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default SettingsPage