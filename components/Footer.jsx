import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import Link from "next/link";

const Container = styled.section`
    background-color: ${colors.primary};
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
`

const ContentWrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`

const LinksWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    transition: ease-in-out 0.2s;
    font-size: 18px;
    &:hover {
        color: ${colors.fourth};
    }
`

const SocialsWrapper = styled.div`
    display: flex;
    justify-content: right;
    gap: 10px;
    width: 100%;
`

const Logo = styled.img`
    width: 100%;
    max-width: 20px;
`

const Separator = styled.div`
    background-color: black;
    width: 95%;
    height: 1px;
`

const Paragraph = styled.p`
    width: 100%;
    text-align: left;
`

const Footer = () => {
    return (
        <Container>
            <Separator />
            <ContentWrapper>
                <Paragraph>Création <StyledLink href="/" >Jordan Sankare</StyledLink> © tous droits réservés</Paragraph>
                <LinksWrapper>
                    <StyledLink href="/" >Accueil</StyledLink>
                    <StyledLink href="/sewing" >Couture</StyledLink>
                    <StyledLink href="/flocking" >Flocage</StyledLink>
                    <StyledLink href="/products" >Tous les produits</StyledLink>
                    <StyledLink href="/cart" >Panier</StyledLink>
                    <StyledLink href="/contact" >Contact</StyledLink>
                </LinksWrapper>
                <SocialsWrapper>
                    <StyledLink href="/" > <Logo src="/facebook.svg" /> </StyledLink>
                    <StyledLink href="/" > <Logo src="/instagram.svg" /> </StyledLink>
                </SocialsWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default Footer;
