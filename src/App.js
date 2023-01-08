import "./App.css";
import Button from "./components/Button";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div className="p-4">
      <div className="m-4">
        <Button>Default</Button>
      </div>
      <div className="m-4">
        <Button variant="outline">Default</Button>
      </div>
      <div className="m-4">
        <Button variant="text">Default</Button>
      </div>
      <div className="flex">
        <div className="mr-4">
          <Button disabled>Disabled</Button>
        </div>
        <div className="mr-4">
          <Button variant="text" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div className="m-4">
        <Button color="primary" size="md" startIcon={<FaBeer />}>
          Mediam
        </Button>
      </div>
      <div className="m-4">
        <Button color="primary" size="md" endIcon={<FaBeer />}>
          Mediam
        </Button>
      </div>
      {/* <Button color="primary">Default</Button>
      <Button color="secondary">Default</Button>
      <Button color="default">Default</Button> */}

      <div className="flex">
        <div className="mr-4">
          <Button color="primary" size="sm">
            Small
          </Button>
        </div>
        <div className="mr-4">
          <Button color="primary" size="md">
            Mediam
          </Button>
        </div>
        <div className="mr-4">
          <Button color="primary" size="lg">
            Large
          </Button>
        </div>
      </div>

      <Button color="primary" size="md" endIcon={<FaBeer />}>
        Mediam
      </Button>
    </div>
  );
}

export default App;
