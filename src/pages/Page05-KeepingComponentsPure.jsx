export function Page05() {
    return (
        <section>
            <h2>Functional programming - Pure functions</h2>
            <Recipe guestCount={3}/>
            <Recipe guestCount={3}/>

            <Table/>
            <Table/>
        </section>
    )
}

// Pure functions
// 1. Sadece kendi işine bakar
// 2. Aynı argümanlarla çağırıldığında hep aynı sonucu döneceği kesindir.

const double = n => 2 * n;

// Impure function
let counter = 0;

function testing() {
    counter++;

    return counter;
}

console.log(testing()); // OUTPUT: 1 - local scope dışında bir değişkenin değerini değiştiriyor
console.log(testing()); // OUTPUT: 2 - başka bir yerde .çağırdığımızda hangi sonucu döneceğini bilemeyiz

// Pure Component - Ice tea
function Recipe({ guestCount }) {
    return (
        <>
            <h3>Ice Tea Recipe for {guestCount} (Pure component)</h3>
            <ul>
                <li>{guestCount * .5} ice cubes</li>
                <li>{guestCount * 100}ml water</li>
                <li>{guestCount} lemon</li>
            </ul>
        </>
    )
}

// Impure Component
let guestCount = 0;

function Table(){
    return (
        <>
        <h3>Table (Impure Component)</h3>
        <ul>
            <Chair/>
            <Chair/>
            <Chair/>
            <Chair/>
        </ul>
        </>
    );
}

function Chair(){
    guestCount++;
    return <li>Chair(s) for {guestCount} guests.</li>;
}