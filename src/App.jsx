import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtegida from './layout/RutaProtegida'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Nuevopassword from './paginas/Nuevopassword'
import {AuthProvider} from './context/Authprovider'
import { PacientesProvider } from './context/PacientesProvider'
import AdminPacientes from './paginas/AdminPacientes'
import Editperfil from './paginas/Editperfil'
import Cambiarpass from './paginas/Cambiarpass'

function App() {

  console.log(import.meta.env.VITE_BACKEND_URL)
  console.log(import.meta.env.IMAGENES_URL)


  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>

        <Routes>
            <Route path='/' element={<AuthLayout />}>

              <Route index element={<Login />}/>
              <Route path='registrar' element={<Registrar />}/>
              <Route path='olvide-password' element={<OlvidePassword />}/>
              <Route path='olvide-password/:token' element={<Nuevopassword />}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta />}/>

            </Route>

            <Route path="/admin" element={<RutaProtegida />}>

              <Route index element={<AdminPacientes />} />
              <Route path='perfil' element={<Editperfil />}/>
              <Route path='cambiar-password' element={<Cambiarpass />}/>

            

            </Route>

          </Routes>

        </PacientesProvider>
        
      </AuthProvider>
    
    </BrowserRouter>
  )
}

export default App
