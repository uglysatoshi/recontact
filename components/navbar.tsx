import Logo from './logo'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import React, { forwardRef, ForwardedRef } from 'react'
import SettingsButton from "./settings-button";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            color={active ? "#202023" : inactiveColor}
            target={target}
            borderRadius="0.375rem"
            {...props}
        >
            {children}
        </Link>
    )
}

type MenuLinkProps = ChakraLinkProps & NextLinkProps;

const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>((props, ref: ForwardedRef<HTMLAnchorElement>) => (
    <ChakraLink as={NextLink} ref={ref} {...props} />
));

interface NavbarProps {
    path: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const { path } = props

    return (
        <Box
            display={"flex"}
            position={"fixed"}
            w={"100%"}
            justifyContent="center"
            zIndex={2}
        >
            <Box
                rounded={6}
                m={3}
                as="nav"
                w="container.xl"
                boxShadow={"base"}
                bg={useColorModeValue('#ffffff40', '#20202380')}
                css={{ backdropFilter: 'blur(10px)' }}
                {...props}
            >
                <Container
                    display="flex"
                    pb={2}
                    pt={2}
                    maxW="container.xl"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex align="center" >
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                        </Heading>
                    </Flex>

                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        alignItems="center"
                    >
                        <LinkItem
                            href={"/works"}
                            path={path}
                            target={"_self"}
                            display={"inline-flex"}
                            alignItems={"center"}
                            style={{ gap: 4 }}
                        >
                            Workspace
                        </LinkItem>
                        <LinkItem
                            target="_blank"
                            href="https://github.com/uglysatoshi/recontact"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4 }}
                        >
                            Source
                        </LinkItem>
                    </Stack>

                    <Box flex={1} textAlign="right">
                        <ThemeToggleButton />
                        <SettingsButton />

                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <Menu isLazy id="navbar-menu">
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    aria-label="Options"
                                />
                                <MenuList>
                                    <MenuItem as={MenuLink} href={"/main"}>
                                        About
                                    </MenuItem>
                                    <MenuItem as={MenuLink} href={"/works"}>
                                        Works
                                    </MenuItem>
                                    <MenuItem
                                        as={Link}
                                        href="https://github.com/uglysatoshi/recontact"
                                    >
                                        Source
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>

    )
}

export default Navbar