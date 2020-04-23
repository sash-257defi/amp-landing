import React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { LinkButton } from 'components/button'
import { Text, Header } from 'components/typography'
import signupUrl from 'utils/signup-url'
import HeroImg from 'assets/images/hero-image.jpg'

const BigButton = styled(LinkButton)`
    padding: 1.6rem 2.4rem;
    font-size: 2rem;
    position: relative;
    font-weight: normal;
    letter-spacing: 0.1rem;
    margin: 2rem auto 0;
`

const HandleAmp = styled.div`
    background: linear-gradient(rgba(42, 48, 82, 0.8), rgba(42, 48, 82, 0.9)), url(${HeroImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    position: relative;
    height: 100vh;
    padding: 14rem 0 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Header} {
        color: white;
    }
    ${Text} {
        color: white;
    }
`

const FullWidth = styled(Container)`
    width: 100%;
    margin-bottom: 2.4rem;
`

const Hero = () => {
    return (
        <HandleAmp bg="var(--color-black)" position="relative" p="12rem 0">
            <FullWidth
                position="relative"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                flexWrap="wrap-reverse"
            >
                    <Header as="h1" lh="1.25" align="center">
                        Online Trading with <strong>Binary.com</strong>
                    </Header>
                    <Header as="h2" weight="300" mb="1.4rem" align="center">
                        Participate in the world's financial markets
                    </Header>
            </FullWidth>
            <BigButton data-amp-replace='QUERY_PARAM' primary href={signupUrl()} target="_blank" rel="noopener noreferrer">
                Create free account
            </BigButton>
        </HandleAmp>
    )
}

export default Hero
