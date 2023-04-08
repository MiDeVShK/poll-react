import Credit from "../components/credits/credit"
import github from "../img/github.png"

const Footer = () => {
    return (
        <footer className="flex flex-col text-center mt-2">
                <p>Created by</p>
                <section className="flex justify-center">
                    <div>
                        <Credit
                        name='Hugo Laurent'
                        url='"https://github.com/HugoLaurent"'
                        />
                    </div>
                    <div>
                        <Credit
                            name='Devconte'
                            url='"https://github.com/Devconte"'
                        />
                    </div>
                    <div>
                        <Credit
                            name='Mike'
                            url='"https://github.com/Michaeldutheil"'
                        />
                    </div>
                </section>
                <p>version: 2.0</p>     
        </footer>
    )
}

export default Footer