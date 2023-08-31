export function Page05() {
    return (
        <section>
            <h2>Functional programming - Pure functions</h2>
            <Recipe guestCount={3}/>
            <Recipe guestCount={3}/>

            <Table/>
            <GlassTable/>
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

            <PureChair guestCount={1}/>
            <PureChair guestCount={2}/>
            <PureChair guestCount={3}/>
        </ul>
        </>
    );
}

function Chair(){
    guestCount++;
    return <li>Chair(s) for {guestCount} guests.</li>;
}

function PureChair({guestCount, tableType="the table"}){
    return <li>Chair(s) for {guestCount} guests at {tableType}.</li>
}

// Local mutations are fine:
function GlassTable(){
    const chairs = []
    for(let i=1; i<10; i++){
        chairs.push(<PureChair key={i} guestCount={i} tableType="the glass table"/>)
    }

    return chairs;
}

// Side Effects
/*
 * dom api kullanımı
 * fetch api ile server request yapılması 
 * local scope dışında global bir değişken 
 * değerinin değiştirilmesi saflığı bozar ve buna 
 * yan etkiler (side effects) denir.
*/

