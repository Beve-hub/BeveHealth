import CustomCalendar from "../../../../utilites/reusable/CustomCalendar";
import CustomNotification from "../../../../utilites/reusable/CustomNotification";
import { Grid, SimpleGrid } from "@mantine/core";
import ProfessionalBoard from "../../../../component/Layout/professional/ProfessionalBoard";
import GenderCard from "../../../../utilites/reusable/GenderCard";
import AnalyticsCard from "../../../../component/Layout/professional/AnalyticsCard";
import Document from "../../../../utilites/reusable/Document";
import ProTable from "../../../../component/Layout/professional/ProTable";

const BodyPro = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <Grid my="md" gutter="lg">
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <ProfessionalBoard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <CustomNotification />
        </Grid.Col>
      </Grid>

      <SimpleGrid cols={{ base: 1, xs: 3 }} my="lg">
        <div>
          <Document />
        </div>

        <div>
          <GenderCard />
        </div>
        <div>
          <CustomCalendar />
        </div>
      </SimpleGrid>

      <Grid my="md" gutter="lg">
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <ProTable />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <AnalyticsCard />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default BodyPro;
