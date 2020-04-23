import React from 'react'
import styled from 'styled-components'
import GridContainer from 'components/container'
import { Column } from 'components/grid'
import { Header } from 'components/typography'
import device from 'themes/device'

const Section = styled.div`
    padding: 8rem 0 4rem;
    width: 100%;
    background: var(--color-white);
`
const PaymentsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    max-width: 1000px;
    margin: 0 auto;
    @media ${device.tablet} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${device.tabletS} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.mobileL} {
        grid-template-columns: 1fr;
    }
`
const Col = styled(Column)`
    padding: 0;
    text-align: center;
`

const Payments = () => (
    <Section id="payments">
        <GridContainer>
            <Header as="h2" align="center" lh="2" margin="0" weight="300">
                Métodos de pagamento
            </Header>
            <Header as="h4" align="center" lh="1.2" margin="0 0 6rem" weight="300">
                Suportamos centenas de opções de depósito e retirada, incluindo Bitcoin.
            </Header>
            <PaymentsGrid>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=visa" target="_blank" rel="noopener noreferrer" title="visa" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/visa.svg" width="100" height="100" alt="Visa"></amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=mastercard" target="_blank" rel="noopener noreferrer" title="master" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/mastercard.svg" width="100" height="100" alt="Master">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=visa" target="_blank" rel="noopener noreferrer" title="maestro" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/maestro.svg" width="100" height="100" alt="Maestro">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=bank-transfer" target="_blank" rel="noopener noreferrer" title="bank transfer" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/bank_transfer.svg" width="100" height="100" alt="Bank transfer">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=internet-bank-transfer" target="_blank" rel="noopener noreferrer" title="internet bank transfer" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/internet_bank_transfer.svg" width="100" height="100" alt="Internet bank transfer">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=neteller" target="_blank" rel="noopener noreferrer" title="neteller" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/neteller.svg" width="100" height="100" alt="Neteller">
                        </amp-img>
                    </a>
                </Col>

                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=skrill" target="_blank" rel="noopener noreferrer" title="skrill" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/skrill.svg" width="100" height="100" alt="Skrill">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=webmoney" target="_blank" rel="noopener noreferrer" title="web money" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/webmoney.svg" width="100" height="100" alt="Web money">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=paysafe" target="_blank" rel="noopener noreferrer" title="paysafe" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/paysafe.svg" width="100" height="100" alt="Paysafe">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=jeton" target="_blank" rel="noopener noreferrer" title="jeton" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/jeton.svg" width="100" height="100" alt="Jeton">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=sticpay" target="_blank" rel="noopener noreferrer" title="sticpay" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/sticpay.svg" width="100" height="100" alt="Sticpay">
                        </amp-img>
                    </a>
                </Col>
                <Col justify="center">
                    <a href="https://www.binary.com/en/cashier/payment_methods.html?anchor=airtm" target="_blank" rel="noopener noreferrer" title="airtm" >
                        <amp-img src="https://www.binary.com/images/pages/home/payment/airtm.svg" width="100" height="100" alt="Airtm">
                        </amp-img>
                    </a>
                </Col>
            </PaymentsGrid>
        </GridContainer>
    </Section>
)
export default Payments