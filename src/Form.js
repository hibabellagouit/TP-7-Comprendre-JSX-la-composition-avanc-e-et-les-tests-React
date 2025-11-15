import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Le nom est obligatoire");
      return;
    }

    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Envoyer</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}

export default Form;
