import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [speech, setSpeech] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // redirect to /speech with speech as query param
    navigate(`/speech?speech=${speech}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="speech">Digite a fala: </label>
        <input
          type="text"
          name="speech"
          id="speech"
          value={speech}
          onChange={(e) => setSpeech(e.target.value)}
        />
        <button type="submit">Falar</button>
      </form>
    </div>
  );
}
