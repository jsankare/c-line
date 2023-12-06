import react from "react";
import styled from "styled-components";
import Card from "./Card";
import MainTitle from "./Layout/Title";
import colors from "@/assets/colors";

const services = [
    {
        title: "Couture",
        description: "lorem ipsum couture",
        id: "SERV1"
    },
    {
        title: "Flocage",
        description: "lorem ipsum flocage",
        id: "SERV2"
    },
    {
        title: "Évènements saisonniers",
        description: "lorem ipsum saison",
        id: "SERV3"
    },
]

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.secondary};
`

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    text-align: center;
`

const Services = () => {
    return (
        <Container>
            <MainTitle title="Services" />
            <CardsWrapper>
                {services.map((service) => (
                    <Card 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </CardsWrapper>
        </Container>
    )
}

export default Services;
