import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function BasicExample() {
  return (
    <div>
      <Header />
      <main className="pt-20 min-h-[calc(100vh)] bg-slate-100">
        <Outlet />
      </main>
    </div>
  );
}

export default BasicExample;
