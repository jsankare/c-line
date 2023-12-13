import react from "react";
import styled from "styled-components";
import SubTitle from "./Layout/SubTitle";
import Paragraph from "./Layout/Paragraph";
import colors from "@/assets/colors";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.secondary};
    width: 60%;
    margin: 0 auto;
`

const Presentation = ( {title, text} ) => {
    return (
        <Container>
            <SubTitle title={`à propos ${title}`} />
            <Paragraph text={text} />
        </Container>
    )
}

export default Presentation;
