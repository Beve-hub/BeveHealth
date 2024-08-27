import { ActionIcon, Avatar, Box, Button, Group, Image, ScrollArea, Text, Textarea } from '@mantine/core'
import { IconArrowLeft, IconMicrophone, IconPhoto, IconSend, IconVideo } from '@tabler/icons-react'
import React from 'react'
import { IoIosCall } from "react-icons/io";
import { useElementSize,useMediaQuery } from '@mantine/hooks';
import IMG1 from '../../assets/IMG-20231104-WA0014.jpg'
import IMG2 from '../../assets/IMG-20231125-WA0035(1).jpg'

interface Props {
    
}

const ChatField: React.FC<Props> = () => {
    const windowWidth = useElementSize().width;
    const windowImageHeight = useElementSize().height;
    const windowImageWidth = useElementSize().width;
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    

    const textWidth = windowWidth < 600 ?'20rem' : 'auto' ;
    const imageWidth = windowImageWidth < 600 ?'18rem' : 'auto' ;
    const imageHeight = windowImageHeight < 600 ?'18rem' : 'auto' ;
  
    
    return (
        <div style={{width: '40rem',padding:'0 2rem',background: '#F1F1F1',  borderTopRightRadius: '1rem',borderBottomRightRadius: '1rem' }}>
            <div>
            <Box style={{padding:'1rem 2rem', display:'flex', justifyContent:'space-between', }}>
                
                <Group >
               {isSmallScreen && (
                <ActionIcon color='#12121210' ><IconArrowLeft color='#121212'/></ActionIcon>
                )}
                    <Avatar size={40}/>
                    <Text fz="16" fw="500">Dr.John</Text>
                </Group>

                <Group>
                    <ActionIcon color='#12121210' ><IconVideo color='#121212'/></ActionIcon>
                    <ActionIcon color='#12121210' ><IoIosCall  size={24} color='#121212'/></ActionIcon>
                </Group>
            </Box>
            </div>
            <div style={{margin:'0 1rem'}}>
                <ScrollArea h="60vh" type="scroll" scrollbarSize={1} py={2}>
                    <Box>   
                        <Group justify='flex-start'>
                        <Text style={{
                            display:'flex', 
                            justifyContent:'flex-start',
                            backgroundColor:'#008C7320', 
                            maxWidth: textWidth,
                            margin:'1rem 0rem',
                            borderBottomLeftRadius:'5rem',
                            borderTopRightRadius:'5rem',
                            borderBottomRightRadius:'5rem',
                            fontSize:'14px',
                            padding:'0.8rem 2rem 1rem '}}>hello jesus love you witrh all his heart and might so love him with your streenght for he isnthe giver of life aand hjop eto makdn......</Text>
                     
                        </Group>                  
                       <Group justify='flex-end'>
                       <Text style={{
                            display:'flex',
                            justifyContent:'flex-end',
                            backgroundColor:'#12121220',
                            maxWidth: textWidth,
                            margin:'1rem 0rem', 
                            borderBottomLeftRadius:'5rem',
                            borderTopLeftRadius:'5rem',
                            borderTopRightRadius:'5rem', 
                            padding:'0.8rem 2rem 1rem ',
                            fontSize:'14px',
                            }}>hello jesus love you witrh all his heart and might so love him with your streenght for he isnthe giver of life aand hjop eto makdn......</Text>
                       
                       </Group>
                       
                       <Group justify='flex-start' >
                            <Image src={IMG1} alt=''  style={{maxHeight:imageHeight, maxWidth:imageWidth,  
                               backgroundColor:'#008C7320',                           
                            }}/>
                        </Group>                  
                       <Group justify='flex-end'>
                           <Image src={IMG2}alt=''  style={{maxHeight:imageHeight, maxWidth:imageWidth}}/>
                       </Group>
                       
                        
                        
                                              
                    </Box>
                </ScrollArea>
            </div>
            <div >
            <Box style={{padding:'1rem 1rem', display:'flex', justifyContent:'space-between', alignContent:'center'}}>
                
                <Group style={{backgroundColor:'#12121210', borderRadius:20, padding:'0.2rem 2rem'}}>
                <Textarea   
                   variant="unstyled" 
                   size="sm"           
                   placeholder="Type a messager"
                   style={{width: '20rem'}}
                 />
                 <Group>
                    <ActionIcon color='#12121210' ><IconPhoto color='#121212'/></ActionIcon>
                    <ActionIcon color='#12121210' ><IconMicrophone  size={22} color='#121212'/></ActionIcon>
                </Group>
                </Group>
                <Group>
                <Button variant='filled' color='#008C73' >
                    <IconSend/>
                </Button>
                </Group>
               
            </Box>
            </div>
            
        </div>
    )
}

export default ChatField
