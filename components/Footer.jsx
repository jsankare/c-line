import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Container = styled.section`
    background-color: ${colors.primary};
    min-height: 15vh;
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
    @media (max-width : 768px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 40px;
        padding: 20px 0px;
    }
`

const LinksWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
    @media (max-width : 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
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
    @media (max-width : 768px) {
        justify-content: center;
        gap: 10%;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 28px;
`

const Separator = styled.div`
    background-color: black;
    width: 95%;
    height: 1px;
    @media (max-width : 768px) {
        display: none;
    }
`

const Paragraph = styled.p`
    width: 100%;
    text-align: left;
    @media (max-width : 768px) {
        text-align: center;   
    }
`

const Footer = () => {
    return (
        <Container>
            <Separator />
            <ContentWrapper>
                <Paragraph>Création <StyledLink href="https://www.jsankare.dev/" target="blank" >Jordan Sankare</StyledLink> © tous droits réservés</Paragraph>
                <LinksWrapper>
                    <StyledLink href="/" >Accueil</StyledLink>
                    <StyledLink href="/sewing" >Couture</StyledLink>
                    <StyledLink href="/flocking" >Flocage</StyledLink>
                    <StyledLink href="/products" >Produits</StyledLink>
                    <StyledLink href="/cart" >Panier</StyledLink>
                    <StyledLink href="/contact" >Contact</StyledLink>
                </LinksWrapper>
                <SocialsWrapper>
                    <StyledLink href="https://www.facebook.com/search/top/?q=C%20Line" target="blank" > <StyledIcon icon={faFacebook}  /> </StyledLink>
                    <StyledLink href="https://www.facebook.com/search/top/?q=C%20Line" target="blank" > <StyledIcon icon={faInstagram}  /> </StyledLink>
                </SocialsWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default Footer;
