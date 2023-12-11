import react from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.section`
    display: flex;
    gap: 25px;
    justify-content: center;
`

const Showcase = () => {
    return (
        <Container>
            <Card description="totodescription" title="tototitle" link="/" />
            <Card description="totodescription" title="tototitle" link="/" />
            <Card description="totodescription" title="tototitle" link="/" />
        </Container>
    )
}

export default Showcase;
