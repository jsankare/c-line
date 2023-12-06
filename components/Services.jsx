import react from "react";
import styled from "styled-components";
import Card from "./Card";
import MainTitle from "./Layout/Title";

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

const Container = styled.section``

const Services = () => {
    return (
        <Container>
            <MainTitle title="toto" />
            {services.map((service) => {
                <Card 
                    key={service.id}
                    title={service.title}
                    description={service.description}
                />
            })}
        </Container>
    )
}

export default Services;
