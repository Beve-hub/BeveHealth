import { Container } from "@mantine/core"
import HeaderStaff from "./HeaderStaff"
import BodyStaff from "./BodyStaff"



const Staff = () => {
    return (
        <Container size="lg" my="md">
            <HeaderStaff/>
            <BodyStaff/>
        </Container>
    )
}

export default Staff
