import Weather from "../pages/Weather";
import Counter from "../pages/Counter";
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
        link: "/weather",
        label: "Weather",
        element: <Weather />,
    },
    {
        link: "/counter",
        label: "Counter",
        element: <Counter />,
    },
];
