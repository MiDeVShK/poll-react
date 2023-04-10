import Category from "../assets/containers/category"
import Footer from "../assets/containers/footer"
import Navbar from "../assets/containers/navbar"
import Popular from "../assets/containers/popular"

const ByCategory = () => {
    return (
        <>
            <Navbar />
            <main>
                <Category />
                <Popular titleText='Salut Laurane' />
            </main>
            <Footer />
        </>
    )
}

export default ByCategory;
