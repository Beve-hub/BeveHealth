'use client'
import { useState } from 'react';
import { AppShell, Burger, Image, Group, NavLink, AppShellHeader, Text, Box } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { FiLogOut, FiSettings } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from '@/assets/logo.svg'

import OverViewPro from './screen/overviewPro/OverViewPro';
import AppointmentPro from './screen/appointment/AppointmentPro';
import ChartPro from './screen/chart/ChartPro';
import DocumentPro from './screen/document/DocumentPro';
import MessagePro from './screen/message/MessagePro';

const data = [
  { label: 'OverView', path: '/overView' },
  { label: 'Appointment', path: '/appointment' },
  { label: 'Document', path: '/documentPro' },
  { label: 'Chart', path: '/chartPro' },
  { label: 'Messages', path: '/messages' },
];

const ProfessionalDashboard = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const [activePath, setActivePath] = useState(data[0].path); // Initialize with the first path
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isSmall = useMediaQuery('(min-width: 768px)');


    const renderContent = () => {
      switch (activePath) {
        case '/overView':
          return <OverViewPro/>;
        case '/appointment':
          return <AppointmentPro/>;
        case '/documentPro':
            return <DocumentPro/>;  
        case '/chartPro':
          return <ChartPro/>;
        case '/messages':
          return <MessagePro/>;
        default:
          return <div>Select a section</div>;
      }
    };
  
    return (
      <AppShell
      header={{ height: 60 }}
      navbar={{        
        width: 230,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader withBorder={false} pt="md">
        <Group px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image src={Logo} alt='' width={50} height={50}/>
        </Group>
      </AppShellHeader>
        
      <AppShell.Navbar pt="40">
        <Group>
          {data.map((item, index) => (
            <NavLink
              key={index}
              label={<span style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '18px', fontWeight: 500 }}>{item.label}</span>}
              onClick={() => setActivePath(item.path)}
              active={activePath === item.path}
              style={{ 
                cursor: 'pointer', 
                backgroundColor: activePath === item.path ? "#008C73" : 'transparent',
                color: activePath === item.path ? "white" : '#333',
                padding: '6px 15px',
                borderRadius: '0px 30px 30px 0',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                textDecoration: 'none',
                width: '13rem',
              }}
            />
          ))}
          
          {isSmallScreen && (
            <Box style={{ position: 'absolute', bottom: 20, width: '80%', borderTop: '1px solid #ccc', padding:20, }}>
              <Group display="flex" mt="auto" style={{ width: '100%' }}>
                <a style={{ display: 'flex', gap: 10, textDecoration: 'none', justifyContent: 'center', width: '100%', marginRight: 20, cursor: 'pointer', alignItems:'center',  }}>
                  <FaRegCircleUser size={24}  color='gray'/>
                  <Text fw="400" fz="16" >User Name</Text>
                </a>
                <a  href='/settings' style={{ display: 'flex', gap: 10, textDecoration: 'none', justifyContent: 'center', width: '100%', marginRight: 50, cursor: 'pointer', alignItems:'center',  }}>
                  <FiSettings size={24}  color='gray'/>
                  <Text fw="400" fz="16"  color='#121212'>Settings</Text>
                </a>
                <a href='/professionalLogin' style={{ display: 'flex', gap: 10, textDecoration: 'none', justifyContent: 'center', width: '100%', marginRight: 50, cursor: 'pointer' , alignItems:'center', }}>
                  <FiLogOut size={24} color='gray'/>
                  <Text fw="400" fz="16"  color='#121212'>Log Out</Text>
                </a>
                
              </Group>
            </Box>
          )}
          {isSmall && (
            <Box style={{ position: 'absolute', bottom: 40, width: '80%', borderTop: '1px solid #ccc', marginLeft: 30,padding:20, }}>
              <Group display="flex" mt="auto" style={{ width: '100%' }}>
                <a  href='/settings' style={{ display: 'flex', gap: 10, textDecoration: 'none', justifyContent: 'center', width: '100%', marginRight: 20, cursor: 'pointer', alignItems:'center',  }}>
                  <FiSettings size={24}  color='gray'/>
                  <Text fw="400" fz="16"  color='#121212'>Settings</Text>
                </a>
                <a href='/professionalLogin' style={{ display: 'flex', gap: 10, textDecoration: 'none', justifyContent: 'center', width: '100%', marginRight: 20, cursor: 'pointer' , alignItems:'center', }}>
                  <FiLogOut size={24} color='gray'/>
                  <Text fw="400" fz="16"  color='#121212'>Log Out</Text>
                </a>
              </Group>
            </Box>
          )}
        </Group>
      </AppShell.Navbar>

      <AppShell.Main>{renderContent()}</AppShell.Main>
    </AppShell>
    )
}

export default ProfessionalDashboard
