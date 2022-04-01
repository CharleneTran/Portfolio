import styled from 'styled-components';

//components
import NavBar from '../comp/NavBar';
import Intro from '../comp/Intro';
import Card from '../comp/Card';
import Title from '../comp/Title';

//styles
import styles from '../styles/styles.module.css';


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: #000;
`;

//NAV BAR
const TopCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//INTRODUCTION
const MidCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Name = styled.h1`
  margin-bottom: 10px;
`;

const BotCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  background: #000;
`;

export default function Home() {
  return (
    <Cont>
      <TopCont>
        <NavBar />
      </TopCont>

      <MidCont>         
        <Name className={styles.Name}>
          <h1><span> I' </span> M <span>CHARLENE</span></h1>
        </Name> 

        <Intro />
      </MidCont>

      <BotCont>
        <Title />
        <Card />
      </BotCont>

    </Cont>
  )
}
