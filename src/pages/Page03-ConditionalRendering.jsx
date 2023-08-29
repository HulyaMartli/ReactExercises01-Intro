export function Page03(){
    return (
        <section>
            <h2>Conditional rendering</h2>
            <PackingList/>
        </section>
    );
}

function PackingList(){
    return (
        <div>
            <h4>Einstein&apos;s Packing List</h4>
            <h5>Packed/Nonpacked Items</h5>
            <ul>
                <PackingItem name="Hat" isPacked={true}/>
                <PackingItem name="Eyeglasses" isPacked={false}/>
                <PackingItem name="Chalk" isPacked={false}/>
                <PackingItem name="Notebook" isPacked={true}/>
            </ul>
            <h5>Nonpacked Items</h5>
            <ul>
                <PackingItemNonPacked name="Hat" isPacked={true}/>
                <PackingItemNonPacked name="Eyeglasses" isPacked={false}/>
                <PackingItemNonPacked name="Chalk" isPacked={false}/>
                <PackingItemNonPacked name="Notebook" isPacked={true}/>
            </ul>
        </div>
    );
}

function PackingItem({name, isPacked}){
    if(isPacked){
        return <li>{name} <span style={{color:"green", fontWeight:"bolder"}}> packed </span>.</li>
    }
    return <li>{name}</li>
}

function PackingItemNonPacked({name, isPacked}){
    if(isPacked){
        return null;
    }
    return <li>{name}</li>
}

function PackingItemV2({name, isPacked}){
    // return isPacked ? null : <li>{name}</li>
    return <li> {name} {isPacked ? '+++' : ''} </li>
}

function PackingItemV3({name, isPacked}){
    // return isPacked ? null : <li>{name}</li>
    return <li> { isPacked ? <del>{name}</del> : name } </li>
}

// using logical and operator &&
function PackingItemV4({name, isPacked}){
    // return isPacked ? null : <li>{name}</li>
    return <li> {name} { isPacked && "+++"} </li>
}