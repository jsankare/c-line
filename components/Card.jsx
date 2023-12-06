import react from "react";
import styled from "styled-components";

const Container = styled.section``

const Card = ( {title, description, id} ) => {
    return (
        <Container>
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    )
}

export default Card;