import { Link, useLocation } from "react-router-dom";

import gigacow from "../../assets/ascii/gigacow.gif";
import { UselessParameterList } from "../../components/UselessParameterList/UselessParameterList";
import { SpeechContainer, SpeechContent } from "./styles";

/*
    this function will print a cow saying whatever is in the query params

    if the query params has tux=true, it will print a tux
*/

const cow = "https://c.tenor.com/iCgOuohU11kAAAAC/dancing-polish-cow-at4am.gif";
const tux = "https://live.staticflickr.com/3015/2576812640_fe00e4651a_m.jpg";

const RESERVED_QUERY_PARAMS = ["tux", "speech", "ascii"];

export function Speech() {
  const queryParams = new URLSearchParams(useLocation().search);
  const isTux = queryParams.get("tux") === "true";
  const isAscii = queryParams.get("ascii") === "true";
  let speech = queryParams.get("speech");

  if (!speech) {
    speech = isTux
      ? ".... .- ...- . / -.-- --- ..- / - .-. .. . -.. / .--. ..- - - .. -. --. / .- ... -.-. .. .. -...- - .-. ..- . ..--.."
      : "- ..- -..- -...- - .-. ..- . / --.- ..- . .-. -.-- / .--. .- .-. .- -- ... / --. --- ---";
  }

  const filtredKeysAndValues = Array.from(queryParams.entries()).filter(
    ([key]) => !RESERVED_QUERY_PARAMS.includes(key) // filter out reserved query params
  );

  const animal = isTux
    ? { src: tux, name: "Tux" }
    : isAscii
    ? { src: gigacow, name: "GigaCow" }
    : { src: cow, name: "Polish Cow" };

  return (
    <SpeechContainer>
      {(isTux || isAscii) && <h1>🏆 U find a secret congrats 🏆 </h1>}

      <SpeechContent>
        <img src={animal.src} alt={animal.name} />
        <h2>{animal.name} says:</h2>
        <p>{speech}</p>

        <UselessParameterList parameters={filtredKeysAndValues} />

        <Link to="/">Voltar</Link>
      </SpeechContent>
    </SpeechContainer>
  );
}
