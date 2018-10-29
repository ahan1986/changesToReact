import React, { Component } from 'react'


export default function Oldway(props) {
    const [name, setName] = useState("Andrew");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    return (
        <section>
            <div>
                <input
                    value={name}
                    onChnage={handleNameChange}
                />
            </div>
        </section>
    )
}
