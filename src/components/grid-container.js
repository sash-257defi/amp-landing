import styled from 'styled-components'

const GridContainer = styled.div`
    width: 100%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: auto;
    margin-left: auto;
`

export const SectionContainer = styled.section`
    width: 100%;
    padding: ${props => props.padding || '8rem 0'};
`

export default GridContainer