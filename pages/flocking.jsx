import react from "react";
import styled from "styled-components";
import Heading from "@/components/Heading";
import Presentation from "@/components/Presentation";
import colors from "@/assets/colors";
import Showcase from "@/components/Showcase";
import Cta from "@/components/Layout/Cta";

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
        picture: "/S001688399.webp",
        id: "P2",
    },
    {
        name: "Product 3",
        catchphrase: "catchphrase about product 3",
        picture: "/next.svg",
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

const CtaWrapper = styled.div`
    text-align: center;
`

const Sewing = () => {
    return (
        <Container>
            <Heading title="Flocage" subtitle="subtitle here lorem ipsum" />
            <Presentation title="du flocage" text="Le flocage, un art créatif en constante évolution, fusionne la technique avec la liberté d'expression artistique. À travers des méthodes artisanales de qualité, il transforme des objets quotidiens en pièces uniques et personnalisées. Chaque motif, chaque détail est soigneusement appliqué avec précision, ajoutant une touche de personnalisation à des vêtements, accessoires ou articles promotionnels. En alliant habilement les compétences artisanales à l'innovation, le flocage offre un moyen authentique de donner vie à des idées, de créer des designs uniques et de mettre en valeur la créativité individuelle. Chaque objet flocqué devient ainsi une toile sur laquelle s'exprime l'artisanat et l'originalité, captivant ceux qui apprécient l'unicité et la qualité des créations artisanales."  />
            <Showcase products={products} />
            <CtaWrapper>
                <Cta text="J'en veux !" href="/" />
            </CtaWrapper>
        </Container>
    )
}

export default Sewing;
