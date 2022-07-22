import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";


const PacientesContext = createContext()

export const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

useEffect(() => {

    const obtenerPacientes = async () =>{

        try {
            const token = localStorage.getItem('token');
            if(!token) return

            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const {data} = await clienteAxios('/pacientes', config);
            setPacientes(data);


        } catch (error) {
            
        }


    };
    obtenerPacientes();
}, [])

    const guardarPaciente = async(paciente) => {

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if(paciente.id){

            try {
                const pacienteUpdate = pacientes.map(pacienteState => pacienteState._id === data._id ? data : pacienteState);
                setPacientes(pacienteUpdate);

                const {data} = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config);

                
            } catch (error) {
                
            }

        }else{
            
            try {

              
                const {data} = await clienteAxios.post('/pacientes', paciente, config);
                const {createAt, updateAt, __v, ...pacienteAlmacenado} = data;
    
                setPacientes([pacienteAlmacenado, ...pacientes]);
    
            } catch (error) {
    
                console.log(error.response.data.msg);
                
            }

        }

        

        
    }
    const setEdicion = (paciente) =>{

        setPaciente(paciente);


    }

    const eliminarPaciente = async (id) => {

        const confirmar = confirm('¿Seguro que deseas eliminar?')

        if(confirmar){
            try {
                const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await clienteAxios.delete(`/pacientes/${id}`, config);
        const pacientesUpdate = pacientes.filter(pacienteState => pacienteState._id !== id);

        setPacientes(pacientesUpdate);
                
            } catch (error) {
                
            }
        }


    }

return(

    <PacientesContext.Provider
    value={{

        pacientes,
        guardarPaciente,
        setEdicion,
        paciente,
        eliminarPaciente

    }}
    >

        {children}


    </PacientesContext.Provider>



)

}
export default PacientesContext;




