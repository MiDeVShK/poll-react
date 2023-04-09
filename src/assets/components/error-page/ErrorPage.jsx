
import Poll from "../poll";

const ErrorPage = () => {
return (
    <>
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
    </>
)};

export default ErrorPage