import { Grid, SimpleGrid } from "@mantine/core"
import AdminBoard from "../../../../component/Layout/admin/AdminBoard"
import GenderCard from "../../../../component/Layout/professional/GenderCard"
import AnalyticsCard from "../../../../component/Layout/professional/AnalyticsCard"
import Revenue from './../../../../component/Layout/admin/Revenue';
import AdminTable from "../../../../component/Layout/admin/AdminTable";
import Members from "../../../../component/Layout/admin/Members";

const BodyAd = () => {
    return (
      <div>
        <div>
          <AdminBoard/>  
        </div>

        <SimpleGrid cols={{base:1, sm: 1, lg: 3 }} my="lg">
          <div>
            <Revenue/>
          </div>
          <div>
           <GenderCard/>
          </div>
          <div>
            <AnalyticsCard/>
          </div>
        </SimpleGrid>

        <Grid my="md" gutter="lg">
          <Grid.Col span={{base:12,md:4, lg:8}}>
          <AdminTable/>  
          </Grid.Col>
          <Grid.Col span={{base:12,md:2, lg:4}}>
          <Members/>  
          </Grid.Col>
        </Grid>
        </div>
    )
}

export default BodyAd
