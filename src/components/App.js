import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [loading, setLoading] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then((Response) => Response.json())
        .then((data) =>{
            setTimeout(() =>{
                setUserData(data.results);
                setLoading(false);
            }, 3000);
        })
    }, []);

    return (
        <div className="App">
            {loading ?(
                <div id="loading">Loading....</div>
            ): (
                <User userData={userData} />
            )}
            </div>
    )
};

function User({ userData }) {
    return(
        <div>
            {userData.map((user, index) => (
                <div key={index} className="user">
                    {user.name.first}
                </div>
            ))}
        </div>
    );
}

export default App;
