import { Container } from "@mantine/core";
import MedHistory from "./MedHistory";
import DetailMed from "./DetailMed";

const MedicaDetails = () => {
  return (
    <Container size="xl" my="md">
      <DetailMed />
      <MedHistory />
    </Container>
  );
};

export default MedicaDetails;
