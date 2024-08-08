import { Box, Group, Tabs,Text} from "@mantine/core"
import classes from "./style.module.css"
import LabReport from "./LabReport"
import DoctorsReport from './DoctorsReport';

const Record = () => {
    return (
        <Box style={{                       
            height: 'auto',
            background: '#F1F1F1',
            borderRadius: '1rem',
            padding: '2rem 2rem',
          }}>


           <Tabs defaultValue="lab" variant="unstyled" classNames={classes}>
            <Group>
            <Tabs.List>
               <Tabs.Tab value="lab"><Text fz="18">Lab Report</Text></Tabs.Tab>
               <Tabs.Tab value="doctor"><Text fz="18">Doctors Report</Text></Tabs.Tab>   
            </Tabs.List>
            </Group>
      

      <Tabs.Panel value="lab">
        <LabReport/>
        </Tabs.Panel>
      <Tabs.Panel value="doctor">
        <DoctorsReport/>
        </Tabs.Panel>
      
    </Tabs>
          </Box>
    )
}

export default Record
