import react from "react";
import styled from "styled-components";
import MainTitle from "./Layout/Title";
import SubTitle from "./Layout/SubTitle";
import colors from "@/assets/colors";

const Container = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background: linear-gradient(180deg, rgb(255, 148, 148), rgb(255, 209, 209));
`

const Heading = ( {title, subtitle} ) => {
    return (
        <Container>
            <MainTitle title={title} />
            <SubTitle title={subtitle} size="small" />
        </Container>
    )
}

export default Heading;
