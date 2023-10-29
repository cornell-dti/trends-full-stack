import AboutPage from "../pages/About";
import Feature from "../pages/Feature";
import HomePage from "../pages/Home";

export const PATHS: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    {
        link: "/",
        label: "Home",
        element: <HomePage />,
    },
    {
        link: "/about",
        label: "About",
        element: <AboutPage />,
    },
    {
        link: "/feature",
        label: "Feature",
        element: <Feature />,
    },
];
