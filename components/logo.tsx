import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import ArrowIcon from './icons/arrow'
import styled from '@emotion/styled'

const LogoBox = styled.span
    `
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    
    > svg {
    transition: 500ms ease;
    }
    
    &:hover > svg {
    transform: translateY(-3px);
    }
`

const Logo = () => {
    return (
        (<Link href={"/main"} scroll={false}>
            <LogoBox>
                <ArrowIcon/>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily={'"M PLUS Rounded 1c", sans-serif'}
                    fontWeight="bold"
                    ml={1}
                >
                    recontact
                </Text>
            </LogoBox>
        </Link>)
    );
}

export default Logo