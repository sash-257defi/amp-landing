import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Hero from './portuguese/_hero'
import Explore from './portuguese/_explore'
import Platforms from './portuguese/_platforms'
import Why from './portuguese/_why-binary'
import Payments from './portuguese/_payments'
import Legal from './portuguese/_legal'

const Pt = () => (
    <Layout>
        <SEO
            title="Trade in the world’s financial markets with binary options"
            description="Trade binary options with us and get access to over 100 financial instruments and assets across multiple markets worldwide including Forex, indices, and commodities. Create your Binary.com account now!"
        />
        <Hero />
        <Explore />
        <Platforms />
        <Why />
        <Payments />
        <Legal />
    </Layout>
)

export default Pt