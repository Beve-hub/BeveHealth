import { Card, Group, Text, } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import { dataAnalysis } from '../../../utilites/data/data';
import '@mantine/charts/styles.css';

const AnalyticsCard = () => {
    return (
        <Card
        style={{   
            maxWidth:'35rem',             
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '2rem',
          padding: '2rem 2rem',
        }}
        >
            <Text fz="18" fw="500" mb="lg">Analytics</Text>
            <Group>
            <BarChart
      h={225}
      data={dataAnalysis}
      dataKey="day"
      series={[{ name: 'Patient', color: '#008C73' }]}
    />
            </Group>
        </Card>
    )
}

export default AnalyticsCard
