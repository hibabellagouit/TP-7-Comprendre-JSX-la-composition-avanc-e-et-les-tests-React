import { render, screen } from "@testing-library/react";
import withTimestamp from "./withTimestamp";

// Faux composant pour le test
function DummyComponent({ text }) {
  return <p>{text}</p>;
}

test("withTimestamp ajoute un timestamp et rend le composant d'origine", () => {
  const Wrapped = withTimestamp(DummyComponent);

  render(<Wrapped text="Hello Test" />);

  // Vérifie le rendu du composant enfant
  expect(screen.getByText("Hello Test")).toBeInTheDocument();

  // Vérifie la présence de la ligne du timestamp
  expect(screen.getByText(/Rendu à :/i)).toBeInTheDocument();
});
