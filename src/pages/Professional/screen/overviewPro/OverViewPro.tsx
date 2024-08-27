import {Container, } from '@mantine/core';
import BodyPro from './BodyPro';
import HeaderPro from './HeaderPro';


const OverViewPro = () => {
    return (
        <Container size="lg" my="md">
        <HeaderPro/>
        <BodyPro/>
        </Container>
    )
}

export default OverViewPro
