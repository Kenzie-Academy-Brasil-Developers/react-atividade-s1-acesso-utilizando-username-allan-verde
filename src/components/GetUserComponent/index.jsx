import { useState } from 'react'

const GetUserComponet = ( { setUser, setIsLoggedIn } ) => {
    const [userInput, setUserInput] = useState('')

    function HandleLogin(user) {
        setUser(user)
        setIsLoggedIn(true)
    }

    return (

        <form>
            <input type='text'
            value={userInput} 
            onChange={(event) => setUserInput(event.target.value)}/>
            <button onClick={() => HandleLogin(userInput)}>Acessar com nome</button>
        </form>
    
    )

}

export default GetUserComponet