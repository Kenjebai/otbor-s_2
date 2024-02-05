import React, { useEffect, useState } from "react";

function Pokemon(){
    const[list, setList] = useState([])
    const addList = async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6")
        const data = await response.json()
        setList(data.results)
        console.log(data.results);
    }
    useEffect(() => {
        addList()
    })
    return(
        <div>
            <h2>Pokemon</h2>
            {/* <button onClick={addList}>add</button> */}
                <div className="post">
                    {list.map((el, index) => (
                        <div className="list" key={index}>
                            <img src={el.url} alt="photo" />
                            <span>{el.name}</span>
                        </div>
                    ))}
                </div>
        </div>
    )
};

export default Pokemon
