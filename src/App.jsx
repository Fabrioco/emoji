import { Home } from "./components/Home";
import "./App.css";
import Context from "./contextEmoji/context.jsx";

export default function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}
