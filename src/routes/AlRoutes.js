import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import PageNotFound from '../pages/PageNotFound'


 const AlRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="create" element={ <CreatePage />} />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </main>
  )
}
export default AlRoutes