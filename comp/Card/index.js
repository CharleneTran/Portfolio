import React from 'react';
import styled from "styled-components";

const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectCont = styled.div`
    display: flex;
    flex-direction: row;
`;

const Project = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;
    width: 500px;
    background: pink;
    border-radius: 20px;

    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Card = ({
    
}) => {
    // const router = useRouter();

    return <Cont>
        <ProjectCont>
            <Project></Project>
            <Project></Project>
        </ProjectCont>
        <ProjectCont>
            <Project></Project>
            <Project></Project>
        </ProjectCont>
    </Cont>
}

export default Card;

