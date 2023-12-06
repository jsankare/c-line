import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";

const Container = styled.section`
    background-color: ${colors.primary};
    height: 15vh;
`

const Footer = () => {
    return (
        <Container>
            <p>totofooter</p>
        </Container>
    )
}

export default Footer;
