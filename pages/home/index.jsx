import { useState } from "react";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="screen">
      <h1>Blitz</h1>
    </div>
  );
}

export default App;
