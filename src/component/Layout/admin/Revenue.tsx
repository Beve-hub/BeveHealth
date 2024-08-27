import { Card, Text,Group } from "@mantine/core"
import { AreaChart } from '@mantine/charts';
import { dataRevenue } from "../../../utilites/data/data";

const Revenue = () => {
    return (
        <Card style={{
            display:'flex',
            justifyContent:'center',
            maxWidth: '35rem',
            height: 'auto',
            background: '#F1F1F1',
            borderRadius: '2rem',
            padding: '1.5rem 2rem',
          }}>
            <Text fz="18" fw="700" mb="lg">Revenue</Text>
            <Group justify='center'>
       <AreaChart
        data={dataRevenue}
        h={200}     
        dataKey="date"
        series={[
        { name: 'Apples', color: '#25CD25' }       
      ]}
      curveType="natural"
      tickLine="x"
      />
        </Group> 
        </Card>
    )
}

export default Revenue
