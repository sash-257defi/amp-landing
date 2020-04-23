import React from 'react'
import styled from 'styled-components'
import GridContainer from 'components/container'
import Grid, { Column } from 'components/grid'
import { Text, Header } from 'components/typography'
import Smarttrader from 'assets/images/smart-trader.png'
import Autotrader from 'assets/images/auto-trader.png'
import Mtfive from 'assets/images/mt5.png'

const Section = styled.div`
    padding: 8rem 0 4rem;
    width: 100%;
    background: var(--color-white);
`
const Col = styled(Column)`
    padding: 0;
    text-align: center;
`
const Icon = styled.div`
    padding: 0;
    margin: 0 0 1rem;
`

const Platforms = () => (
    <Section id="platforms">
        <GridContainer>
            <Header as="h2" align="center" lh="2" margin="0 0 6rem" weight="300">
            Which Binary.com platform do you prefer to use?
            </Header>
            <Grid
                columns="repeat(3, 1fr)"
                columngap="6.5rem"
                rowgap="5rem"
                mobilerowgap="5rem"
            >
                <Col justify="center">
                    <Icon>
                        <amp-img src={Smarttrader} width="200" height="100" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25" weight="bold">
                        SmartTrader
                    </Header>
                    <Text align="center">
                        Our premiere online platform is ideal for you to get started with binary online trading.
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Autotrader} width="200" height="100" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25" weight="bold">
                        AutoTrader
                    </Header>
                    <Text align="center">
                        Our advanced and intuitive tool lets you execute your binary online trading strategies even while you sleep.
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Mtfive} width="200" height="100" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25" weight="bold">
                        MetaTrader 5
                    </Header>
                    <Text align="center">
                        Trade Forex and CFDs on our popular multi-asset platform.
                    </Text>
                </Col>
            </Grid>
        </GridContainer>
    </Section>
)
export default Platforms