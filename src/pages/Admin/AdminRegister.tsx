import { Box, Flex, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { useMediaQuery } from '@mantine/hooks'


interface Props {
    
}

const AdminRegister: React.FC<Props> = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    return (
        <SimpleGrid cols={isSmallScreen ? 1 : 2} spacing="md" style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', }}>
        <Flex justify='center' align='center' style={{ height: '100%', }}>
         {!isSmallScreen && <Image 
            src='/src/assets/auth_img2.png'
            alt="terminal"
            style={{ maxWidth: '100%', height: 'auto', }} 
          />}
        </Flex>
        <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    textAlign: isSmallScreen ? 'center' : 'left',
                    padding: isSmallScreen ? '4rem' : '0'
                }}
>
          <Box style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Image              
              src='/src/assets/logo.svg'
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
            <Text style={{ fontWeight: 'bold', fontSize: '2rem' }}>Welcome</Text> 
            <Text style={{ fontWeight: 'normal', fontSize: '1.2rem' , color: 'gray'}}>Please choose your role</Text>
            </Box>
                      
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '15rem' }}>
          
          </Box>
        </Box>
      </SimpleGrid>
    )
}

export default AdminRegister
