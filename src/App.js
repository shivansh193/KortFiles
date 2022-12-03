import "./styles.css";
import Notif from "./components/notif";
export default function App() {
  return (
    <div className="App">
      <Notif
        proposer="Supreme Court of USA"
        reason="For being deadly hot"
        deadline="2 days 17 hour 16 minutes 48 seconds"
      />
    </div>
  );
}
