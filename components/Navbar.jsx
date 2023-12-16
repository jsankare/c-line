import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Container = styled.section`
    background-color: ${colors.primary};
    padding: 20px;
`

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.fourth};
    font-size: 22px;
`


const LinksWrapper = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
`

const CTA = styled(Link)`
    padding: 10px 15px;
    background-color: ${colors.fourth};
    text-decoration: none;
    color: ${colors.primary};
    border-radius: 5px;
    font-size: 22px;
    transition: ease-in-out 0.2s;
    &:hover {
        background-color: black;
    }
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    background-color: ${colors.fourth};
    padding: 10px;
    border-radius: 50%;
    color: ${colors.primary};
`


const Navbar = () => {
    return (
        <Container>
            <NavWrapper>
                <LinksWrapper>
                    <StyledLink href="/" ><Logo src="/C-line-nobg.webp" /></StyledLink>
                    <StyledLink href="/" >Accueil</StyledLink>
                    <StyledLink href="/sewing" >Couture</StyledLink>
                    <StyledLink href="/flocking" >Flocage</StyledLink>
                    <StyledLink href="/products" >Produits</StyledLink>
                </LinksWrapper>
                <LinksWrapper>
                    <CTA href="/contact" >Contact</CTA>
                    <StyledLink href="/cart" > <StyledIcon icon={faCartShopping} /> </StyledLink>
                </LinksWrapper>
            </NavWrapper>
        </Container>
    )
}

export default Navbar;
