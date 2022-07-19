import { Link, useLocation } from "react-router-dom";

/*
    this function will print a cow saying whatever is in the query params

    if the query params has tux=true, it will print a tux
*/

const cow = "https://c.tenor.com/iCgOuohU11kAAAAC/dancing-polish-cow-at4am.gif";
const tux = "https://live.staticflickr.com/3015/2576812640_fe00e4651a_m.jpg";

export function Speech() {
  const queryParams = new URLSearchParams(useLocation().search);
  const speech = queryParams.get("speech");
  const isTux = queryParams.get("tux") === "true";
  const filtredKeys = Array.from(queryParams.keys()).filter(
    (key) => key !== "speech" && key !== "tux"
  );
  const animal = isTux
    ? { src: tux, name: "Tux" }
    : { src: cow, name: "Polish cow" };

  return (
    <div>
      {isTux && <h1>🏆 U find a secret congrats 🏆 </h1>}

      <div>
        <img src={animal.src} alt={animal.name} />
        <p>
          {animal.name} says: {speech}
        </p>
        {filtredKeys.length > 0 && (
          <div>
            <p>
              Bro, why are you using the parameters below if you don't
              need???????
            </p>
            {filtredKeys.map((key) => (
              <p key={key}>
                {key} <span>→</span> {queryParams.get(key)}
              </p>
            ))}
          </div>
        )}
      </div>

      <Link to="/">Voltar</Link>
    </div>
  );
}
