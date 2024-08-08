import {Container, Group, Text, } from '@mantine/core';
import PatientData from './patientbio/PatientData';
import PatientTemp from './patientbio/PatientTemp';
import Record from './patientbio/Record';


const PatientBio = () => {
    return (
        <Container size="xl" my="md">
            <Text fz="24" fw="700" my="40">Log Book</Text>
        
        <PatientData/>
        <PatientTemp/>
        <Record/>
        </Container>
    )
}

export default PatientBio
