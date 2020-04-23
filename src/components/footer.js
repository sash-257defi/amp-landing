import React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { Text } from 'components/typography'

const FooterWrapper = styled.footer`
    background: var(--color-blue-2);
    padding: 1rem 0;
    color: var(--color-grey-2);
`

const Footer = () => (
    <>
        <FooterWrapper>
            <Container flexDirection="column">
                <Text align="center" size="1.2rem" weight="300">
                    &copy; 2020 Binary.com | All rights reserved
                </Text>
            </Container>
        </FooterWrapper>
    </>
)

export default Footer
