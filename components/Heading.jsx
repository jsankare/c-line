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

const PicWrapper = styled.div`
    width: 100%;
    height: 40vh;
    overflow: hidden;
`

const Picture = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Heading = ( {title, subtitle, picture} ) => {
    return (
        <Container>
            <MainTitle title={title} />
            <SubTitle title={subtitle} size="small" />
            <PicWrapper>
                 <Picture src={picture} />
            </PicWrapper>
        </Container>
    )
}

export default Heading;
