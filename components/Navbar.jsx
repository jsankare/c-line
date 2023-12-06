import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import Link from "next/link";

const Container = styled.section`
    background-color: ${colors.primary};
`

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 0px 25px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.fourth};
`

const CTA = styled(Link)`
    padding: 10px 15px;
    background-color: ${colors.fourth};
    text-decoration: none;
    color: ${colors.primary};
    border-radius: 5px;
`

const LinksWrapper = styled.div`
    display: flex;
    gap: 15px;
    
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100px;
`


const Navbar = () => {
    return (
        <Container>
            <NavWrapper>
                <LinksWrapper>
                    <StyledLink href="" >Accueil</StyledLink>
                    <StyledLink href="" >Couture</StyledLink>
                    <StyledLink href="" >Flocage</StyledLink>
                    <StyledLink href="" >Évènements saisonniers</StyledLink>
                </LinksWrapper>
                <StyledLink href="" ><Logo src="/C-line-nobg.webp" /></StyledLink>
                <CTA href="" >Commander</CTA>
            </NavWrapper>
        </Container>
    )
}

export default Navbar;
