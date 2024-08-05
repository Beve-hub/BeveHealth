import {Container, } from '@mantine/core';
import HeaderApp from './HeaderApp';
import BodyApp from './BodyApp';




const AppointmentPatient = () => {
    return (
        <Container size="xl" my="md">
        <HeaderApp/>
        <BodyApp/>
    </Container>
    )
}

export default AppointmentPatient
