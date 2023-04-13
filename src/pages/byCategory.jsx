import Category from "../assets/containers/category"
import Popular from "../assets/containers/popular"

const ByCategory = () => {
    return (
        <>
            <main className="w-3/4 flex flex-wrap justify-center m-auto">
                <Category />
                <Popular />
            </main>
        </>
    )
}

export default ByCategory;
