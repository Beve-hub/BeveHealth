import { Box, Group, Tabs,Text} from "@mantine/core"
import classes from "./Style.module.css"
import Doctors from "../../../../component/Layout/admin/Doctors"
import NonMedical from "../../../../component/Layout/admin/NonMedical"


const BodyStaff = () => {
    return (
        <Box mt="80"> <Tabs defaultValue="lab" variant="unstyled" classNames={classes}>
            <Group>
            <Tabs.List>
               <Tabs.Tab value="lab"><Text fz="18">Doctors</Text></Tabs.Tab>
               <Tabs.Tab value="doctor"><Text fz="18">Medical Staff</Text></Tabs.Tab>   
            </Tabs.List>
            </Group>
      

        <Tabs.Panel value="lab">
        <Doctors/>
        </Tabs.Panel>
        <Tabs.Panel value="doctor">
        <NonMedical/>
        </Tabs.Panel>
      
    </Tabs>
          </Box>
    )
}

export default BodyStaff
