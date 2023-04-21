
import Popular from "../assets/containers/popular"
import Random from "../assets/containers/random"

const Home = () => {
    return (
        <>  
        <main className="w-3/4 flex flex-wrap justify-center m-auto">
            <Popular />
            <Random />
        </main>
        </>
    )
}

export default Home;
