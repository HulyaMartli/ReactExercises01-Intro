export function Page02() {
    return (
        <section>
            <h2>Passing properties to a component</h2>
            <CustomButton content="Test" />
            <CustomButton content="Try" />
            <Card theme="dark" size="lg" hasBorder={false} />
            <Card2 theme="light" size="sm" hasBorder={true} />
            <Card3 theme="dark" size="md" hasBorder={false} />
            <Card4 />
            <hr />
            <h3>Children property</h3>
            <p>Komponentlerimizi iki parçalı (açılış ve kapanış parçaları) jsx etiketi olarak yazdığımızda, react komponentinin çocuk öğelerini children property adı ile gönderecektir.</p>
            <NavBar theme="dark" size="lg"> {/* { theme:"dark", size:"lg", children: "I am first navbar."} */}
                I am first navbar.
            </NavBar>
            <NavBar theme="dark" size="lg">
                I am second navbar.
            </NavBar>
            <NavBar theme="dark" size="lg"> {/* { theme:"dark", size:"lg", children: [CustomButton1, CustomButton2,..]} */}
                <CustomButton content="Navbar btn1" />
                <CustomButton content="Navbar btn2" />
                <CustomButton content="Navbar btn3" />
            </NavBar>
            <hr />
            <h3>Forwarding props via spread operator/syntax</h3>
            <Profile person="Hulya" size="md" theme="light" hasBorder="false" isSepia="false"/>
        </section>
    )
}

function CustomButton(props) {
    console.log(props)
    return <button type="button">{props.content}</button>
}

function Card(props) {
    const theme = props.theme;
    const hasBorder = props.hasBorder;
    const size = props.size;

    return <div>I am a card component.</div>
}

function Card2(props) {

    return <div>I am a card component {props.theme} {props.size} {props.hasBorder}.</div>
}

function Card3(props) {
    const { theme, size, hasBorder } = props;

    return <div>I am a card component with {theme} theme, size of {size} and {hasBorder} border.</div>
}

// parametre parantezi içerisinde gelen props objesinin keylerini
// destructuring ile alabiliriz.
function Card4({ theme = "light", size = "xl", hasBorder = "false" }) {

    return <div>I am a card component with {theme} theme, size of {size} and {hasBorder} border.</div>
}

function NavBar(props) {
    console.log(props.children);
    const children = props.children;
    return <nav style={{ border: "2px solid black", width: "100px", padding:"5px", textAlign:"center"}}>{children}</nav>
}

function NavBar2({ theme, size, children }) {
    return <nav>{theme} {size} {children}</nav>
}


// SPREADING PARAMETERS!!!

// <Profile person="Hulya" size="md" theme="light" hasBorder="false" isSepia="false"/>

function Profile(props){
    return (
        <div>
            <Avatar {...props}/>
        </div>
    )
}

function Avatar({person, size, theme, hasBorder, isSepia}) {
    return <div>I am avatar of {person} with {size} size, {theme} theme, border {hasBorder}, and sepia {isSepia}.</div>
}