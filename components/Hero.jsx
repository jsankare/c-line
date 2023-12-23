import react from "react";
import styled from "styled-components";

const Container = styled.section`
    min-height: 10vh;
    width: 100%;
    background: linear-gradient(180deg, rgb(255, 148, 148), rgb(255, 209, 209));
    display: flex;
    justify-content: center;
`

const Logo = styled.img``

const Hero = () => {
    return (
        <Container>
            <Logo src="/C-line_Créations-removebg-preview.png" />
        </Container>
    )
}

export default Hero;

