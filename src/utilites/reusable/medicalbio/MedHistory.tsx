import { Box, Group, SimpleGrid, Text } from "@mantine/core"
import { TfiEmail } from "react-icons/tfi";
import { BsDot } from "react-icons/bs";
const MedHistory = () => {
    return (
        <div>
       
    <Box my="40" style={{                       
        height: 'auto',
        background: '#F1F1F1',
        borderRadius: '1rem',
        padding: '1rem 2rem',
        display:'flex'
      }}>
        
      <SimpleGrid cols={{base:1, xs:2}}
      spacing="xl"
        style={{
            display:'grid',
            justifyContent: 'center',         
            alignItems: 'center', 
            width:'100%'              
        }}>  
        <Box>  
        <Text mb="15" fw="600" fz='24'>Personal Information</Text>
              <SimpleGrid cols={{base:1, xs:2}}
      spacing="xl"
        style={{
            display:'grid',
            justifyContent: 'center',         
            alignItems: 'center', 
            width:'100%'              
        }}>
              
              <Text mb="5" display="grid" fz='18'>Staff ID:  <span style={{fontWeight:500}}>BH12345</span></Text>
                  <Text mb="5" display="grid" fz='18'>Date of Birth:  <span style={{fontWeight:500}}>19/03/1992</span></Text>
                  <Text mb="5" display="grid" fz='18'>Gender:  <span style={{fontWeight:500}}>Male</span></Text>
                  <Text mb="5" display="grid" fz='18'>Genotype:  <span style={{fontWeight:500}}>AA</span></Text>
              <Text mb="5" display="grid" fz='18'>Blood Group:  <span style={{fontWeight:500}}>O+</span></Text>
              <Text mb="5" display="grid" fz='18'>Start Date:  <span style={{fontWeight:500}}>01/01/2021</span></Text>
              </SimpleGrid>
              </Box> 
              <div style={{
                borderLeft:'1px solid #121212', paddingLeft:70
              }}>

              <Group display="grid">
              <Text mb="5" display="grid" fz='18' fw="500">Eduction</Text>
              <Text mb="5" display="flex" fz='18' style={{alignItem:'center'}}>
                 <span style={{fontWeight:500}}><BsDot /></span>
                 bachelor  degree in nursing and health care  from the university of compton
              </Text>
              <Text mb="5" display="flex" fz='18' style={{alignItem:'center'}}>
                 <span style={{fontWeight:500}}><BsDot /></span>
                 Medical  degree in nursing and health care  from the university of compton
              </Text>
              </Group>

              <Group display="grid" my="20">
              <Text mb="5" display="grid" fz='18' fw="500">Experience</Text>
              <Text mb="5" display="flex" fz='18' style={{alignItem:'center'}}>
                 <span style={{fontWeight:500}}><BsDot /></span>
                 worked 5 years as a junior staff at princton hospital at las vagas.
              </Text>
              
              </Group> 
                       
              
              </div>

        </SimpleGrid>
         
      </Box>
    </div> 
    )

}

export default MedHistory
