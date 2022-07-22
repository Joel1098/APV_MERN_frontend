import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {

    const {setEdicion, eliminarPaciente} = usePacientes();

    const {email, fecha, nombre, propietario, signos, _id} = paciente;

    const formatearFecha = (fecha) => {

        const Nuevafecha = new Date(fecha);

        return new Intl.DateTimeFormat('es-MX', {dateStyle:'long'}).format(Nuevafecha)
    }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 rounded-xl">
        <p className="font-bold uppercase py-3 text-indigo-700">Nombre: {''} 
        <span className="font-normal normal-case text-black">{nombre}</span></p>
        <p className="font-bold uppercase py-3 text-indigo-700">Propietario: {''} 
        <span className="font-normal normal-case text-black">{propietario}</span></p>
        <p className="font-bold uppercase py-3 text-indigo-700">Email contacto: {''} 
        <span className="font-normal normal-case text-black">{email}</span></p>
        <p className="font-bold uppercase py-3 text-indigo-700">Fecha de alta: {''} 
        <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span></p>
        <p className="font-bold uppercase py-3 text-indigo-700">Signos: {''} 
        <span className="font-normal normal-case text-black">{signos}</span></p>

        <div className="flex justify-between my-5">

            <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase
            font-bold rounded-lg"
            onClick={() => setEdicion(paciente)}
            >Editar

            </button>
            <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase
            font-bold rounded-lg"
            onClick={() => eliminarPaciente(_id)}
            >Eliminar

            </button>


        </div>


    </div>
  )
}

export default Paciente;