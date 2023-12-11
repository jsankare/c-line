import react from "react";
import styled from "styled-components";
import Heading from "@/components/Heading";
import Presentation from "@/components/Presentation";
import colors from "@/assets/colors";
import Showcase from "@/components/Showcase";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: ${colors.secondary};
`

const Sewing = () => {
    return (
        <Container>
            <Heading title="Couture" subtitle="subtitle here lorem ipsum" />
            <Presentation title="de la couture" />
            <Showcase />
        </Container>
    )
}

export default Sewing;
