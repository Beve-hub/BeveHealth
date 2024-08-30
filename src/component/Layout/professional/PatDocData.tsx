import PatientData from '@/utilites/reusable/patientbio/PatientData';
import PatientTemp from '@/utilites/reusable/patientbio/PatientTemp';
import Record from '@/utilites/reusable/patientbio/Record';
import {Container, Group, Text, } from '@mantine/core';

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const PatDocData = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/professionalDashboard')
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

export default PatDocData
