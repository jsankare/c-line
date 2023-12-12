import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import Link from "next/link";
import Paragraph from "./Layout/Paragraph";

const Container = styled.section`
    position: relative;
    background-color: #0F0F0F;
    border: 1px solid rgb(255 255 255 / 5%);
    width: 100%;
    max-width: 250px;
    height: 300px;
    flex-direction: column;
    background-image: radial-gradient(
        rgba(255, 148, 148, 0.2) 1px, 
        transparent 1px
    );
    background-position: 50% 50%;
    background-size: 1.1rem 1.1rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    padding: 50px;
    border-radius: 30px;
    &::before {
        content: "";
        height: 75px;
        width: 2px;
        background: linear-gradient(
            transparent,
            #2F4858,
            transparent
        );
        position: absolute;
        left: -2px;
        top: 65%;
        opacity: 0;
        transition: top 0.6s ease, opacity 0.6s ease;
    }
    &:hover::before {
    top: 25%;
    opacity: 1;
    }
`

const CardLink = styled(Link)`
    text-decoration: none;
    color: ${colors.fourth};
`

const Card = ( {title, description, link} ) => {
    return (
        <Container>
            <h3>{title}</h3>
            <Paragraph text={description} />
            <CardLink href={link} >{title}</CardLink>
        </Container>
    )
}

export default Card;