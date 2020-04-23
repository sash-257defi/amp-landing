import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    width: 100%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: auto;
    margin-left: auto;
    
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.desktop} {
        max-width: 1200px;
    }
    @media ${device.laptopL} {
        max-width: 960px;
    }
    @media ${device.laptop} {
        max-width: 720px;
    }
    @media ${device.tabletS} {
        max-width: 100%;
    }
`

export default Container
