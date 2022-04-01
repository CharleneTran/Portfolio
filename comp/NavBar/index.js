import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;

const NavBarCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80vw;
    height: 5rem;
`;

const Logo = styled.h1`
    display: flex;
    align-items: center;
    flex: 4;
    color: #FFFFFF;
    font-size: 28px;
    font-weight: bold;
    &:hover {
        color: #888B91;
    }
`;

const ItemCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 3;
`;

const NavBarItem = styled.h1`
    font-size: 16px;
    font-weight: normal;
    color: #FFFFFF;
    &:hover {
        color: #888B91;
        text-decoration: underline;
    }
    &:focus {
        color: #888B91;
        text-decoration: underline;
    }
`;

const InfoItem = styled.img`
    width: 28px;
    height: 28px;
    &:hover {
        cursor: pointer;
    }
`;
const NavBar = ({
    LinkedinDM= "/linkedin-DM.png",
    EmailLM= "/email-DM.png",
}) => {
    const router = useRouter();

    return <Cont>
        <NavBarCont>
            <Logo onClick={() => router.push('/')}>Charlene Tran</Logo>
            <ItemCont>
                <NavBarItem>UX/UI DESIGNER</NavBarItem>
                <NavBarItem>DIGITAL ART</NavBarItem>
                <NavBarItem>ABOUT</NavBarItem>
                <InfoItem src={LinkedinDM}></InfoItem>
                <InfoItem src={EmailLM}></InfoItem>
            </ItemCont>
        </NavBarCont>
    </Cont>
}

export default NavBar;

