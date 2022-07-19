import { Link, useLocation } from "react-router-dom";
import {
  SpeechContainer,
  SpeechContent,
  WhyDoYouPutTheseParams,
} from "./styles";

/*
    this function will print a cow saying whatever is in the query params

    if the query params has tux=true, it will print a tux
*/

const cow = "https://c.tenor.com/iCgOuohU11kAAAAC/dancing-polish-cow-at4am.gif";
const tux = "https://live.staticflickr.com/3015/2576812640_fe00e4651a_m.jpg";

export function Speech() {
  const queryParams = new URLSearchParams(useLocation().search);
  const isTux = queryParams.get("tux") === "true";
  let speech = queryParams.get("speech");

  if (!speech) {
    speech = isTux
      ? "haha Linux >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Windows"
      : "- ..- -..- -...- - .-. ..- . / --.- ..- . .-. -.-- / .--. .- .-. .- -- ... / --. --- ---";
  }

  const filtredKeys = Array.from(queryParams.keys()).filter(
    (key) => key !== "speech" && key !== "tux"
  );

  const animal = isTux
    ? { src: tux, name: "Tux" }
    : { src: cow, name: "Polish cow" };

  return (
    <SpeechContainer>
      {isTux && <h1>🏆 U find a secret congrats 🏆 </h1>}

      <SpeechContent>
        <img src={animal.src} alt={animal.name} />
        <h2>{animal.name} says:</h2>
        <p>{speech}</p>
        {filtredKeys.length > 0 && (
          <div>
            <p>
              Bro, why are you using the parameters below if you don't
              need???????
            </p>
            <WhyDoYouPutTheseParams>
              {filtredKeys.map((key) => (
                <p key={key}>
                  {key} <span>→</span> {queryParams.get(key)}
                </p>
              ))}
            </WhyDoYouPutTheseParams>
          </div>
        )}

        <Link to="/">Voltar</Link>
      </SpeechContent>
    </SpeechContainer>
  );
}
