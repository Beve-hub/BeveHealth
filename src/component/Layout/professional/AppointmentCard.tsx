import { Card, Avatar, Table, Group, Text, ActionIcon, rem } from '@mantine/core';
import { MdOutlineCheckBox } from "react-icons/md";
  import { MdCancelPresentation } from "react-icons/md";
  const data = [
    {
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
      name: 'Robert Wolfkisser',
      time: '22/5/24',
      date: "10:30am",
    },
    {
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
      name: 'Jill Jailbreaker',
      time: '22/5/24',
      date: "11:30am",
    },
    {
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
      name: 'Henry Silkeater',
      time: '22/5/24',
      date: "12:30am",
    },
 
  ];

const AppointmentCard = () => {
    const rows = data.map((item) => (
        <Table.Tr key={item.name}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={20} src={item.avatar} radius={40} />
              <div>
                <Text fz="sm" fw={500}>
                  {item.name}
                </Text>
                
              </div>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text fz="sm">{item.date}</Text>          
          </Table.Td>
          <Table.Td>
            <Text fz="sm">{item.time} </Text>
          
          </Table.Td>
          <Table.Td>
            <Group gap={0} justify="flex-end">
              <ActionIcon variant="subtle" color="gray">
                <MdOutlineCheckBox style={{ width: rem(24), height: rem(24) }} color='#008C73' />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray">
                    <MdCancelPresentation style={{ width: rem(24), height: rem(24) }} color='#FF0000' />
                  </ActionIcon>
              
            </Group>
          </Table.Td>
        </Table.Tr>
      ));
    return (
        <Card
        style={{   
            maxWidth:'35rem',             
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '2rem',
          padding: '1rem 1rem',
        }}
        >
            <Text fz="20" fw="700" my="sm">Appointment Request</Text>
           <Table.ScrollContainer minWidth={500}>
      <Table verticalSpacing="sm">
      <Table.Thead>
          <Table.Tr>
            <Table.Th>Patient</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Action</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer> 
        </Card>
    )
}

export default AppointmentCard
