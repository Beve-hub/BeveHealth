import {Container, Group, Text, } from '@mantine/core';
import PatientData from './patientbio/PatientData';
import PatientTemp from './patientbio/PatientTemp';


const PatientBio = () => {
    return (
        <Container size="xl" my="md">
            <Text fz="24" fw="700">Log Book</Text>
        <PatientData/>
        <PatientTemp/>
        <Group>
            
        </Group>
        </Container>
    )
}

export default PatientBio
