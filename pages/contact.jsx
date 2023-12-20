import react from "react";
import styled from "styled-components";
import MainTitle from "@/components/Layout/Title";
import ContactForm from "@/components/ContactForm";
import colors from "@/assets/colors";

const Container = styled.section`
    background-color: ${colors.secondary};
    min-height: 80vh;
    display: flex;
`

const Contact = () => {
    return (
        <Container>
            <ContactForm />
        </Container>
    )
}

export default Contact;
