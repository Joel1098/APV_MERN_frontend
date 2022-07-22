import Formulario from "../components/Formulario";
import { useState } from "react";
import Listpacientes from "../components/Listpacientes";


const AdminPacientes = () => {

  const [mostrarForm, setmostrarForm] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <button type="button" 
      className='bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden'
      onClick={() => setmostrarForm (!mostrarForm)}
      > {mostrarForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>


      <div className={`${mostrarForm ? 'block' : 'hidden'   } md:block md:w-1/2 lg:w-2/5 `}>
        <Formulario />
      </div>
      <div className="md:w-1/2 lg:w-3/5">

        <Listpacientes />
      </div>


    </div>
    
   
  )
}

export default AdminPacientes;