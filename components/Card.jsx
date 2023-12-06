import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";

const Container = styled.section`
    position: relative;
    background-color: ${colors.primary};
    border: 1px solid rgb(255 255 255 / 5%);
    border-radius: 1.5rem;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: radial-gradient(
        ${colors.thirdary} 1px, 
        transparent 1px
    );
    background-position: 50% 50%;
    background-size: 1.1rem 1.1rem;
    padding: 4rem;
    border-radius: 1.25rem;
    overflow: hidden;
`

const Wrapper = styled.div`

`

const Card = ( {title, description, id} ) => {
    return (
        <Container>
            <Wrapper>
                <h2>{title}</h2>
                <p>{description}</p>
            </Wrapper>
        </Container>
    )
}

export default Card;