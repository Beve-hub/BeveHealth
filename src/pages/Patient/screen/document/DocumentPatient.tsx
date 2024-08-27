import {Container, } from '@mantine/core';
import HeaderDoc from './HeaderDoc';
import BodyDoc from './BodyDoc';




const DocumentPatient = () => {
    return (
        <Container size="lg" my="md">
        <HeaderDoc/>
        <BodyDoc/>
    </Container>
    )
}

export default DocumentPatient
