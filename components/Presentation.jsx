import react from "react";
import styled from "styled-components";
import SubTitle from "./Layout/SubTitle";
import Paragraph from "./Layout/Paragraph";
import colors from "@/assets/colors";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.secondary};
`

const Presentation = ( {title} ) => {
    return (
        <Container>
            <SubTitle title={`à propos ${title}`} />
            <Paragraph text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum v lorem ipsum" />
        </Container>
    )
}

export default Presentation;
