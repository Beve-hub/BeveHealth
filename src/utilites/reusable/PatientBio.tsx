import {Container, Group, Text, } from '@mantine/core';
import PatientData from './patientbio/PatientData';
import PatientTemp from './patientbio/PatientTemp';
import Record from './patientbio/Record';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const PatientBio = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/adminDashboard')
    }
    return (
        <Container size="xl" mt="lg">
            <Group display="flex" onClick={handleClick} style={{alignContent:'center', cursor:'pointer'}} >
            <MdOutlineKeyboardArrowLeft size={30} />
            <Text fz="24" fw="700" my="40">Log Book</Text>
            </Group>
            
        
        <PatientData/>
        <PatientTemp/>
        <Record/>
        </Container>
    )
}

export default PatientBio
