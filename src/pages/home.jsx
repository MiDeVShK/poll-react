import Footer from "../assets/containers/footer"
import Navbar from "../assets/containers/navbar"
import Popular from "../assets/containers/popular"
import Random from "../assets/containers/random"

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Popular />
                <Random />
            </main>
            <Footer />
        </>
    )
}

export default Home;
