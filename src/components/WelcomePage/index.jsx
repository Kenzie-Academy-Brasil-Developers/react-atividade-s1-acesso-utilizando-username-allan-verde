const WelcomePage = ( { use, setIsLoggedIn } ) => {
    function HandleLogout() {
        setIsLoggedIn(false)
        console.log('ok')
    }
    return (

        <>
            <h2>Welcome {use}!</h2>
            <button onClick={HandleLogout} >clique aqui</button>
        </>

    )
}

export default WelcomePage