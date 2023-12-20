import react from "react";
import styled from "styled-components";
import Input from "./Inputs/Input";
import SelectInput from "./Inputs/Select";
import MainTitle from "./Layout/Title";
import ValidateInput from "./Inputs/Validate";
import TextArea from "./Inputs/TextArea";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    padding: 50px 0;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    max-width: 20%;
    width: 100%;
`

const ContactForm = () => {

    const options = ["Un autre raison", "Question sur les produits", "Problème sur le site"];
    
    return (
        <Container>
            <MainTitle title="Pour nous joindre" />
            <StyledForm>
                <Input input="firstName" label="Prénom" placeholder="Barnabé" />
                <Input input="lastName" label="Nom" placeholder="Montgommery" />
                <Input input="email" label="Email" placeholder="monadresse@mail.com" />
                <SelectInput input="reason" label="Raison de votre message" options={options} />
                <TextArea input="message" label="Message" placeholder="Entrez votre message ici" />
                <ValidateInput text="Envoyer" />
            </StyledForm>
        </Container>
    )
}

export default ContactForm;
