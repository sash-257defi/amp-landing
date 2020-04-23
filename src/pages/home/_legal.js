import React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { Text, LinkText } from 'components/typography'

const FooterWrapper = styled.footer`
    background: var(--color-blue-2);
    padding: 4rem 0 1rem;
    color: var(--color-grey-2);
`

const Legal = () => (
    <>
        <FooterWrapper>
            <Container flexDirection="column">
                <Text size="1.2rem" weight="300">
                    Binary.com is an award-winning online trading provider that helps its clients to trade on financial markets through binary options and CFDs. Trading binary options and CFDs on Synthetic Indices is classified as a gambling activity. Remember that gambling can be addictive – please play responsibly. Learn more about (
                        <LinkText
                            href="https://www.binary.com/en/responsible-trading.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            weight="bold"
                            hover="white"
                            size="1.2rem"
                        >
                            Responsible Trading
                        </LinkText>
                        ).
                </Text>
                <Text size="1.2rem" weight="300">
                    Some products are not available in all countries. This website's services are not made available in certain countries such as the USA, Canada, Hong Kong, or to persons under age 18.
                </Text>
                <Text size="1.2rem" weight="300">
                    Trading binary options may not be suitable for everyone, so please ensure that you fully understand the risks involved. Your losses can exceed your initial deposit and you do not own or have any interest in the underlying asset.
                </Text>
                <Text size="1.2rem" weight="300">
                    CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 78.6% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
                </Text>
                <Text align="center" size="1.2rem" weight="300">
                &copy; 2020 Binary.com | All rights reserved
                </Text>
            </Container>
        </FooterWrapper>
    </>
)

export default Legal