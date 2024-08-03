import { Card,  Group,  Text, UnstyledButton, ActionIcon} from '@mantine/core';
import { IconDownload, IconFolder,  } from '@tabler/icons-react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Document = () => {
    return (
        <Card
        style={{   
            maxWidth:'35rem',             
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '1rem',
          padding: '1rem 2rem',
        }}
      >
        <Group justify='space-between'>
        <Text fz="20" fw="bold">Document</Text>
        <UnstyledButton style={{display:'flex', alignItems:'center', gap:10}}> <Text color="#006250" >view All </Text> <MdKeyboardArrowRight size={20} /> </UnstyledButton>
        </Group>
  
        <Group justify='space-between' my="lg" style={{borderBottom:"2px solid #12121250", paddingBottom:10}}>
          <Group>
          <IconFolder/>
          <Text fz="18">DNA Test</Text>
          </Group>        
          <ActionIcon radius="lg" bg='#4ECBB480' ><IconDownload color='#121212'/></ActionIcon>
        </Group>
  
        <Group justify='space-between' my="lg" style={{borderBottom:"2px solid #12121250", paddingBottom:10}}>
          <Group>
          <IconFolder/>
          <Text fz="18">Lab Test</Text>
          </Group>        
          <ActionIcon radius="lg" bg='#4ECBB480' ><IconDownload color='#121212'/></ActionIcon>
        </Group>
        <Group justify='space-between' my="lg" style={{borderBottom:"2px solid #12121250", paddingBottom:10}}>
          <Group>
          <IconFolder/>
          <Text fz="18">Blood Test</Text>
          </Group>        
          <ActionIcon radius="lg" bg='#4ECBB480' ><IconDownload color='#121212'/></ActionIcon>
        </Group>
      
      </Card>
    )
}

export default Document
