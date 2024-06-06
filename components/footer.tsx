import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box textAlign={"center"} opacity={0.4} fontSize={"sm"}>
            &copy; { new Date().getFullYear() } Koltyga Valery. All Rights Reserved.
        </Box>
    )
}

export default Footer