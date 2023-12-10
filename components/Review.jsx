import React from "react";
import styled, { keyframes } from "styled-components";
import Paragraph from "./Layout/Paragraph";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    border: 1px solid black;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    gap: 3px;
`;

const shakeAnimation = keyframes`
    0% { transform: translateX(0); }
    25% { transform: translateX(-1px); }
    50% { transform: translateX(1px); }
    75% { transform: translateX(-1px); }
    100% { transform: translateX(0); }
`;

const StyledStar = styled(FontAwesomeIcon)`
    width: 100%;
    max-width: 25px;

    &:hover {
        &.shake {
        animation: ${shakeAnimation} 0.5s ease infinite;
        }
    }
`;

const Review = ({ name, content, rating }) => {
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => index + rating + 1);

    return (
        <Container>
            <Wrapper>
                {[...filledStars].map((_, index) => (
                <StyledStar key={`filled_${index}`} icon={faStar} className="shake" />
                ))}
                {[...emptyStars].map((_, index) => (
                <StyledStar key={`empty_${index}`} icon={faStar} style={{ opacity: 0.3 }} />
                ))}
            </Wrapper>
            <Paragraph text={content} size="" weight="" />
            <Paragraph text={name} size="" weight="" />
        </Container>
    );
};

export default Review;
