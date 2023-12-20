import react from "react";
import styled from "styled-components";
import SubTitle from "./Layout/SubTitle";
import ProductCard from "./ProductCard";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
`

const PicturesWrapper = styled.section`
    display: flex;
    justify-content: center;
    gap: 100px;
    @media (max-width : 768px) {
        flex-direction: column;
    }
`

const Showcase = ( {products} ) => {
    return (
        <Container>
            <SubTitle title="Un exemple de produits" />
            <PicturesWrapper>
            {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        picture={product.picture}
                        text={product.catchphrase}
                        title={product.name}
                    />
            ))}
            </PicturesWrapper>
        </Container>
    )
}

export default Showcase;
