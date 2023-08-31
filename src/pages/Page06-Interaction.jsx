export function Page06(){
    return(
        <section>
            <h2>Interaction</h2>
            <Button>Button 1</Button>
            <Button2>Buton 2</Button2>
            <Button2>Buton 2</Button2>
            <MessageButton message="Message 1">Message Button</MessageButton>
            <h3>Passing event handler callback functions</h3>
            <PlayButton/>
        </section>
    )
}

// user events: click, mouseover, mouseout...

function Button({children}){
    function handleClick(e){
        console.log(e.target);
    }
    return <button type="button" onClick={handleClick}>{children}</button>;
}

function Button2({children}){
    return (
        <button type="button" onClick={ (e) => {
            console.log("Button 2 clicked");
        }}>{children}</button>
    )
}

function Button3({children}){
    return (
        <button type="button" onClick={ () => {
            alert("Button 3");
        }}>{children}</button>
    )
}

function MessageButton({message, children}){
    return <button type="button" onClick={()=> console.log(message)}>{children}</button>;
}

// Passing event handler callback functions

function BaseButton({onClick, children}){
    return <button onClick={onClick}>{children}</button>
}

function PlayButton(){
    function handlePlay(){
        alert("Now playing...")
    }
    return <BaseButton onClick={handlePlay}>Play</BaseButton>
}

