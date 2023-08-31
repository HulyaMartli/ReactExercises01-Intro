import "./assets/styles/reset.css";

import "./App.css"; // css dosyası import ediyoruz

import { Logo } from "./components/Logo"
import { MainMenu } from "./components/MainMenu";
import { Page01 } from "./pages/Page01-JsInJsx";
import { Page02 } from "./pages/Page02-PassingProps";
import { MenuSocial } from "./components/MenuSocial";
import { Page03 } from "./pages/Page03-ConditionalRendering";
import { Page04 } from "./pages/Page04-RenderingList";
import { Page05 } from "./pages/Page05-KeepingComponentsPure";

/*
jsx etiket kuralları

1. Komşu ya da kardeş etiketler tek bir kapsayıcı etiket
içinde olmalı. Ekstra bir kapsayıcı etiket yazmak istemiyorsak, fragment (<>...</>) kullanabiliriz.

2. jsx etiketleri mutlaka kapatılmalı

3. Birden fazla kelimeden oluşan html attributelarının çoğu
camel case yazılmalıdır.

4. class attributeu yerine className kullanınız...

NOT: JSX'te attribute değil property kelimesi kullanılır 
attributeları tanımlamak için


*/

export default function App() {
  const url = "/05";
  return (
    <>
      <header className="basic-header">
        <Logo />
        <MainMenu />
      </header>
      <main>
        { url === "/01" && <Page01 />}
        { url === "/02" && <Page02 />}
        { url === "/03" && <Page03 />}
        { url === "/04" && <Page04 />}
        { url === "/05" && <Page05 />}
      </main>
      <footer>
        <MenuSocial />
      </footer>
    </>
  );
}



/* 
JSX İÇİNDE SÜSLÜ PARANTEZ YANLIŞ KULLANIMI
function InvalidShape(){
  const tagName = "div";
  return <{tagName}>deneme<{tagName}/>
} 
*/

