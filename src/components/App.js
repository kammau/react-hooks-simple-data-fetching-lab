// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [imgOfDog, setImgOfDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setImgOfDog(data.message);
            setIsLoaded(true);
        })
    }, []);

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <img src={imgOfDog} alt="A Random Dog"></img>
    )
}

export default App