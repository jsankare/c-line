import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import MainTitle from "./Layout/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Input from "./Inputs/Input";
import ValidateInput from "./Inputs/Validate";
import TextArea from "./Inputs/TextArea";

const StyledAside = styled.aside`
    align-self: stretch;
    background-color: ${colors.fourth};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    padding: 20px;
    flex: 1;
    @media (max-width : 1340px) {
        gap: 5%;
    }
    @media (max-width : 1080px) {
        gap: 2%;
    }
    @media (max-width : 1024px) {
        gap: 15px;
    }
    @media (max-width : 768px) {
        gap: 20px;
    }
`

const Container = styled.section`
    background-color: ${colors.secondary};
    border-radius: 10px;
    min-height: 80vh;
    display: flex;
    align-items: stretch;
    gap: 50px;
    @media (max-width : 870px) {
        flex-direction: column;
    }
`


const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    flex: 4;
    padding: 20px 0px;
    @media (max-width : 768px) {
        padding: 20px;
    }
`

const Item = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0px 15px;
`

const ItemDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 100px;
    font-size: 20px;
    font-weight: bold;
    @media (max-width : 570px) {
        gap: 50px;
    }
    @media (max-width : 570px) {
        grid-template-columns: 1fr 1fr;
    }
`

const ItemValue = styled.p`
    font-weight: bold;
`


const TotalPrice = styled.p`
    font-weight: bold;
    text-align: right;
    margin-top: 20px;
    font-size: 28px;
`

const ItemDetailFlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const ItemDetailCollumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    max-width: 200px;
`

const EmptyCartAlert = styled.p`
    font-size: 18px;
    text-align: center;
`

const CollumnHeader = styled.p`
    font-weight: bold;
    font-size: 20px;
    justify-self: start;
`

const ModifyCartItemButton = styled.button`
    background-color: ${colors.fourth};
    border: none;
    border-radius: 5px;
    background-color: ${colors.secondary};
    font-size: 22px;
    &:hover {
        cursor: pointer;
    }
    &:active{
        font-size: 20px;
    }
`

const CartButton = styled.button`
    background-color: ${colors.fourth};
    border: none;
    width: fit-content;
    border-radius: 5px;
    background-color: ${colors.secondary};
    font-size: 18px;
    background-color: ${colors.primary};
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover {
        cursor: pointer;
    }
    &:active{
        font-size: 16px;
    }
`

const ProductImage = styled.img`
    width: 100%;
    max-width: 250px;
    max-height: 200px;
    border-radius: 5px;
    @media (max-width : 870px) {
        display: none;
    }
`

const Separator = styled.div`
    width: 80%;
    height: 1px;
    background-color: black;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${colors.secondary};
    padding: 20px;
    border-radius: 5px;
    min-width: 80%;
`

const Cart = () => {
    const [cart, setCart] = useState({});
    let totalPrice = 0;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartData = JSON.parse(localStorage.getItem("cart")) || {};
            setCart(cartData);
        }
    }, []);

    const removeItem = (title) => {
        const updatedCart = { ...cart };
        if (updatedCart[title].quantity > 1) {
            updatedCart[title].quantity -= 1;
        } else {
            delete updatedCart[title];
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const addItem = (title) => {
        const updatedCart = { ...cart };
        if (updatedCart[title]) {
            updatedCart[title].quantity += 1;
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const emptyCart = () => {
        const updatedCart = {};
        setCart(updatedCart)
        localStorage.removeItem("cart")
    };

    return (
        <Container>
            <CartWrapper>
            <MainTitle title="Votre panier" />
                {Object.keys(cart).length > 0 ? (
                    Object.keys(cart).map((title, index) => {
                        const { price, quantity, picture } = cart[title];
                        const itemTotal = price * quantity;
                        totalPrice += itemTotal;

                        return (
                            <Item key={index}>
                                <ItemDetails>
                                    <ItemDetailCollumnWrapper>
                                        <CollumnHeader>Produit</CollumnHeader>
                                        <ProductImage
                                            src={picture}
                                            alt={title}
                                            width="50"
                                            height="50"
                                        />
                                        <ItemValue>{title}</ItemValue>{" "}
                                    </ItemDetailCollumnWrapper>
                                    <ItemDetailCollumnWrapper>
                                        <CollumnHeader>Prix</CollumnHeader>
                                        <ItemValue>{price} €</ItemValue>{" "}
                                    </ItemDetailCollumnWrapper>
                                    <ItemDetailCollumnWrapper>
                                        <CollumnHeader>Quantité</CollumnHeader>
                                        <ItemDetailFlexWrapper>
                                            {quantity === 1 ? (
                                                <ModifyCartItemButton onClick={() => removeItem(title)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </ModifyCartItemButton>
                                            ) : (
                                                <ModifyCartItemButton onClick={() => removeItem(title)}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </ModifyCartItemButton>
                                            )}
                                            <ItemValue>{quantity}</ItemValue>
                                            <ModifyCartItemButton onClick={() => addItem(title)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </ModifyCartItemButton>
                                        </ItemDetailFlexWrapper>
                                    </ItemDetailCollumnWrapper>
                                    <ItemDetailCollumnWrapper>
                                        <CollumnHeader>Total</CollumnHeader>
                                        <ItemValue>{price * quantity} €</ItemValue>
                                    </ItemDetailCollumnWrapper>
                                </ItemDetails>
                                <Separator />
                            </Item>
                        );
                    })
                ) : (
                    <EmptyCartAlert>Votre panier est vide</EmptyCartAlert>
                )}
            </CartWrapper>
            {Object.keys(cart).length > 0 && (
            <StyledAside>
                <TotalPrice>Total: {totalPrice} €</TotalPrice>
                <CartButton onClick={emptyCart} >Vider tout le panier</CartButton> 
                <StyledForm>
                    <Input input="email" label="Email" />
                    <Input input="firstName" label="Prénom" />
                    <Input input="lastName" label="Nom" />
                    <Input input="phone" label="Téléphone" />
                    <TextArea input="customs" label="Souhaits de personnalisation" />
                    <ValidateInput input="order" text="Envoyer ma commande" />
                </StyledForm>
            </StyledAside>
                )}
        </Container>
    );
};

export default Cart;
