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
                title: "Tot bag réversible",
                text: "Ajouter non réversible option ajout de caracteres pour ellipjout de caracteres jout de caracteres jout de caracteres jout de caracteres se",
                picture: "/bag_5.jpg",
                closeups : [
                    "/bag.jpg",
                    "/bag_2.jpg",
                    "/bag_3.jpg",
                    "/bag_4.jpg",
                ],
                price: "18",
                id: "SWG-1",
            },
            {
                title: "Coussin personnalisé",
                text: "",
                picture: "/pillow_custom.jpg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "15",
                id: "SWG-2",
            },
            {
                title: "Sac à pain / baguette",
                text: "",
                picture: "/bread_bag.jpg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "15",
                id: "SWG-3",
            },
            {
                title: "Snoods enfant chaud hiver",
                text: "",
                picture: "/next.svg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "12",
                id: "SWG-4",
            },
            {
                title: "Bloc porte berlingot",
                text: "",
                picture: "/next.svg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "10",
                id: "SWG-5",
            },
            {
                title: "Support GSM / tablette",
                text: "",
                picture: "/phone_support_2.jpg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "7",
                id: "SWG-6",
            },
            {
                title: "Lingettes démaquillantes",
                text: "Ajouter x1 / x5",
                picture: "/wipes_custom.jpg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "8",
                id: "SWG-7",
            },
            {
                title: "Lunch bag",
                text: "",
                picture: "/next.svg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "6",
                id: "SWG-8",
            },
            {
                title: "Sac à vrac",
                text: "Ajouter taille (petit / grand)",
                picture: "/next.svg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "5",
                id: "SWG-9",
            },
            {
                title: "Sachet de lavande",
                text: "",
                picture: "/lavander_bag.jpg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "4",
                id: "SWG-10",
            },
            {
                title: "Foulchie",
                text: "",
                picture: "/next.svg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "4",
                id: "SWG-11",
            },
            {
                title: "Essuie-tout réutilisable",
                text: "",
                picture: "/next.svg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "2",
                id: "SWG-12",
            },
            {
                title: "Chouchou",
                text: "",
                picture: "/next.svg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "2",
                id: "SWG-13",
            },
            {
                title: "Charlotte",
                text: "Ajout taille (S / M / L)",
                picture: "/hair_hat_2.jpg",
                closeups : [
                    "",
                    "",
                    "",
                ],
                price: "6",
                id: "SWG-14",
            },
        ]
    },
    {
        category: "Flocage",
        products: [
            {
                title: "Sur Tasse",
                text: "Description du produit",
                picture: "/flocage_1.jpg",
                closeups : [
                    "/flocage_0.jpg",
                    "/flocage_2.jpg",
                    "/flocage_3.jpg",
                ],
                price: "500",
                id: "PFC1",
            },
            {
                title: "Sur T-Shirt",
                text: "Description du produit",
                picture: "/next.svg",
                closeups : [
                    "/flocage.jpg",
                    "/flocage.jpg",
                    "/flocage.jpg",
                ],
                price: "1200",
                id: "PFC2",
            },
            {
                title: "Produit 3",
                text: "Description du produit",
                picture: "/next.svg",
                closeups : [
                    "/flocage.jpg",
                    "/flocage.jpg",
                    "/flocage.jpg",
                ],
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
    gap: 40px;
    @media (max-width : 768px) {
        gap: 100px;
    }
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
                                closeups={product.closeups}
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
