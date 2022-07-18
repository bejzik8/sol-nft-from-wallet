import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import Heading from '../../components/Heading'
import Text from '../../components/Text'

const AnimatedTitle = ({
    key,
    heading,
    description
}) => <AnimatedDiv
        key={key}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: .3 }}
    >
        <Heading>{heading}</Heading>
        <Text>{description}</Text>
    </AnimatedDiv>

const TitleContainer = () => {
    const location = useLocation()

    switch (location.pathname) {
        case '/':
            return <AnimatedTitle
                key='/'
                heading='Welcome'
                description='Greetings Solana Hacker House Paris!'
            />
        case '/example':
            return <AnimatedTitle
                key='/example'
                heading='DegenerAPE Yourself'
                description='Link all your social media with your favorite NFT'
            />
        case '/qr':
            return <AnimatedTitle
                key='/qr'
                heading='QR NFT'
                description='Show the people who are you'
            />
        case '/about':
            return <AnimatedTitle
                key='/about'
                heading='Who are we?'
                description='Get to know us a bit better'
            />
    }
}

const AnimatedDiv = styled(motion.div)`
    width: 70%;
    height: 104px;
    padding: 0 15% 50px;
`

export default TitleContainer
