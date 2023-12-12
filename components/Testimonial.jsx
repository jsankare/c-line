import react from "react";
import styled from "styled-components";
import MainTitle from "./Layout/Title";
import colors from "@/assets/colors";
import TestimonialSlider from './TestimonialSlider';

const Reviews = [
    {
        name: "Manuel Valls",
        id: "REVIEW1",
        content: "Content toto lorem ipsum me llamo bambina1 Content toto lorem ipsum me llamo bambina1",
        photo: "/flocage.jpg",
    },
    {
        name: "Jean-Paul Belmondo",
        id: "REVIEW2",
        content: "Content toto lorem ipsum me llamo bambina1 Content toto lorem ipsum me llamo bambina1",
        photo: "/flocage.jpg",
    },
    {
        name: "Adele",
        id: "REVIEW3",
        content: "Content toto lorem ipsum me llamo bambina1 Content toto lorem ipsum me llamo bambina1",
        photo: "/flocage.jpg",
    },
    {
        name: "Eminem",
        id: "REVIEW4",
        content: "Content toto lorem ipsum me llamo bambina1 Content toto lorem ipsum me llamo bambina1",
        photo: "/flocage.jpg",
    },
]

const Container = styled.section`
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    width: 100%;
    position: relative;
`;

const Testimonial = () => {

    return (
        <Container>
            <MainTitle title="Les avis" size="big" weight="bold" />
            <TestimonialSlider reviews={Reviews} />
        </Container>
    );
};

export default Testimonial;
