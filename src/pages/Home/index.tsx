import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, HomeContainer } from "./styles";

export function Home() {
  const [speech, setSpeech] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // redirect to /speech with speech as query param
    navigate(`/speech?speech=${speech}`);
  }

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="speech">Digite a fala: </label>
        <input
          type="text"
          name="speech"
          id="speech"
          value={speech}
          onChange={(e) => setSpeech(e.target.value)}
        />
        <button type="submit">Falar</button>
      </FormContainer>
    </HomeContainer>
  );
}
