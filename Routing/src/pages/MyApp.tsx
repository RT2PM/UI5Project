import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import reactLogo from "../assets/reactLogo.svg";
import profilePicture from "../assets/profilePicture.svg";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function MyApp() {
    const navigate = useNavigate(); // Добавить хук навигации

    // Функция для клика по логотипу
    const handleLogoClick = () => {
        navigate("/"); // или navigate("/home")
    };
    return (
        <>
            // Можно добавить дополнительные элементы навигации в ShellBar
            <ShellBar
                logo={<img src={reactLogo} alt="Company Logo" />}
                profile={
                    <Avatar>
                        <img src={profilePicture} alt="User Avatar" />
                    </Avatar>
                }
                primaryTitle="Some App"
                onLogoClick={handleLogoClick}
            >
                <ShellBarItem
                    icon={activateIcon}
                    text="Activate"
                />
                <ShellBarItem
                    icon="home"
                    text="Home"
                    onClick={() => navigate("/home")}
                />
                <ShellBarItem
                    icon="detail-view"
                    text="Detail"
                    onClick={() => navigate("/detail")}
                />
            </ShellBar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </>
    );
}
