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
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

const TextWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.fourth};
`

const SocialsWrapper = styled.div`
    display: flex;
    gap: 10px;
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

const Paragraph = styled.p``

const Footer = () => {
    return (
        <Container>
            <Separator />
            <ContentWrapper>
                <Paragraph>Création <StyledLink href="/" >Jordan Sankare</StyledLink> © tous droits réservés</Paragraph>
                <TextWrapper>
                    <StyledLink href="/" >Accueil</StyledLink>
                    <StyledLink href="/sewing" >Couture</StyledLink>
                    <StyledLink href="/flocking" >Flocage</StyledLink>
                    <StyledLink href="/products" >Tous les produits</StyledLink>
                    <StyledLink href="/contact" >Contact</StyledLink>
                </TextWrapper>
                <SocialsWrapper>
                    <StyledLink href="/" > <Logo src="/facebook.svg" /> </StyledLink>
                    <StyledLink href="/" > <Logo src="/instagram.svg" /> </StyledLink>
                </SocialsWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default Footer;
