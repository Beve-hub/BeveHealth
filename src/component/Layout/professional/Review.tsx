import { Card, Group, Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import {  dataReview } from './../../../utilites/data/data';
import '@mantine/charts/styles.css';


const Review = () => {
    return (
        <Card
      style={{
        display:'flex',
        justifyContent:'center',
        maxWidth: '35rem',
        height: 'auto',
        background: '#F1F1F1',
        borderRadius: '2rem',
        padding: '1rem 2rem',
      }}
    >
        <Text fz="18" fw="700" mb="10">Patient Review</Text>
       <Group justify='center'>
       <BarChart
      h={200}
      data={dataReview}
      dataKey="review"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'Patient'}]}
    />
        </Group> 
     
    </Card>
    )
}

export default Review
