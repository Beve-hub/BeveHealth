import { Center,Image } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';


const data = [
    {label: "OverView", path:"/overView"},
    {label: "Appointment", path:"/apointment"},
    {label: "Document", path:"/document"},
    {label: "Messages", path:"/messages"},
]
const PatientLayout = ( ) => {
    const [opened, { toggle }] = useDisclosure();
    const [activePath, setActivePath] = useState(data[0].path); 
   
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
        <nav>
        <Center>
          <Image src="/src/assets/logo.svg" />

        </Center>
            <div>
            {data.map((item, index) => (
        <NavLink 
        key={index}
        to={item.path}
       
        >
         <div>{item.label}</div>
        </NavLink>
    ))}
            </div>
        </nav>
    )
}

export default PatientLayout
