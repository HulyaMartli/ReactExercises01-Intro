export function Page06() {
    return (
        <section>
            <h2>Interaction</h2>
            <Button>Button 1</Button>
            <Button2>Buton 2</Button2>
            <Button2>Buton 2</Button2>
            <MessageButton message="Message 1">Message Button</MessageButton>
            <h3>Passing event handler callback functions</h3>
            <PlayButton />
            <UploadButton />
            <h3>Event propagation</h3>
            <NavBar />
            <h4>Preventing event propagation with stopPropagation</h4>
            <NavBar2 />
            <h3>Event preventing default behaviour</h3>
            <FormLogin/>
        </section>
    )
}

// user events: click, mouseover, mouseout...

function Button({ children }) {
    function handleClick(e) {
        console.log(e.target);
    }
    return <button type="button" onClick={handleClick}>{children}</button>;
}

function Button2({ children }) {
    return (
        <button type="button" onClick={(e) => {
            console.log("Button 2 clicked");
        }}>{children}</button>
    )
}

function Button3({ children }) {
    return (
        <button type="button" onClick={() => {
            alert("Button 3");
        }}>{children}</button>
    )
}

function MessageButton({ message, children }) {
    return <button type="button" onClick={() => console.log(message)}>{children}</button>;
}

// Passing event handler callback functions

function BaseButton({ onSmash, children }) {
    return <button onClick={onSmash}>{children}</button>
}

function PlayButton() {
    function handlePlay() {
        alert("Now playing...");
    }
    return <BaseButton onSmash={handlePlay}>Play</BaseButton>
}

function UploadButton() {
    function handleUpload() {
        alert("Uploading now...");
    }
    return <BaseButton onSmash={handleUpload}>Upload</BaseButton>
}

// Event propagation - olayın yayılması bir problemdir
// buttonlara tıklandığında navbar onclick de çalışır
function NavBar() {
    const navBarStyles = {
        border: "2px solid red",
        backgroundColor: "pink",
        padding: "16px",
    };
    return (
        <nav style={navBarStyles} onClick={() => alert("I am navbar!")}>
            <button type="button" onClick={() => alert("I am navbar button 1.")}>NavBar Button 1</button>
            <button type="button" onClick={() => alert("I am navbar button 2.")}>NavBar Button 2</button>
        </nav>
    )
}

// PREVENTING EVENT PROPAGATION
function NavBar2() {
    const navBarStyles = {
        border: "2px solid red",
        backgroundColor: "pink",
        padding: "16px",
    };
    return (
        <nav style={navBarStyles} onClick={() => alert("I am navbar!")}>
            <button type="button" onClick={(e) => {
                e.stopPropagation();
                alert("I am navbar button 1.");
            }}>
                NavBar Button 1
            </button>
            <button type="button" onClick={(e) => {
                e.stopPropagation();
                alert("I am navbar button 2.");
            }}>
                NavBar Button 2
            </button>
        </nav>
    )
}

// Event preventing default behaviour

function FormLogin(){
    return (
        <form onSubmit={(e)=>{e.preventDefault(); console.log("Form submission prevented.")}}>
            <h4>Login</h4>
            <input type="text" name="firstName"  placeholder="Your first name"/>
            <input type="text" name="lastName"  placeholder="Your last name"/>

            <button type="submit">Send</button>
        </form>
    )
}
