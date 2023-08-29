/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 */

import {createRoot} from "react-dom/client";

// react root'u haline getirmek istediğin sıradan html elemanını seç
const rootEl = document.getElementById("root");

// react root'u oluştur
const root = createRoot(rootEl);

// root.render(<h1>Hello React</h1>); 
// jsx tag (js extended) js içerisinde html'e çok benzeyen kod yazılmasını sağlar

// İlk Component
// Component Kuralları
/*
1. Componentlar js functionlarından inşa edilir.

2. Arkada çalışan sistemin sıradan fonksiyonları component
fonksiyonlarından ayırabilmesi için component fonksiyon 
isimlerini büyük harfle başlatmalıyız.

3. Componentler jsx etiketi olarak kullanılabilirler.

4. Bir component functionından undefined, null, string => yani js expressionları, jsx elemanları döndürülebilir.
*/

import App from "./App";

root.render(<App/>);