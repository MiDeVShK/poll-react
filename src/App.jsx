import Footer from "./assets/containers/footer"
import Navbar from "./assets/containers/navbar"
import Popular from "./assets/containers/popular"
import Random from "./assets/containers/random"
import ErrorPage from "./assets/components/error-page/errorpage"
import { Routes, Route } from 'react-router-dom';
import Category from "./assets/containers/category"


const App = () => {
  return (
    <>
    <Routes>
            <Route path="/" element={
              <>
          <main>
              <Popular />
              <Random />
          </main>
              <Footer />
            </>
            } />
          <Route path="/category" element={
          <>
          <main className="">
            <Category />
            <Popular titleText="Le nom d'une categorie"/>
            </main>  
          <Footer />
          </> 
          }/>
          <Route path="*" element={
            <>
              <ErrorPage />
              <Footer/>
            </>
          } />
       </Routes>
    </>

  )
}

export default App