import "./App.css";
import Form from "./components/Form";
import Dialog from "./components/Dialog";

function App() {
  return (
    <div className="main">
      {/* <Dialog id1="selectZone1" id2="selectZone2" /> */}
      <Form id1="selectZone1" id2="selectZone2" />
    </div>
  );
}

export default App;
