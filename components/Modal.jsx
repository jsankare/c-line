import react, { useState } from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";


const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    position: relative;
    background-color: white;
    border-radius: 10px;
    width: auto;
    max-width: 90%;
    height: 700px;
    background-color: ${colors.secondary};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    @media (max-width : 768px) {
        width: 90%;
    }
`

const ModalCloseButton = styled.div`
    position: absolute;
    top: 26px;
    right: 32px;
    border: none;
    z-index: 10;
    background-color: ${colors.secondary};
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`

const StyledPicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    position: absolute;
    bottom: 10%;
    background-color: ${colors.primary};
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-size: 30px;
    &:hover{
        cursor: pointer;
    }
`

const Counter = styled.p`
    position: absolute;
    left: 45%;
    bottom: 1%;
    background-color: ${colors.primary};
    padding: 5px 10px;
    border-radius: 5px;
    color: black;
    font-size: 18px;
`

const Description = styled.p`
    position: absolute;
    font-size: 22px;
    background-color: white;
    width: 100%;
    padding: 5px;
    border-radius: 5px 5px 0 0;
    padding: 0px 40px;
`

const Modal = ({ isOpen, onClose, product, description, closeups }) => {
    if (!isOpen || !product || !closeups || !Array.isArray(closeups)) return null;

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? closeups.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === closeups.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Container onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalCloseButton onClick={onClose}>
                    <StyledIcon icon={faX} style={{ fontSize: '16px' }} />
                </ModalCloseButton>
                <StyledIcon onClick={prevImage} style={{ left: '10%' }} icon={faChevronLeft} />
                {closeups[currentImageIndex] && (
                    <StyledPicture src={closeups[currentImageIndex]} alt={closeups[currentImageIndex]} />
                )}
                <Counter>{`${currentImageIndex + 1} / ${closeups.length}`}</Counter>
                <StyledIcon onClick={nextImage} style={{ right: '10%' }} icon={faChevronRight} />
                <Description>{description}</Description>
            </ModalContent>
        </Container>
    )
}

export default Modal;
