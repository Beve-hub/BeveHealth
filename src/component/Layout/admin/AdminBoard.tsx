import { Box, Group, SimpleGrid, Text } from "@mantine/core"
import { FaWheelchair, FaCalendarAlt,FaUserTie } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
const AdminBoard = () => {
 
    return (
      <SimpleGrid cols={{base:1, xs:4}} my="lg">
       <div >
            <Box style={{
              height: '10rem',
              width:'16rem',
              background: '#4ECBB440',
              borderRadius: '1rem',    
              padding: '1rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaWheelchair size={24}/>
              </Group>

              <Text fz="18px" fw="500" color="#12121260" mt="20">Total Patients</Text>
                <Text fz="22px" fw="500">890</Text>
            </Box>
          </div>

          <div >
            <Box style={{
              height: '10rem',
              width:'16rem',
              background: '#00AACF40',
              borderRadius: '1rem',    
              padding: '1rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaUserDoctor size={24}/>
              </Group>

              <Text fz="18px" fw="500" color="#12121260" mt="20">Total Doctors</Text>
                <Text fz="22px" fw="500">30</Text>
            </Box>
          </div>
          <div >
            <Box style={{
              height: '10rem',
              width:'16rem',
              background: '#BA68C840',
              borderRadius: '1rem',    
              padding: '1rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaCalendarAlt size={24}/>
              </Group>

              <Text fz="18px" fw="500" color="#12121260" mt="20">Total Appointment</Text>
                <Text fz="22px" fw="500">890</Text>
            </Box>
          </div>
          <div >
            <Box style={{
             height: '10rem',
             width:'16rem',
              background: '#CB4E4E40',
              borderRadius: '1rem',    
              padding: '1rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaUserTie size={24}/>
              </Group>

              <Text fz="18px" fw="500" color="#12121260" mt="20">Total Employers</Text>
                <Text fz="22px" fw="500">60</Text>
            </Box>
          </div>
          
       </SimpleGrid>
    )
}

export default AdminBoard
