import { SimpleGrid, Image, Flex, Text, Box, } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import CustomButtonFilled from "../utilites/reusable/CustomButtonFilled";
import { useMediaQuery } from '@mantine/hooks';
import IMG from '../assets/auth_img2.png'
import Logo from '../assets/logo.svg'


const Onboarding = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const handlePatientClick = () => {
    navigate('/patientLogin');
  };

  const handleStaffClick = () => {
    navigate('/professionalLogin');
  };

  return (
    <SimpleGrid cols={isSmallScreen ? 1 :  2} spacing="md" style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', }}>
      <Flex justify='flex-start'  align='center' style={{ height: '100%',width:'100%' }}>
         {!isSmallScreen && <Image 
            src={IMG}
            alt="terminal"
            style={{ maxWidth: '100%', height: '60rem', }} 
          />}
      </Flex>
      <Box
       style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',                    
        height: '100%',
        textAlign: isSmallScreen ? 'center' : 'left',
        padding: isSmallScreen ? '4rem' : '5rem',
    }}>
      <Box style={{backgroundColor: '#f5f5f5', padding: isSmallScreen ? '1rem' : '5rem',  }}>
      <Box style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Image              
            src={Logo}
            alt="beve_Health"
            style={{ width: '15rem' }}                
          />    
          <Box style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem',
            marginTop: '2rem'
          }}>
          <Box style={{display: 'grid', justifyContent: 'flex-start', alignItems:'flex-start'}}>
              <Text style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Welcome,back</Text> 
              <Text style={{ fontWeight: 'normal', fontSize: '0.8rem' , color: 'gray'}}>Choose your role to get started. </Text>
              </Box>
            
          </Box>
                    
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '15rem' }}>
          <CustomButtonFilled
            label="Patient"
            onClick={handlePatientClick}
            variant="filled"
            color="#008C73"
            size="md"
            radius="xl"
            role="forward"
            style={{}}
          />
          <CustomButtonFilled
            label="Staff"
            onClick={handleStaffClick}
            variant="filled"
            color="#008C73"
            size="md"
            radius="xl"
            role="forward"
          />          
        </Box>
      </Box>
        
      </Box>
    </SimpleGrid>
  );
};

export default Onboarding;
