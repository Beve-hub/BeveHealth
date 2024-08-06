import { Container } from "@mantine/core"
import HeaderChart from "./HeaderChart"
import BodyChart from "./BodyChart"




const ChartPro = () => {
    return (
        <Container size="xl" my="md">
            <HeaderChart/>
            <BodyChart/>
        </Container>
    )
}

export default ChartPro
