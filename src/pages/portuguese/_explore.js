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
                Explore vários mercados com a Binary.com
            </Header>
            <Header as="h4" align="center" lh="1.2" margin="0">
                Sem experiencia em negociações binárias? Aprenda a negociar conosco.
            </Header>
            <Header as="h4" align="center" lh="1.2" margin="0 0 6rem" weight="300">
                Uma grande variedade de mercados subjacentes mundiais através da negociação de opções binárias na nossa plataforma:
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
                        Pares de moedas principais, secundários e índices FX inteligentes
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Indices} width="70" height="70" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25">
                        Índices
                    </Header>
                    <Text align="center">
                        Principais índices de ações dos mercados OTC mundiais
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Commodities} width="70" height="70" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25">
                        Matérias-primas
                    </Header>
                    <Text align="center">
                        Metais preciosos (ouro, paládio, platina, prata) e petróleo 
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <amp-img src={Volatility} width="70" height="70" />
                    </Icon>
                    <Header as="h4" align="center" lh="1.25">
                        Índices de volatilidade
                    </Header>
                    <Text align="center">
                        Exclusivos da Binary.com -- índices sintéticos que imitam a volatilidade de mercados reais
                    </Text>
                </Col>
            </Grid>
        </GridContainer>
    </Section>
)
export default Explore