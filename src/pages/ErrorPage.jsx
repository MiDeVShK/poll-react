
import Poll from "../assets/components/poll";
import Footer from "../assets/containers/footer";
import Navbar from "../assets/containers/navbar";


const ErrorPage = () => {
return (
    <>
    <Navbar />
        <main className="flex justify-center h-full">
            <Poll
            category='Lost'
            author='Wilson'
            question='I think you got lost ?'
            answerA='Help me'
            answerB='No I wanted to see the 404 page'
            answerAPourcent= {99}
            answerBPourcent= {1}
            />
        </main>
    <Footer />
    </>
)};

export default ErrorPage