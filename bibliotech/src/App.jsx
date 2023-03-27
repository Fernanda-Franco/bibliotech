import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Root } from "./pages/Root/Root";

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root />}/>
                        <Route path="/" element={<Home />}>
                    </Route>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/cadastro" element={<Cadastro />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}