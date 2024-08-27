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
            padding: '1rem 2rem',
          }}>
            <Text fz="18" fw="700" >Member History</Text>
            <Group justify='center'>
       <PieChart
        data={MemberData}
        withLabelsLine
         labelsPosition="outside" 
         labelsType="percent" 
         withLabels
         strokeWidth={0.3}
         size={190}
         withTooltip
         tooltipDataSource="segment"
      />
        </Group> 
        </Card>
    )
}

export default Members
