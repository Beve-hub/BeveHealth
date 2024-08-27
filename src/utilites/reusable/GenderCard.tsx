import { Card, Group, Text } from "@mantine/core";
import { DonutChart } from "@mantine/charts";
import { data } from "../data/data";
import "@mantine/charts/styles.css";

const GenderCard = () => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "35rem",
        height: "auto",
        background: "#F1F1F1",
        borderRadius: "2rem",
        padding: "1rem 2rem",
      }}
    >
      <Text fz="18" fw="700" mb="sm">
        Gender
      </Text>
      <Group justify="center">
        <DonutChart
          data={data}
          size={150}
          thickness={20}
          withLabelsLine
          withLabels
          tooltipDataSource="segment"
          mx="auto"
          chartLabel="Total Patients 380"
        />
      </Group>
    </Card>
  );
};

export default GenderCard;
