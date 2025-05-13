import { useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import MainRouters from "./pages";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="bg-black">
         <MainRouters />
         <Toaster position="top-center" reverseOrder={false} />
      </div>
   );
}

export default App;
