import react from "react";
import styled from "styled-components";
import MainTitle from "@/components/Layout/Title";
import ContactForm from "@/components/ContactForm";
import colors from "@/assets/colors";
import Heading from "@/components/Heading";

const Container = styled.section`
    background-color: ${colors.secondary};
`

const Contact = () => {
    return (
        <Container>
            <Heading title="Contact" subtitle="Remplissez le formulaire pour nous joindre" picture="/sendMail.png" />
            <ContactForm />
        </Container>
    )
}

export default Contact;
