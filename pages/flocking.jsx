import react from "react";
import styled from "styled-components";
import Heading from "@/components/Heading";
import Presentation from "@/components/Presentation";
import colors from "@/assets/colors";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: ${colors.secondary};
`

const Flocking = () => {
    return (
        <Container>
            <Heading title="Flocage" subtitle="subtitle here lorem ipsum" />
            <Presentation title="du flocage" />
        </Container>
    )
}

export default Flocking;
