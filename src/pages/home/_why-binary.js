import React from 'react'
import styled from 'styled-components'
import GridContainer from 'components/container'
import Grid, { Column } from 'components/grid'
import { Text, Header } from 'components/typography'
import Upgrade from 'assets/svg/upgrade.svg'
import Deposit from 'assets/svg/deposit.svg'
import Getstarted from 'assets/svg/assets.svg'
import Highspeed from 'assets/svg/high-speed-platform.svg'
import Turnover from 'assets/svg/turnover.svg'
import Award from 'assets/svg/award.svg'

const Section = styled.div`
    padding: 8rem 0 4rem;
    width: 100%;
    background: var(--color-grey-1);
`
const Col = styled(Column)`
    padding: 0;
    text-align: center;
`
const Icon = styled.div`
    padding: 0 0 2.4rem;
`

const Why = () => (
    <Section id="why-binary">
        <GridContainer>
            <Header as="h2" align="center" lh="2" margin="0 0 6rem" weight="300">
            Why should you trade binary options with Binary.com?
            </Header>
            <Grid
                columns="repeat(3, 1fr)"
                columngap="6.5rem"
                rowgap="5rem"
                mobilerowgap="5rem"
            >
                <Col justify="center">
                    <Icon>
                        <amp-img src={Upgrade} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Upgrade your Virtual Account into a Real Account to start trading binary options from as little as USD 1 per trade  
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Deposit} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Deposit a minimum of USD 5 into your Real Account to purchase your first contract for as low as USD 1
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Getstarted} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Get started with binary online trading and trade over 100 assets across major markets worldwide
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Highspeed} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Enjoy swift trading with a high-speed platform that registers an average of 20 client transactions per second
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Turnover} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Join one of the world’s leading names in binary options trading with over USD 1 billion annual turnover
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Award} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Begin your trading experience with a respected binary options trading brand with 18 years of award-winning excellence
                    </Text>
                </Col>
            </Grid>
        </GridContainer>
    </Section>
)
export default Why