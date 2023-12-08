import react from "react";
import styled from "styled-components";
import MainTitle from "./Layout/Title";
import colors from "@/assets/colors";
import Service from "./Service";

const services = [
    {
        id: "SERV1",
        title: "Couture",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        link: "/",
        picture: "/next.svg",
        reversedLayout : false,
        arguments: [
            "Bon matériaux",
            "Argument 2",
            "Argument 3",
        ],
    },
    {
        id: "SERV2",
        title: "Flocage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        link: "/",
        picture: "/next.svg",
        reversedLayout : true,
        arguments: [
            "Bon matériaux",
            "Argument 2",
            "Argument 3",
        ],
    },
    {
        id: "SERV3",
        title: "Évènements saisonniers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        link: "/",
        picture: "/next.svg",
        reversedLayout : false,
        arguments: [
            "Bon matériaux",
            "Argument 2",
            "Argument 3",
        ],
    },
]

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.secondary};
    box-shadow: 0 0 0 100vmax ${colors.secondary};
    clip-path: inset(0 -100vmax);
    width: 100%;
`

const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Services = () => {
    return (
        <Container>
            <MainTitle title="Services" />
            <ServicesWrapper>
                {services.map((service) => (
                    <Service 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        picture={service.picture}
                        reversedLayout={service.reversedLayout}
                        arguments={service.arguments}
                    />
                ))}
            </ServicesWrapper>
        </Container>
    )
}

export default Services;
