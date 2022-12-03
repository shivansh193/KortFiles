import "./styles.css";
import Form from "./components/Form";
import CheckBox from "./components/checkBox";
import List from "./components/List";

export default function App() {
  return (
    <div className="App">
      <Form />
      <CheckBox />
      <List />
    </div>
  );
}
