import react from "react";
import styled from "styled-components";
import SubTitle from "./Layout/SubTitle";
import Paragraph from "./Layout/Paragraph";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
    gap: 50px;
`

const Content = styled.div`
    flex: 1;
    max-width: 50%;
`

const Picture = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
`

const ArgumentsList = styled.ul`
    list-style: none;
    padding: 0;
`

const ArgumentItem = styled.li`
    margin-bottom: 5px;
`

const Service = ( {title, description, picture, reversedLayout, arguments: serviceArguments} ) => {
    return (
        <Container reversed={reversedLayout} >
            <Content>
                <SubTitle title={title} />
                <Paragraph text={description} />
                <ArgumentsList>
                    {serviceArguments.map((arg, index) => (
                        <ArgumentItem key={index}>{arg}</ArgumentItem>
                    ))}
                </ArgumentsList>
            </Content>
            <Picture src={picture} />
        </Container>
    )
}

export default Service;
