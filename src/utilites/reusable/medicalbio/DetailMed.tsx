import { useLocation, useNavigate } from "react-router-dom"
import {Box,  Group,  Image, SimpleGrid, Text } from "@mantine/core"
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const DetailMed = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {item} = location.state || {};

    const handleClick = () => {
        navigate('/adminDashboard')
    }

    if(!item){
        console.log(item)
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
            
          <SimpleGrid cols={{base:1, xs:5}}
          spacing="xl"
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
                      <Text fz="24" fw="700" >{item.name}</Text>
                      <Text my="10" fz="24">{item.occupation}</Text>                      
                  </div>
                  
                  <div style={{
                   display:'grid',
                   justifyContent:'flex-start', 
                   alignItems: 'flex-start'
                  }}>
     
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
            </SimpleGrid>
             
          </Box>
        </div>  
    )
}

export default DetailMed
