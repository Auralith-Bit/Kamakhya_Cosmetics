import React from 'react'
import HeroBanner from '../components/Distributor/HeroBanner'
import { Link } from 'react-router'
import WhyPartner from '../components/Distributor/WhyPartner'
import Application from '../components/Distributor/Application'

const Distributor = () => {
    return (
        <Link to="/distributor">

            <HeroBanner />
            <WhyPartner />
            <Application />
            
        </Link>
    )
}

export default Distributor