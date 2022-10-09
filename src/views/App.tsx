import Header from "../components/Header";
import "../styles/index.css";
import { Outlet } from "react-router-dom";
import {} from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="overflow-hidden mx-auto max-w-screen-sm relative shadow-lg min-h-screen max-h-screen">
        {/* Header */}
        <Header></Header>

        {/* Body */}
        <main className="h-[100vh] overflow-y-auto pt-12">
          <Outlet></Outlet>
        </main>

        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
