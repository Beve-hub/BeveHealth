import PatientBoard from '../../../../component/Layout/patient/PatientBoard';
import Document from '../../../../utilites/reusable/Document';
import Specialist from '../../../../component/Layout/patient/Specialist';
import PatientTable from '../../../../component/Layout/patient/PatientTable';
import CustomCalendar from '../../../../utilites/reusable/CustomCalendar';
import CustomNotification from '../../../../utilites/reusable/CustomNotification';
import {  Grid , SimpleGrid } from '@mantine/core';
import PatientProfile from '../../../../component/Layout/patient/PatientProfile';





const Body = () => {  

    return (
      <div  style={{ marginTop:100}}>
          <Grid my="md" gutter="lg">
          <Grid.Col span={{base:12, xs:8}}>
          <PatientBoard/>
          </Grid.Col>
         <Grid.Col span={{base:12, xs:4}}>        
         <CustomNotification/> 
         </Grid.Col>    
         </Grid>    
       
   
        <SimpleGrid cols={{base:1, xs:3}} my="lg">
          <div >
          <Document/>
          </div>

         <div>
         <Specialist/>
         </div> 
         <div>
         <CustomCalendar/> 
         
         </div>        
        </SimpleGrid>

        <Grid my="md" gutter="lg">
          <Grid.Col span={{base:12, xs:8}}>
          <PatientTable/>
          </Grid.Col>
         <Grid.Col span={{base:12, xs:4}}>        
         <PatientProfile/> 
         </Grid.Col>    
         </Grid> 
      
       
      
    </div>


    )
}

export default Body
