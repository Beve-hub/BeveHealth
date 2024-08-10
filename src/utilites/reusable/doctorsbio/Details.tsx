import { useLocation, useNavigate } from "react-router-dom"
import {Box,  Group,  Image, SimpleGrid, Text } from "@mantine/core"
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const Details = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const {item} = location.state || {};

    if(!item){
        console.log(item)
    }
    
    const handleClick = () => {
      navigate('/adminDashboard')
  }

    return (
        <div>
          <Group display="flex" onClick={handleClick} style={{alignContent:'center', cursor:'pointer'}} >
            <MdOutlineKeyboardArrowLeft size={30} />
            <Text fw="500" fz="30" >Details</Text>
            </Group>

            
        <Box my="40" style={{                       
            height: 'auto',
            background: '#F1F1F1',
            borderRadius: '1rem',
            padding: '1rem 2rem',
            display:'flex'
          }}>
            
          <SimpleGrid cols={{base:1, sm:1, lg:5}}
          spacing="sm"
            style={{
                alignItems: 'center',                  
                          
            }}>
                  <div style={{ border: '1px solid #12121250', padding:10, borderRadius:10}}>
                  <Image
                    src={item.image}
                    alt=""  style={{width:'10rem'}}  />
                  </div> 

                  <div style={{
                   display:'grid',
                   justifyContent:'flex-start', 
                   alignItems: 'flex-start'
                  }}>
                      <Text fz="24" fw="700" mb="5">{item.name}</Text>
                      <Text my="10" fz="18">{item.occupation}</Text>
                      <Text  style={{ display:'flex',justifyContent:'center',alignItems:'center', gap:10 }} mb="5">
                        <span style={{backgroundColor:'#008C7330', padding:5, borderRadius:5, display:'flex',justifyContent:'center', width:'2rem'  }}>
                            <IoMdCall size={18}/>
                        </span>+1 0987657689</Text>

                        <Text  style={{ display:'flex',justifyContent:'center',alignItems:'center', gap:10 }} mb="5" ml='10'>
                        <span style={{backgroundColor:'#008C7330', padding:5, borderRadius:5, display:'flex',justifyContent:'center', width:'2rem'  }}>
                            <TfiEmail size={18}/>
                        </span>wales@gmail.com</Text>


                        <Text style={{ display:'flex',justifyContent:'center',alignItems:'center', gap:10 }} mr="20">
                        <span style={{backgroundColor:'#008C7330', padding:5, borderRadius:5, display:'flex',justifyContent:'center', width:'2rem'  }}>
                            <SlLocationPin size={18}/>
                        </span>Dope avenue</Text>
                  </div>
                  
                  <div style={{
                    borderLeft:'1px solid #121212', paddingLeft:70
                  }}>
                  <Text mb="5" display="grid" fz='18'>Staff ID:  <span style={{fontWeight:500}}>BH12345</span></Text>
                  <Text mb="5" display="grid" fz='18'>Date of Birth:  <span style={{fontWeight:500}}>19/03/1992</span></Text>
                  <Text mb="5" display="grid" fz='18'>Gender:  <span style={{fontWeight:500}}>Male</span></Text>
                  </div>

                  <div style={{
                    borderLeft:'1px solid #121212', paddingLeft:70
                  }}>
                  <Text mb="5" display="grid" fz='18'>Genotype:  <span style={{fontWeight:500}}>AA</span></Text>
                  <Text mb="5" display="grid" fz='18'>Blood Group:  <span style={{fontWeight:500}}>O+</span></Text>
                  <Text mb="5" display="grid" fz='18'>Start Date:  <span style={{fontWeight:500}}>01/01/2021</span></Text>
                  </div>

            </SimpleGrid>
             
          </Box>
        </div>  
    )
}

export default Details
