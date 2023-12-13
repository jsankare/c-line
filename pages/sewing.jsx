import react from "react";
import styled from "styled-components";
import Heading from "@/components/Heading";
import Presentation from "@/components/Presentation";
import colors from "@/assets/colors";
import Showcase from "@/components/Showcase";

const products = [
    {
        name: "Product 1",
        catchphrase: "catchphrase about product 1",
        picture: "/flocage.jpg",
        id: "P1",
    },
    {
        name: "Product 2",
        catchphrase: "catchphrase about product 2",
        picture: "/sewing2.png",
        id: "P2",
    },
    {
        name: "Product 3",
        catchphrase: "catchphrase about product 3",
        picture: "/sewing3.png",
        id: "P3",
    },
]

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 100px;
    background-color: ${colors.secondary};
    padding-bottom: 50px;
`

const Sewing = () => {
    return (
        <Container>
            <Heading title="Couture" subtitle="subtitle here lorem ipsum" picture="sewing.jpg" />
            <Presentation title="de la couture" text="La couture artisanale incarne l'essence même du talent et de la délicatesse. Chaque point, chaque couture est soigneusement exécuté avec une précision méticuleuse, créant ainsi des pièces uniques chargées d'histoire et d'authenticité. Les créateurs d'exception manient l'aiguille et le fil avec une habileté inégalée, transformant des tissus sélectionnés avec soin en vêtements et accessoires qui racontent une histoire. Chaque article cousu à la main est le fruit d'un travail minutieux, imprégné de passion, d'expertise et d'un dévouement absolu à l'artisanat. L'attention portée aux détails et la qualité exceptionnelle font de la couture artisanale bien plus qu'un simple vêtement, mais une œuvre d'art intemporelle."  />
            <Showcase products={products} />
        </Container>
    )
}

export default Sewing;
