import { useState } from "react";
import { SimpleGrid, Avatar, Text, Button, Paper, Pagination, Group } from "@mantine/core";
import { DocData } from "../../../utilites/data/data";
import { useNavigate } from "react-router-dom";

interface Doctor {
    name: string;
    occupation: string;
    staffId: string;
    image: string;
}
const Doctors = () => {
  const navigate = useNavigate();
  const itemsPerPage = 8; // 4 cards per row * 2 rows
  const [activePage, setActivePage] = useState(1);

  // Calculate the range of data to display based on the active page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = DocData.slice(startIndex, endIndex);

  // Handle click to navigate to doctor details page with selected doctor data
  const handleClick = (item: Doctor) => {
    navigate('/doctorDetails', { state: { item } });
  };

  return (
    <div>
      <SimpleGrid cols={{ base: 1, xs: 4 }} my="lg">
        {paginatedData.map((item, index) => (
          <Paper
            radius="md"
            withBorder
            p="lg"
            bg="var(--mantine-color-body)"
            key={index}
          >
            <Avatar src={item.image} size={120} radius={120} mx="auto" />
            <Text ta="center" fz="lg" fw={500} mt="md">
              {item.name}
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
              {item.occupation}
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
              {item.staffId}
            </Text>
            <Group justify="center">
              <Button 
                variant="filled" 
                color="#008C73" 
                mt="md"
                onClick={() => handleClick(item)} // Pass the item to the handler
              >
                View
              </Button>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>

      {/* Pagination */}
      <Pagination
        total={Math.ceil(DocData.length / itemsPerPage)}
        onChange={setActivePage}
        mt="lg"
        color="#008C73"
      />
    </div>
  );
};

export default Doctors;
