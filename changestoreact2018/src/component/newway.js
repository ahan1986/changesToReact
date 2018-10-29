import React, { useState } from 'react'

// useState is a hook provided by React.  Hook is a function that lets you look into react features from your function compontents

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
