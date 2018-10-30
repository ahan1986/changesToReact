import React, { useState } from 'react'

// useState is a hook provided by React.  Hook is a function that lets you look into react features from your function compontents

export default function Oldway(props) {
    // setName ( ??? ) === setState({ name: ??? })
    //when we call setName or setSurname, it tells react to re-render this component just like if we called setState. so next time react renders the component, it is going to pass the current name and surname to the component and we can use access it quickly instead of using setState.
    const [name, setName] = useState("Andrew"); // inside the parameters for useState is the initial value
    const [surname, setSurname] = useState("Han");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handlesurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
        <section>
            <div>
                <input
                    value={name}
                    onChange={handleNameChange}
                />
            </div>

            <div>
                <input
                    value={surname}
                    onChange={handlesurnameChange}
                />
            </div>
        </section>
    )
}
