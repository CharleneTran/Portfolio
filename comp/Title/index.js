import React from 'react';
import styled from "styled-components";

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: ${props => props.headingColor}
`;

const Title = ({
    headingColor= "#FFF",
    headingTxt = "Project Featured",
}) => {
    // const router = useRouter();

    return <Cont>
        <Heading headingColor={headingColor}>{headingTxt}</Heading>
    </Cont>
}

export default Title;

