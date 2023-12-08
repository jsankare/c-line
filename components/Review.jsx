import react from "react";
import styled from "styled-components";
import Paragraph from "./Layout/Paragraph";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div `
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div``

const Review = ({ name, id, content, rating }) => {
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => index + rating + 1);

    return (
        <Container>
            <Wrapper>
                {[...filledStars].map((_, index) => (
                    <FontAwesomeIcon key={`filled_${index}`} icon={faStar} />
                ))}
                {[...emptyStars].map((_, index) => (
                    <FontAwesomeIcon key={`empty_${index}`} icon={faStar} style={{ opacity: 0.3 }} />
                ))}
            </Wrapper>
            <Wrapper>
                <Paragraph text={name} />
                <Paragraph text={content} />
            </Wrapper>
        </Container>
    )
}


export default Review;
