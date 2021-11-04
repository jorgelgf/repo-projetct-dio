import styled from "styled-components";

//usado prop-types para limitar o recebimento da informação
//nesse caso esta verificando para arquivo
//------------------------ Tipando propriedades
import { string, func } from "prop-types";
//-------------------------
import { Button } from "../button/Button";

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>-<Speaker>{speaker}</Speaker>
      <Button onClick={onUpdate}>Quote Jutsu</Button>
    </Wrapper>
  );
};

//usado prop-types para limitar o recebimento da informação
//nesse caso esta verificando para arquivo
Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 720px) {
    margin: 20px;
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 1rem;
  }
`;

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 10px;
`;
