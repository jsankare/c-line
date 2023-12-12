import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import Link from "next/link";

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
        background-color: ${colors.secondary};
        color: black;
        border: 1px solid black;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
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
                    <StyledLink href="/seasonal" >Évènements saisonniers</StyledLink>
                </LinksWrapper>
                <CTA href="/contact" >Contact</CTA>
            </NavWrapper>
        </Container>
    )
}

export default Navbar;
