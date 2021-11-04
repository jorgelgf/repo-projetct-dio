import { useState, useEffect, useRef } from "react";
import React from "react";
import styled from "styled-components";
import narutoImg from "../src/Image/naruto.png";
import { Quotes } from "./Componentes/quotes/Quotes";
import { getQuote } from "./services/quoteServices";
import jutso from "./sounds/jutso.mp3";
const audio = new Audio(jutso);

function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
    quote: "ok",
    speaker: "speaker",
  });
  const onUpdate = async () => {
    const quote = await getQuote();
    if (isMounted.current) {
      setQuoteState(quote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}

export default App;

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
