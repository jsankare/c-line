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
        link: "/sewing",
        picture: "/sewing.jpg",
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
        link: "/flocking",
        picture: "S001688399.webp",
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
        link: "/seasonal",
        picture: "/season.jpg",
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
    gap: 100px;
    background-color: ${colors.secondary};
    box-shadow: 0 0 0 100vmax ${colors.secondary};
    clip-path: inset(0 -100vmax);
    width: 100%;
`

const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
`

const Services = () => {
    return (
        <Container>
            <MainTitle title="Services" size="big" weight="bold" />
            <ServicesWrapper>
                {services.map((service) => (
                    <Service 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        picture={service.picture}
                        reversedLayout={service.reversedLayout}
                        arguments={service.arguments}
                        link={service.link}
                    />
                ))}
            </ServicesWrapper>
        </Container>
    )
}

export default Services;
