import { Container } from "@mantine/core"
import Details from "../../../../utilites/reusable/doctorsbio/Details"
import History from "../../../../utilites/reusable/doctorsbio/History"


const DoctorDetails = () => {
    return (
        <Container size="xl" my="md">
           <Details/>
           <History/> 
        </Container>
    )
}

export default DoctorDetails
