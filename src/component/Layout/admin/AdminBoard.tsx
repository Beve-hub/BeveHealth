import { Box, Group, SimpleGrid, Text } from "@mantine/core"
import { FaWheelchair, FaCalendarAlt,FaUserTie } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
const AdminBoard = () => {
 
    return (
      <SimpleGrid cols={{base:1, xs:4}} my="lg">
       <div >
            <Box style={{
              height: '12rem',
              width:'18rem',
              background: '#4ECBB440',
              borderRadius: '1rem',    
              padding: '2rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaWheelchair size={26}/>
              </Group>

              <Text fz="22px" fw="500" color="#12121260" mt="20">Total Patients</Text>
                <Text fz="24px" fw="500">890</Text>
            </Box>
          </div>

          <div >
            <Box style={{
              height: '12rem',
              width:'18rem',
              background: '#00AACF40',
              borderRadius: '1rem',    
              padding: '2rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaUserDoctor size={26}/>
              </Group>

              <Text fz="22px" fw="500" color="#12121260" mt="20">Total Doctors</Text>
                <Text fz="24px" fw="500">30</Text>
            </Box>
          </div>
          <div >
            <Box style={{
              height: '12rem',
              width:'18rem',
              background: '#BA68C840',
              borderRadius: '1rem',    
              padding: '2rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaCalendarAlt size={26}/>
              </Group>

              <Text fz="22px" fw="500" color="#12121260" mt="20">Total Appointment</Text>
                <Text fz="24px" fw="500">890</Text>
            </Box>
          </div>
          <div >
            <Box style={{
              height: '12rem',
              width:'18rem',
              background: '#CB4E4E40',
              borderRadius: '1rem',    
              padding: '2rem 2rem' ,          
            }}>
              <Group justify="flex-start" style={{
                backgroundColor:'#ffff',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <FaUserTie size={26}/>
              </Group>

              <Text fz="22px" fw="500" color="#12121260" mt="20">Total Employers</Text>
                <Text fz="24px" fw="500">60</Text>
            </Box>
          </div>
          
       </SimpleGrid>
    )
}

export default AdminBoard
