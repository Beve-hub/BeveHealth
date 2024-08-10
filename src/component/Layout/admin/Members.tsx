import { PieChart } from '@mantine/charts';
import { Card, Text,Group } from "@mantine/core"
import { MemberData } from '../../../utilites/data/data';

const Members = () => {
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
            <Text fz="18" fw="700" mb="20">Member History</Text>
            <Group justify='center'>
       <PieChart
        data={MemberData}
        withLabelsLine
         labelsPosition="outside" 
         labelsType="percent" 
         withLabels
         strokeWidth={0.3}
         size={200}
         withTooltip
         tooltipDataSource="segment"
      />
        </Group> 
        </Card>
    )
}

export default Members
