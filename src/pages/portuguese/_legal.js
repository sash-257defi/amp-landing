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
                    A Binary.com é uma plataforma de negociações online que ajuda seus clientes a negociar nos mercados financeiros por meio de opções binárias e CFDs. A negociação de opções binárias e CFDs em índices sintéticos é classificada como uma atividade de jogo. Lembre-se de que o jogo pode ser viciante –
                        <LinkText
                            href="https://www.binary.com/pt/responsible-trading.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            weight="bold"
                            hover="white"
                            size="1.2rem"
                        >
                            negocie com responsabilidade
                        </LinkText>
                        .
                </Text>
                <Text size="1.2rem" weight="300">
                    Saiba mais sobre negociação responsável. Alguns produtos não estão disponíveis em todos os países. Os serviços deste site não são disponibilizados em alguns países, como os EUA, Canadá, Hong Kong ou a pessoas menores de 18 anos.
                </Text>
                <Text size="1.2rem" weight="300">
                    A negociação de opções binárias pode não ser adequada para todos; portanto, certifique-se de que entende completamente os riscos envolvidos. Suas perdas podem exceder seu depósito inicial e você não detém nem possui direitos sobre o ativo subjacente.
                </Text>
                <Text size="1.2rem" weight="300">
                    Os CFDs são instrumentos complexos e de alto risco devido à possibilidade de alavancagem. 78,6% de investidores não profissionais perdem dinheiro ao negociar CFDs. Você deve considerar se entende o funcionamento dos CFDs e se pode correr o risco de perder seu dinheiro.
                </Text>
            </Container>
        </FooterWrapper>
    </>
)

export default Legal