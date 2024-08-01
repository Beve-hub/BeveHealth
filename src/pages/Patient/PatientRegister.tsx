import { Box,  Image, SimpleGrid, Text, Select} from '@mantine/core'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { login } from '../../redux/slices/authSlice';
import { useMediaQuery } from '@mantine/hooks'
import CustomInput from '../../utilites/reusable/CustomInput';
import { IoMdPerson, IoMdLock, } from 'react-icons/io';
import ActionButton from '../../utilites/reusable/ActionButton';
import { useNavigate } from 'react-router-dom';
import { MdEmail,  } from "react-icons/md";
import { BiSolidCalendar } from "react-icons/bi";
import { MdHomeWork } from "react-icons/md";
import { FaTreeCity } from "react-icons/fa6";
import { MdPhoneEnabled } from "react-icons/md";

const PatientRegister = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [loading, setLoading] = useState(false)
  
  const handleRegister = () => {
    setLoading(true)
    // Simulate login request
    setTimeout(() => {
      dispatch(login({role:'patient'}));
      setLoading(false)
      navigate('/patientDashboard')
    }, 3000);
  }
  const handleLogin = () => {
    navigate('/patientLogin')
  }
  return (
    <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
     
     
       <Box style={{backgroundColor: '#f5f5f5', padding: isSmallScreen ? '1rem' : '4rem',}}>
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
                 <SimpleGrid cols={isSmallScreen ? 1 : 2}>
                 <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Title</label>                    
                  <Select                   
                   comboboxProps={{ withinPortal: true }}
                   value={title}
                   data={['Mr', 'Mrs', 'Miss', 'Hon']}
                   onChange={(value) => setTitle(value || '')}
                   placeholder="Choose a title"
                   />
                  </Box>
                 <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Full Name</label>                    
                    <CustomInput 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    icon={IoMdPerson}
                    iconPosition="right"
                    placeholder="Email Address"
                    
                     />
                  </Box>
                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Email Address</label>                    
                    <CustomInput 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={MdEmail}
                    iconPosition="right"
                    placeholder="Email Address"
                    
                     />
                  </Box>
                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Phone Number</label>                    
                    <CustomInput 
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    icon={MdPhoneEnabled }
                    iconPosition="right"
                    placeholder="Email Address"
                    
                     />
                  </Box>
                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Date of Birth</label>                    
                    <CustomInput 
                    type='text'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    icon={BiSolidCalendar}
                    iconPosition="right"
                    placeholder="DD/MM/YY"
                    
                     />
                  </Box>
                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Gender</label>                    
                  <Select                   
                   comboboxProps={{ withinPortal: true }}
                   value={gender}
                   data={['Male', 'Female']}
                   onChange={(value) => setGender(value || '')}
                   placeholder="Choose a gender"
                   />
                  </Box>

                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Home Address</label>                    
                    <CustomInput 
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    icon={MdHomeWork}
                    iconPosition="right"
                    placeholder="Home Address"
                    
                     />
                  </Box>

                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>State</label>                    
                    <CustomInput 
                    type='text'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    icon={FaTreeCity }
                    iconPosition="right"
                    placeholder="state"                   
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
                   
                     />
                  </Box>
                  <Box >  
                  <label style={{display:'flex', justifyContent:'flex-start', fontWeight:'semiBold'}}>Confirm Password</label>                    
                    <CustomInput 
                    type='password'
                    value={conPassword}
                    onChange={(e) => setConPassword(e.target.value)}
                    icon={IoMdLock }
                    iconPosition="right"
                    placeholder="password"
                   
                     />
                  </Box>
                 </SimpleGrid>
                  </form>  
                 
        </Box>
        <Box style={{display:'flex', justifyContent:'center'}}>
        <Box style={{display:'grid', maxWidth:'13rem',  marginTop:20, alignItems:'center'}}>
                  <ActionButton 
                  onClick={handleRegister}
                   isLoading={loading}
                   variant="filled"
                  color="#008C73"
                  size="sm"
                  radius="sm"
                  fullWidth={false}
                   >
                    {loading ? 'Loading...' : 'Submit'}
                  </ActionButton>
                  <Text style={{fontSize:14,marginTop:10, textAlign:'center', }}>Already have an account? <span onClick={handleLogin} style={{fontWeight:'bold', color:'#008C73', cursor: 'pointer'}}>Login</span></Text> 
                  </Box>
        </Box>
        </Box>

    </div>
  )
}

export default PatientRegister
