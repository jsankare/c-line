import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '@/assets/colors';

const growAnimation = keyframes`
    from {
        transform: scaleX(0);
    }
`;

const QuoteIcon = styled(FontAwesomeIcon)`
    font-size: 26px;
    width: 30px;
    color: rgba(255, 255, 255, 0.4);
    position: absolute;
    line-height: 1;
    transform: translateY(-50%);
    transition : ease-in-out 0.2s;

    &.fa-quote-left {
        left: 20px;
        transition: top 0.2s ease-in-out;
        top: 35%;
    }

    &.fa-quote-right {
        right: 20px;
        transition: top 0.2s ease-in-out;
        top: 35%;
    }
`;

const TestimonialsContainer = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #fff;
    background-color: ${colors.primary};
    max-width: 700px;
    margin: 20px auto;
    padding: 50px 80px;
    border-radius: 15px;
    position: relative;
    transition: ease-in-out 0.2s;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        & ${QuoteIcon} {
            color: white;
        }
    }
`;

const ProgressBar = styled.div`
    background: #fff;
    width: 100%;
    height: 4px;
    animation: ${growAnimation} 10s linear infinite;
    transform-origin: left;
`;

const TestimonialText = styled.p`
    text-align: justify;
    line-height: 28px;
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`;

const UserDetails = styled.div`
    margin-left: 10px;
`;

const Username = styled.h4`
    margin: 0;
    font-size: 24px;
`;

const CenteredItems = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
`;

const TestimonialSlider = ({ reviews }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [reviews]);

    return (
        <TestimonialsContainer>
            <QuoteIcon icon={faQuoteRight} className="fa-quote-right fa-quote" />
            <QuoteIcon icon={faQuoteLeft} className="fa-quote-left fa-quote" />
            <ProgressBar className="progress-bar" />
            <TestimonialText>{reviews[index].content}</TestimonialText>
            <CenteredItems>
                <Logo src={reviews[index].photo} alt="logo" className="logo" />
                <UserDetails>
                    <Username>{reviews[index].name}</Username>
                </UserDetails>
            </CenteredItems>
        </TestimonialsContainer>
    );
};

export default TestimonialSlider;
