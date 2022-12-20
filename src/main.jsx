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
Pasos para instalar este proyecto en otra pc
1) Clonar el repo: git clone https://github.com/Huevaldinho/learning-react.git
2) Instalar npm modules: Abrir el proyecto: npm install
3) Listo: npm run dev
*/
