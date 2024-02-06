import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import PageNotFound from '../pages/PageNotFound'
import { ProtectedRoutes } from "./ProtectedRoutes";


 const AlRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="create" element={<ProtectedRoutes><CreatePage /></ProtectedRoutes> } />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </main>
  )
}
export default AlRoutes