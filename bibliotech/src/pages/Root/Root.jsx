import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";

//Layout principal do App com o Navbar fixa
//As paginas com Navbar fixa: home, livros, emprestimos

export function Root() {
    return (
    <>
    <header>
        <Menu />
    </header>
    <main>
        <Outlet />
    </main>
    </>
    );
}