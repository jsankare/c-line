import react from "react";
import styled from "styled-components";
import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import colors from "@/assets/colors";
import SubTitle from "@/components/Layout/SubTitle";

const data = [
    {
        category: "Couture",
        products: [
            {
                title: "produit 1",
                text: "description produit 1",
                picture: "/flocage.jpg",
                price: "5",
                id: "PSW1",
            },
            {
                title: "produit 2",
                text: "description produit 2",
                picture: "/next.svg",
                price: "8",
                id: "PSW2",
            },
            {
                title: "produit 3",
                text: "description produit 3",
                picture: "/next.svg",
                price: "12",
                id: "PSW3",
            },
            {
                title: "produit 4",
                text: "description produit 4",
                picture: "/next.svg",
                price: "12",
                id: "PSW4",
            }
        ]
    },
    {
        category: "Flocage",
        products: [
            {
                title: "Sur Tasse",
                text: "Description du produit",
                picture: "/next.svg",
                price: "500",
                id: "PFC1",
            },
            {
                title: "Sur T-Shirt",
                text: "Description du produit",
                picture: "/next.svg",
                price: "1200",
                id: "PFC2",
            },
            {
                title: "Produit 3",
                text: "Description du produit",
                picture: "/next.svg",
                price: "100",
                id: "PFC3",
            }
        ]
    }
]

const Container = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 100px;
    background-color: ${colors.secondary};
`

const ProductsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 0px 0px 50px 0px;
`

const CategoryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
`

const Products = () => {
    return (
        <Container>
            <Heading title="Tous nos produits" subtitle="Du choix pour tous" picture="/productsheading.png" />
            <ProductsWrapper>
                {data.map((categoryData, index) => (
                    <ProductsWrapper key={index}>
                        <SubTitle title={categoryData.category} />
                        <CategoryWrapper>
                            {categoryData.products.map((product, productIndex) => (
                                <ProductCard
                                key={productIndex}
                                title={product.title}
                                text={product.text}
                                price={product.price}
                                picture={product.picture}
                                />
                            ))}
                        </CategoryWrapper>
                    </ProductsWrapper>
                ))}
            </ProductsWrapper>
        </Container>
    )
}

export default Products;
