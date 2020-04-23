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
                Qual plataforma da Binary.com você prefere?
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
                        Nossa principal plataforma online é ideal para começar a negociar opções binárias.
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
                        Nossa ferramenta avançada e intuitiva permite executar suas estratégias de negociação online, mesmo enquanto você dorme.
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
                        Negocie forex e CFDs na nossa plataforma multi-ativos.
                    </Text>
                </Col>
            </Grid>
        </GridContainer>
    </Section>
)
export default Platforms