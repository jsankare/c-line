import react from "react";
import styled from "styled-components";
import SubTitle from "./Layout/SubTitle";
import Paragraph from "./Layout/Paragraph";
import Link from "next/link";
import colors from "@/assets/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
    gap: 50px;
    @media (max-width : 768px) {
        flex-direction: column;
    }
`

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 50%;
    @media (max-width : 768px) {
        max-width: 80%;
    }
`

const Picture = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: 50% 50%;
`

const PicWrapper = styled.div`
    flex: 1;
    max-height: 250px;
    overflow: hidden;
    border-radius: 15px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width : 768px) {
        border-radius: 0px;
    }
`

const ArgumentsList = styled.ul`
    line-height: 20px;
    list-style: none;
    padding: 0;
`

const ArgumentItem = styled.li`
    margin-bottom: 5px;
    display: flex;
    gap: 10px;
    align-items: center;
`

const StyledLink = styled(Link)`
    position: absolute;
    font-size: 16px;
    z-index: 10;
    bottom: 10px;
    right: ${(props) => (props.reversed ? "65%" : "3%")};
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    background-color: ${colors.primary};
    transition: ease-in-out 0.2s;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    &:hover {
        background-color: black;
        color: ${colors.primary};
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 20px;
`


const Service = ( {title, description, picture, reversedLayout, arguments: serviceArguments, link} ) => {
    return (
        <Container reversed={reversedLayout} >
            <Content>
                <SubTitle title={title} />
                <Paragraph text={description} />
                <ArgumentsList>
                    {serviceArguments.map((arg, index) => (
                        <ArgumentItem key={index}> <StyledIcon icon={faHandPointRight} /> {arg}</ArgumentItem>
                    ))}
                </ArgumentsList>
            </Content>
            <PicWrapper>
                <Picture src={picture} />
                <StyledLink reversed={reversedLayout} href={link} >En apprendre plus</StyledLink>
            </PicWrapper>
        </Container>
    )
}

export default Service;
