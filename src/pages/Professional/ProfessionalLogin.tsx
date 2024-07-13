import { Box, Checkbox, Flex, Image, SimpleGrid, Text, } from '@mantine/core'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { login } from '../../redux/slices/authSlice';
import { useMediaQuery } from '@mantine/hooks'
import CustomInput from '../../utilites/reusable/CustomInput';
import { IoMdPerson, IoMdLock } from 'react-icons/io';
import ActionButton from '../../utilites/reusable/ActionButton';
import { useNavigate } from 'react-router-dom';
import { RiShieldUserFill } from "react-icons/ri";



const ProfessionalLogin = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  
  const handleLogin = () => {
    setLoading(true)
    // Simulate login request
    setTimeout(() => {
      dispatch(login({role:'patient'}));
      setLoading(false)
      navigate('/patientDashboard')
    }, 3000);
  }

  const handleForget = () => {
    navigate('/forgottenPassword')
  }
  const handleReg = () => {
    navigate('/patientRegister')
  }
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
                  padding: isSmallScreen ? '4rem' : '3rem',
                  
              }}
>

       <Box style={{backgroundColor: '#f5f5f5', padding: isSmallScreen ? '1rem' : '3rem',}}>
       <Box style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
        <RiShieldUserFill size={30}/>
        <Text>Login as Admin</Text>
        </Box>
       
        <Box style={{ textAlign: 'center', marginBottom: '2rem',  }}>
          <Image              
            src='/src/assets/logo.svg'
            alt="beve_Health"
            style={{ width: '12rem' }}                
          />    
          <Box style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem',
            marginTop: '2rem',
            
          }}>
            <Box style={{display: 'grid', justifyContent: 'flex-start', alignItems:'flex-start'}}>
            <Text style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Welcome,back</Text> 
            <Text style={{ fontWeight: 'normal', fontSize: '0.8rem' , color: 'gray'}}>Pls fill up the form to get started . </Text>
            </Box>
          
          </Box>
                 <form style={{display:'grid', gap:20}}>
                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Email Address</label>                    
                    <CustomInput 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={IoMdPerson}
                    iconPosition="right"
                    placeholder="Email Address"
                    style={{ width: isSmallScreen ? '17rem' : '18rem' }}
                     />
                  </Box>

                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Password</label>                    
                    <CustomInput 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon={IoMdLock }
                    iconPosition="right"
                    placeholder="password"
                    style={{ width: isSmallScreen ? '100%' : '18rem' }}
                     />
                  </Box>
                  <Box style={{display: 'flex', justifyContent:'space-between'}}>
                  <Checkbox
                 defaultChecked
                 label="Remember me"
                     />
                     <Text onClick={handleForget} style={{fontSize: '14px', color:'blue', cursor: 'pointer'}}> Forgotten password?</Text>
                  </Box>
                  <ActionButton 
                  onClick={handleLogin}
                   isLoading={loading}
                   variant="filled"
                  color="#008C73"
                  size="sm"
                  radius="sm"
                  fullWidth={true}
                   >
                    {loading ? 'Loading...' : 'Login'}
                  </ActionButton>
                  <Text style={{fontSize:15}}>Don't have an account? <span onClick={handleReg} style={{fontWeight:'bold', color:'#008C73', cursor: 'pointer'}}>Register</span></Text>
                  </form>   
        </Box>
        </Box>
      </Box>
    </SimpleGrid>
  )
}

export default ProfessionalLogin
