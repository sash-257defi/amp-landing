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
                Por que você deve negociar opções binárias com a Binary.com?
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
                        Converta sua conta virtual para uma conta real e comece a negociar opções binárias a partir de 1 USD por operação 
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Deposit} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Deposite um mínimo de 5 USD na sua conta real para poder comprar o seu primeiro contrato com apenas 1 USD
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Getstarted} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Comece a negociar opções binarias com mais de 100 ativos nos principais mercados do mundo
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Highspeed} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Desfrute de negociações rápidas com uma plataforma que registra uma média de 20 transações por segundo
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Turnover} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Junte-se a um dos principais nomes do mundo da negociação de opções binárias com um volume de transações anual superior a 1 bilhão USD
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Award} width="70" height="70" />
                    </Icon>
                    <Text align="center">
                        Comece sua experiência de negociação com uma marca de opções binárias respeitada e com 18 anos de excelência premiada
                    </Text>
                </Col>
            </Grid>
        </GridContainer>
    </Section>
)
export default Why