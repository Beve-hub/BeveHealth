import {Container } from '@mantine/core';
import BodyDoc from './BodyDoc';
import HeaderDoc from './HeaderDoc';

const DocumentNur = () => {
    return (
        <Container size="lg" my="md">
            <HeaderDoc/>
            <BodyDoc/>

        </Container>
    )
}

export default DocumentNur
