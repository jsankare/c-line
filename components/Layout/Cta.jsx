import react from "react";
import styled from "styled-components";
import Link from "next/link";
import colors from "@/assets/colors";

const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    border-radius: 10px;
    font-size: 26px;
    color: ${colors.primary};
    background-color: white;
    padding: 10px 15px;
    transition: ease-in-out 0.2s;
    &:hover {
        background-color: black;
    }
`

const Cta = ( {text, href} ) => {
    return (
        <>
            <StyledLink href={href} >{text}</StyledLink>
        </>
    )
}

export default Cta;
