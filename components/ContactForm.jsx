import react from "react";
import styled from "styled-components";
import Input from "./Inputs/Input";
import SelectInput from "./Inputs/Select";
import MainTitle from "./Layout/Title";
import ValidateInput from "./Inputs/Validate";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
`

const ContactForm = () => {

    const options = ["Option 1", "Option 2", "Option 3"];
    
    return (
        <Container>
            <MainTitle title="Pour nous joindre" />
            <StyledForm>
                <Grid>
                    <Input input="firstName" label="Prénom" />
                    <Input input="lastName" label="Nom" />
                    <Input input="email" label="Email" />
                    <Input input="phone" label="Téléphone" />
                    <Input input="adress" label="Adresse" />
                    <Input input="city" label="Ville" />
                    <Input input="zip" label="Code Postal" />
                    <SelectInput input="reason" label="Raison de votre message" options={options} />
                </Grid>
                <ValidateInput text="Envoyer" />
            </StyledForm>
        </Container>
    )
}

export default ContactForm;
