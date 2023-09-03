import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {}, []);

    return <Users isLoading={isLoading} items={items} />;
};

export default App;
