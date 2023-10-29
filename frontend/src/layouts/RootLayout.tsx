import { HeaderSimple } from "../components/Header";
import { PATHS } from "../constants/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => (
    <div>
        <HeaderSimple links={PATHS} />
        <div>
            <Outlet />
        </div>
    </div>
);

export default RootLayout;
