import './App.css'; 
import   Testimonio  from './componentes/Testimonio'; 

function App() {
   return (
      <div className='App' >
         <div className='contenedor-principal'> 
            <h1> esto es lo q opinan los alumnos sobre un testimonio</h1>
            <Testimonio 
            nombre='Gatito duditativo'
            pais='CatLand'
            imagen='1'
            cargo='Ingeniero en software'
            empresa='spotify'
            Testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <Testimonio 
            nombre='gatito uwu'
            pais='KarmaLand'
            imagen='2'
            cargo='ingeniero gatuno'
            empresa='amazon'
            Testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
           />
           <Testimonio 
            nombre='gatito risueño'
            pais='HighLands'
            imagen='3'
            cargo='ingeniero gatuno'
            empresa='amazon'
            Testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
           />
           <Testimonio 
            nombre='gatito w.w'
            pais='neverLand'
            imagen='4'
            cargo='ingeniero gatuno'
            empresa='netflix'
            Testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
           />
         </div>
      </div>
   )
}

 export default App;