import react, { useState } from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.section`
    background-color: ${colors.primary};
    padding: 20px;
`

const NavDesktopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    @media (max-width : 768px) {
        display: none;
    }
`

const NavMobileWrapper = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width : 768px) {
        display: flex;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.fourth};
    font-size: 22px;
    transition: ease-in-out 0.2s;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width : 768px) {
        color: ${colors.primary};
        &:hover {
            text-decoration: none;
            color: black;
        }
    }
`

const LinksWrapper = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
`

const MobileLinksWrapper = styled.div`
    display: none;
    flex-direction: column;
    gap: 10px;
    display: none;
    position: absolute;
    top: 50px;
    left: 5px;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    @media (max-width : 768px) {
        display: flex;
    }
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
    transition: ease-in-out 0.2s;
    &:hover {
        background-color: black;
    }
    @media (max-width : 425px) {
        display: none;
    }
`

const BurgerIcon = styled(FontAwesomeIcon)`
    color: ${colors.fourth};
    font-size: 28px;
    cursor: pointer;
`


const Navbar = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    const mobileLinksStyle = {
        display: isMobileNavOpen ? 'flex' : 'none'
    };

    return (
        <Container>
            <NavDesktopWrapper>
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
            </NavDesktopWrapper>
            <NavMobileWrapper>
                <BurgerIcon onClick={toggleNav} icon={faBars} />
                <LinksWrapper>
                    <StyledLink href="/cart" > <StyledIcon icon={faCartShopping} /> </StyledLink>
                </LinksWrapper>
                <MobileLinksWrapper style={mobileLinksStyle} onClick={closeMobileNav} >
                    <StyledLink href="/" >Accueil</StyledLink>
                    <StyledLink href="/sewing" >Couture</StyledLink>
                    <StyledLink href="/flocking" >Flocage</StyledLink>
                    <StyledLink href="/products" >Produits</StyledLink>
                    <StyledLink href="/contact" >Contact</StyledLink>
                </MobileLinksWrapper>
            </NavMobileWrapper>
        </Container>
    )
}

export default Navbar;
