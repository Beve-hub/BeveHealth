import { Avatar, Box, SimpleGrid, Text } from "@mantine/core"


const PatientData = () => {
    return (
        <Box my="40" style={{                       
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '1rem',
          padding: '1rem 2rem',
        }}>
            <SimpleGrid cols={{base:1, xs:5}} 
            style={{
                alignItems: 'center',
            }}>
                <div>
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                  size={80}        radius={120}        mx="auto"      />
                </div>
                <div>
                    <Text fz="18" fw="700" mb="sm">Victor Okeke</Text>
                    <Text>File ID: BH23456</Text>
                </div>
                <div>
                    <Text mb="sm">Height: 1.6m</Text>
                    <Text>Weight: 157kg</Text>
                </div>
                <div>
                    <Text mb="sm">Blood Group: AA</Text>
                    <Text>GenoType: <span style={{fontSize:'20px'}}>o+</span></Text>
                </div>
                <div>
                    <Text mb="sm">Gender: Male</Text>
                    <Text>Age: 44</Text>
                </div>
            </SimpleGrid>
        </Box>
    )
}

export default PatientData
