import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Container from 'components/container'
import Grid, { Column } from 'components/grid'
import device from 'themes/device'
import Binary from 'assets/svg/binary_logo_light.svg'
import Hamburger from 'assets/svg/hamburger-menu.svg'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--color-blue);
    z-index: 100;
    padding: 2.4rem 0;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
`

const HamburgerMenu = styled.button`
    cursor: pointer;
    display: none;
    border: none;
    background: none;
    position: absolute;
    top: 4.5rem;
    right: 4rem;
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const LinkText = styled(Link)`
    font-size: var(--text-size-sm);
    color: var(--color-white);
    text-decoration: none;
    letter-spacing: 0.1rem;
    cursor: pointer;
    margin: 0 2.4rem;
    transition: color 0.25s;

    &:hover {
        color: var(--color-grey-3);
    }
`

const BlackLink = styled(LinkText)`
    color: var(--color-black);
    margin: 1.6rem 2rem;
    font-size: var(--text-size-m);
`

const LinkWrapper = styled(Column)`
    @media ${device.tabletL} {
        display: none;
    }
`
const SidebarNav = styled.div`
    padding: 2rem;
    display: grid;
`

const Header = () => (
    <>
        <HeaderWrapper>
            <Container>
            <Grid
                    columns="1fr 6fr"
                    columngap="1rem"
                    mobilerowgap="3rem"
                >
                    <Link to="/">
                        <amp-img src={Binary} width="250" height="50" />
                    </Link>
                    <LinkWrapper justify="end" align="center">
                        <LinkText to="/#explore" on="tap:explore.scrollTo()">
                            Explore
                        </LinkText>
                        <LinkText to="/#paltforms" on="tap:platforms.scrollTo()">
                            Platforms
                        </LinkText>
                        <LinkText to="/#why-binary" on="tap:why-binary.scrollTo()">
                            Why us
                        </LinkText>
                    </LinkWrapper>
                    <HamburgerMenu on="tap:sidebar1.toggle">
                        <amp-img src={Hamburger} width="18" height="16" />
                    </HamburgerMenu>
                </Grid>
            </Container>
        </HeaderWrapper>
        <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
            <SidebarNav align="start">
                <BlackLink to="/#explore" on="tap:explore.scrollTo()">
                    Explore
                </BlackLink>
                <BlackLink to="/#platforms" on="tap:platforms.scrollTo()">
                    Platforms
                </BlackLink>
                <BlackLink to="/#why-binary" on="tap:why-binary.scrollTo()">
                    Testimonials
                </BlackLink>
            </SidebarNav>
        </amp-sidebar>
    </>
)

export default Header
