import styled from 'styled-components'
import device from 'themes/device'

const Grid = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: ${props => props.columns || 'auto auto'};
    column-gap: ${props => props.columngap || '0'};
    row-gap: ${props => props.rowgap || '0'};
    align-items: ${props => props.align || 'start'};
    justify-items: ${props => props.justify || 'start'};
    background-color: ${props => props.bgcolor || 'none'};

    @media ${device.tablet} {
        grid-template-columns: ${props => props.mobilecolumns || '1fr'};
        row-gap: ${props => props.mobilerowgap || '1rem'};
    }
`

export const Column = styled.div`
    padding: ${props => props.padding || '0'};
    align-self: ${props => props.align || 'stretch'};
    justify-self: ${props => props.justify || 'stretch'};
    background-color: ${props => props.bgcolor || 'none'};
    height: ${props => props.height || 'auto'};
`

export default Grid