import react from "react";
import styled from "styled-components";
import Paragraph from "./Layout/Paragraph";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 35px;
    border: 1px solid black;
    padding: 20px;
`

const Wrapper = styled.div`
    display: flex;
    gap: 3px;
`

const StyledStar = styled(FontAwesomeIcon)`
    width: 100%;
    max-width: 25px;
`

const Review = ({ name, content, rating }) => {
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => index + rating + 1);

    return (
        <Container>
            <Wrapper>
                {[...filledStars].map((_, index) => (
                    <StyledStar key={`filled_${index}`} icon={faStar} />
                ))}
                {[...emptyStars].map((_, index) => (
                    <StyledStar key={`empty_${index}`} icon={faStar} style={{ opacity: 0.3 }} />
                ))}
            </Wrapper>
            <Paragraph text={content} size="" weight="" />
            <Paragraph text={name} size="" weight="" />
        </Container>
    )
}


export default Review;
