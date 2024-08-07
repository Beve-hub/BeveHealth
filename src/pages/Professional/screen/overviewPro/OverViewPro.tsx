import {Container, } from '@mantine/core';
import BodyPro from './BodyPro';
import HeaderPro from './HeaderPro';


const OverViewPro = () => {
    return (
        <Container size="xl" my="md">
        <HeaderPro/>
        <BodyPro/>
        </Container>
    )
}

export default OverViewPro
