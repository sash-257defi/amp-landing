import React from 'react'
import styled from 'styled-components'
import GridContainer from 'components/container'
import Grid, { Column } from 'components/grid'
import { Text, Header } from 'components/typography'
import Forex from 'assets/svg/forex.svg'
import Indices from 'assets/svg/indices.svg'
import Commodities from 'assets/svg/commodities.svg'
import Volatility from 'assets/svg/volatility.svg'

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

const Explore = () => (
    <Section id="explore">
        <GridContainer>
            <Header as="h2" align="center" lh="2" margin="0" weight="300">
                Explore multiple markets with Binary.com
            </Header>
            <Header as="h4" align="center" lh="1.2" margin="0">
                New to binary online trading? Learn to trade with us.
            </Header>
            <Header as="h4" align="center" lh="1.2" margin="0 0 6rem" weight="300">
                A range of underlying markets across the globe are available for you through binary options trading on our platform:
            </Header>
            <Grid
                columns="repeat(4, 1fr)"
                columngap="6.5rem"
                rowgap="5rem"
                mobilerowgap="5rem"
            >
                <Col justify="center">
                    <Icon>
                        <amp-img src={Forex} width="70" height="70" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25">
                        Forex
                    </Header>
                    <Text align="center">
                        Major and minor currency pairs, and Smart FX indices
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Indices} width="70" height="70" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25">
                        Indices
                    </Header>
                    <Text align="center">
                        Major stock indices direct from the OTC market worldwide
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Commodities} width="70" height="70" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25">
                        Commodities
                    </Header>
                    <Text align="center">
                        Precious metals -- gold, palladium, platinum, silver -- and oil
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Volatility} width="70" height="70" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25">
                        Volatility Indices
                    </Header>
                    <Text align="center">
                        A Binary.com exclusive -- synthetic indices that mimic real-world market volatility
                    </Text>
                </Col>
            </Grid>
        </GridContainer>
    </Section>
)
export default Explore