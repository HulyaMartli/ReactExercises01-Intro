import { v4 as uuidv4 } from 'uuid';
uuidv4();

const myArr = ["Burak", "Marry", "Jane", "Deniz"];
const myObj = { id: 0, isHidden: false };
const myJsxList = [<li key="a">Burak</li>, <li key="b">Aykut</li>, <li key="c">Perihan</li>]

// reduce - foreach - filter - map


export function Page04() {
    return (
        <section>
            <h2>Rendering lists</h2>
            <ul>
                {/* {myObj} => Object cannot be rendered as a React element but arrays can*/}
                {myArr}
                {myJsxList}
            </ul>
            <PeopleOfJava9 />
            <PeopleByProfession profession="Chemist" />
            <Fruits/>
        </section>
    )
}

const peopleList = ["Berk", "Doruk", "Hülya", "Engin", "Recep", "Emre", "Gülsu", "Selim"];

function PeopleOfJava9() {
    const peopleJsxList = peopleList.map((name, index) => <li key={index}>{name}</li>)
    return (
        <>
            <h3>Members of Java-9</h3>
            <ul>
                {peopleJsxList}
            </ul>
        </>
    )
}

const famousPeopleList = [
    { id: 0, name: "Bob Marley", profession: "Singer & Song Writer" },
    { id: 1, name: "Tim Berners Lee", profession: "Computer Scientist" },
    { id: 2, name: "Marie Curie", profession: "Chemist" },
    { id: 3, name: "Dmitri Mendeleev", profession: "Chemist" }
]

function PeopleByProfession({ profession }) {
    const peopleOfProfession = famousPeopleList.filter(people => people.profession === profession );

    const peopleOfProfessionJsxArr = peopleOfProfession.map((person) => <li key={person.id}>{person.name + "-" + person.profession}</li>)
    return (
        <>
            <h2>People By Profession</h2>
            <ul>
                {peopleOfProfessionJsxArr}
            </ul>
        </>

    )

}

const fruits = ["orange", "banana", "kiwi", "apple", "pineapple", "grapefruit"];

const fruitUniqueIds = fruits.map( fruit => uuidv4());

console.log(fruitUniqueIds)

function Fruits(){
    const fruitJsxArray = fruits.map((fruit, index)=><li key={fruitUniqueIds[index]}>{fruit}</li>)
    return(
        <>
        <h3>Fruits I Like</h3>
        <ul>
            {fruitJsxArray}
        </ul>
        </>
    )
}
