import { HashRouter } from "react-router-dom";
import { MyApp } from "./pages/MyApp";

export function App() {
    return (
        <HashRouter>
            <MyApp />
        </HashRouter>
    );
}