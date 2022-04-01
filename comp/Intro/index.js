import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Job = styled.div`
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 30px;
`;

const Quote = styled.div`
    font-size: 18px;
    color: #FFFFFF;
    word-wrap: break-word;
    line-height: 25px;
    width: 40rem;
`;

const Intro = ({
    text = "Passionate about designing beautiful, functional, and simple user experiences. No matter what I’m working on, I’m invested.",
    job = "Am a UX/UI Designer and knowledgeable about Front-end Development.",
}) => {
    return <Cont>
        <Job>{job}</Job>
        <Quote>{text}</Quote>
    </Cont>
}

export default Intro;

