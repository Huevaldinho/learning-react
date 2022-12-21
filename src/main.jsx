import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TaskContextProvider} from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App/>
    </TaskContextProvider>
  </React.StrictMode>,
)

/*
Pasos para correr este proyecto:
* npm run dev

Pasos para instalar este proyecto en otra pc
* Clonar el repo: git clone https://github.com/Huevaldinho/learning-react.git
* Instalar npm modules. Abrir el proyecto: npm install
* Listo: npm run dev
*/
