/* Jsx içinde süslü parantez ile js expressions kullanımı */
export function Page01() {
    return (
        <section>
            <h2>Using JS expressions in JSX</h2>
            <MyButton />
            <SquareShape />
            <CircleShape />
            <RectangleShape />
            <RedBall />
            <BlueBall />
            <YellowBall />
        </section>
    )
}

const MyButton = () => {
    const buttonsFirstName = "Jack";
    const buttonsLastName = "Joe";
    return <button>{buttonsFirstName + buttonsLastName}</button>;
}

function SquareShape() {
    const edgeLength = 12;
    return <div>I am a square whose perimeter is {4 * edgeLength}.</div>
}

function CircleShape() {
    const radius = 14;
    return <p>I am a circle whose perimeter is {2 * Math.PI * radius}.</p>
}

function RectangleShape() {
    const shapeName = "rectangle";
    const shapeType = "basic";
    // desired className => rectangle-basic
    return <div className={`${shapeName}-${shapeType}`}>I am a rectangle.</div>
}


// style özelliğinin değeri olarak js object kullanımı.
// css özellikleri camel case ile yazılır.

function RedBall() {
    const ballStyle = {
        backgroundColor: "#FF3131",
        border: "2px solid black",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        fontSize: "smaller",
        textAlign: "center",
        display: "table-cell",
        verticalAlign: "middle"
    };
    return <div style={ballStyle}>Red Ball</div>
}

function BlueBall() {
    return <div style={{
        backgroundColor: "#0097B2",
        border: "2px solid black",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        fontSize: "smaller",
        textAlign: "center",
        display: "table-cell",
        verticalAlign: "middle"
    }}>Blue Ball</div>
}

function YellowBall() {
    const yellowBallProperties = {
        id: 1,
        theme: {
            backgroundColor: "#FFDE59",
            border: "2px solid black",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            fontSize: "smaller",
            textAlign: "center",
            display: "table-cell",
            verticalAlign: "middle"
        }
    };
    return <div style={yellowBallProperties.theme}>Yellow Ball</div>
}