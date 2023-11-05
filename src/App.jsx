import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import IconYoutube from "./images/icon-youtube.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/xFlUVnt87igEkyiS/scene.splinecode"
      />

      <Content>
        <Menu>
          <li>
            <a href=""> Home </a>
          </li>
          <li>
            <a href=""> Download </a>
          </li>
          <li>
            <a href=""> App </a>
          </li>
          <li>
            <a href=""> Login </a>
          </li>
          <li>
            <button> Get Started </button>
          </li>
        </Menu>
        <h1>Control your website easier!</h1>
        <p>
          Control your website using our admin panel! Cross-platform application
          for all OS!
        </p>

        <button>
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/laptop.png"
            alt="laptop"
          />
          Download for Windows
        </button>
      </Content>
      <Social>
        <div />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  color: white;

  .spline {
    position: absolute;
    top: 0;
    margin: 0;
    right: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  h1 {
    font-family: monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }
  p {
    font-weigth: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  li {
    list-style: none;
    margin: 0;
  }
  a {
    text-decoration: none;
    padding: 8px 20px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 14px;
    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

const Social = styled.div`
  position: absolte;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57,
      #1306dd 65.86,
      #aa0eb2 100%
    );
  }
`;
