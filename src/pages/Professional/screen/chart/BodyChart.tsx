import {   SimpleGrid } from '@mantine/core';
import GenderCard from '../../../../component/Layout/professional/GenderCard';
import AnalyticsCard from '../../../../component/Layout/professional/AnalyticsCard';
import Review from '../../../../component/Layout/professional/Review';
import Attendant from '../../../../component/Layout/professional/Attendant';
const BodyChart = () => {
    return (
        <SimpleGrid cols={{base:1, xs:2}} my="70">
        <div >
        <Review/>
        </div>
       <div>       
       <Attendant/> 
       </div> 
       <div>
       <GenderCard/>   
       </div> 
       <div>
       <AnalyticsCard/>
       </div>        
      </SimpleGrid>
    )
}

export default BodyChart
