import { Container } from "@mantine/core"
import HeaderDoc from "./HeaderDoc"
import BodyDoc from "./BodyDoc"


const Document = () => {
    return (
        <Container size="xl" my="md">
          <HeaderDoc/>
          <BodyDoc/>
        </Container>
    )
}

export default Document
