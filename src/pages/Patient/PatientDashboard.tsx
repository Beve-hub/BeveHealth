// PatientDashboard.js
'use client'
import { useState } from 'react';
import { AppShell, Burger, Image, Group, NavLink, AppShellHeader, Avatar, Text, Box } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { FiLogOut } from "react-icons/fi";

const data = [
  { label: 'OverView', path: '/overView' },
  { label: 'Appointment', path: '/appointment' },
  { label: 'Document', path: '/document' },
  { label: 'Messages', path: '/messages' },
];

const PatientDashboard = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [activePath, setActivePath] = useState(data[0].path); // Initialize with the first path
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const renderContent = () => {
    switch (activePath) {
      case '/overView':
        return <div>OverView Content</div>;
      case '/appointment':
        return <div>Appointment Content</div>;
      case '/document':
        return <div>Document Content</div>;
      case '/messages':
        return <div>Messages Content</div>;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{        
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader withBorder={false} pt="md">
        <Group px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image src="/src/assets/logo.svg" alt='' />
        </Group>
      </AppShellHeader>
        
      <AppShell.Navbar pt="80">
        <Group>
          {data.map((item, index) => (
            <NavLink
              key={index}
              label={<span style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '20px', fontWeight: 500 }}>{item.label}</span>}
              onClick={() => setActivePath(item.path)}
              active={activePath === item.path}
              style={{ 
                cursor: 'pointer', 
                backgroundColor: activePath === item.path ? "#008C73" : 'transparent',
                color: activePath === item.path ? "white" : '#333',
                padding: '10px 20px',
                borderRadius: '0px 30px 30px 0',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                textDecoration: 'none',
                width: '13rem',
              }}
            />
          ))}
          
          {isSmallScreen && (
            <Box style={{ position: 'absolute', bottom: 60, width: '80%', borderTop: '1px solid #ccc', marginLeft: 30,padding:20, }}>
              <Group display="flex" mt="auto" style={{ width: '100%' }}>
                <Group justify="center" mb="10" style={{ width: '100%' }}>
                  <Avatar size="lg" src="/src/assets/user.png" alt="user" />
                  <Text fw="400" fz="20" ml="2">User Name</Text>
                </Group>
                <a href='/patientLogin' style={{ display: 'flex', gap: 10, textDecoration: 'none', justifyContent: 'center', width: '100%', marginRight: 20, cursor: 'pointer' }}>
                  <FiLogOut size={30} color='gray'/>
                  <Text fw="400" fz="20" ml="20" color='#121212'>Log Out</Text>
                </a>
              </Group>
            </Box>
          )}
          
        </Group>
      </AppShell.Navbar>

      <AppShell.Main>{renderContent()}</AppShell.Main>
    </AppShell>
  );
};

export default PatientDashboard;
