import {Container, } from '@mantine/core';
import Header from './Header';
import Body from './Body';




const OverviewPatient = () => {
  return (
    <Container size="lg" my="md">
        <Header/>
        <Body/>
    </Container>
  );
}

export default OverviewPatient;
