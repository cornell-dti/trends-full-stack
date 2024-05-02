import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from "../constants/Navigation";

const getAllUsers = () =>
    fetch(`${BACKEND_BASE_PATH}/get-all-users`)
        .then(async (res) => {
            const jsonRes = await res.json();
            console.log("Retrieved", jsonRes);
            return jsonRes;
        })
        .catch((err) => {
            console.log("Errored out", err);
        });

const Users = () => {
    const [res, setRes] = useState(null);

    useEffect(() => {
        console.log("Loading all users...");
        getAllUsers().then((data) => setRes(data));
    }, []);

    return (
        <div>
            <h1>All Users:</h1>
            <p>{res ?? "Loading..."}</p>
        </div>
    );
};

export default Users;
