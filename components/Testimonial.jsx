import react from "react";
import styled from "styled-components";
import MainTitle from "./Layout/Title";
import colors from "@/assets/colors";
import Review from "./Review";

const Reviews = [
    {
        name: "Toto1",
        id: "REVIEW1",
        content: "Content toto lorem ipsum me llamo bambina1",
        rating: 2,
    },
    {
        name: "Toto2",
        id: "REVIEW2",
        content: "Content toto lorem ipsum me llamo bambina2",
        rating: 5,
    },
    {
        name: "Toto3",
        id: "REVIEW3",
        content: "Content toto lorem ipsum me llamo bambina3",
        rating: 0,
    },
]

const Container = styled.section`
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    width: 100%;
`

const TestimonialWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`

const Testimonial = () => {
    return (
        <Container>
            <MainTitle title="Les avis" size="big" weight="bold" />
            <TestimonialWrapper>
            {Reviews.map((review) => (
                <Review
                key={review.id}
                name={review.name}
                id={review.id}
                content={review.content}
                rating={review.rating}
                />
            ))}
            </TestimonialWrapper>
        </Container>
    );
};

export default Testimonial;
