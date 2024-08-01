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
import { BiSolidCalendar, BiWorld } from "react-icons/bi";
import { MdHomeWork } from "react-icons/md";
import { FaTreeCity } from "react-icons/fa6";
import { MdPhoneEnabled } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { ImLocation } from "react-icons/im";




const ProfessionalRegister = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [country, setCountry] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [loading, setLoading] = useState(false);


    const handleRegister = () => {
    setLoading(true)
    // Simulate login request
    setTimeout(() => {
      dispatch(login({role:'professional'}));
      setLoading(false)
      navigate('/professionalDashboard')
    }, 3000);
  }
  const handleLogin = () => {
    navigate('/professionalLogin')
  }
  return (
    <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center',  }}>
     
     
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
            marginBottom: '1rem',
            marginTop: '1rem',
            
          }}>
            <Box style={{display: 'grid', justifyContent: 'flex-start', alignItems:'flex-start'}}>
            <Text style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Staff Registration</Text> 
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
                    <CustomInput 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    icon={IoMdPerson}
                    iconPosition="right"
                    placeholder="full name"
                    label="Full Name"
                     />
                  </Box>
                  <Box >                                     
                    <CustomInput 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={MdEmail}
                    iconPosition="right"
                    placeholder="Email Address"
                    label="Email Address"
                     />
                  </Box>
                  <Box >                                    
                    <CustomInput 
                    type='number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    icon={MdPhoneEnabled }
                    iconPosition="right"
                    placeholder="Phone Number"
                    label="Phone Number"
                     />
                  </Box>
                  <Box >                                    
                    <CustomInput 
                    type='text'
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    icon={GiOfficeChair}
                    iconPosition="right"
                    placeholder="department"
                    label="Department"
                     />
                  </Box>
                  <Box >                                   
                    <CustomInput 
                    type='text'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    icon={BiSolidCalendar}
                    iconPosition="right"
                    placeholder="DD/MM/YY"
                    label="Date of Birth"
                     />
                  </Box>

                  <Box >                                       
                    <CustomInput 
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    icon={MdHomeWork}
                    iconPosition="right"
                    placeholder="Home Address"
                    label="Home Address"
                     />
                  </Box>

                  <Box >                                        
                    <CustomInput 
                    type='text'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    icon={ImLocation }
                    iconPosition="right"
                    placeholder="zip code"     
                    label="Zip Code"              
                     />
                  </Box>
                  <Box >                                        
                    <CustomInput 
                    type='text'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    icon={FaTreeCity }
                    iconPosition="right"
                    placeholder="state"     
                    label="State"              
                     />
                  </Box>
                  <Box >                                        
                    <CustomInput 
                    type='text'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    icon={BiWorld }
                    iconPosition="right"
                    placeholder="country"     
                    label="Country"              
                     />
                  </Box>
                  <Box >  
                                    
                    <CustomInput 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon={IoMdLock }
                    iconPosition="right"
                    placeholder="password"
                    label="Password"
                     />
                  </Box>
                  <Box >                                     
                    <CustomInput 
                    type='password'
                    value={conPassword}
                    onChange={(e) => setConPassword(e.target.value)}
                    icon={IoMdLock }
                    iconPosition="right"
                    placeholder="password"
                    label="Confirm Password"
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

export default ProfessionalRegister
