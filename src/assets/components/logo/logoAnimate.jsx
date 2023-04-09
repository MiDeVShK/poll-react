import "./logo.css"

const LogoAnimate = () => {
    return (
        <section className="loader overflow-hidden h-15 z-0">
            <div className="green"></div>
            <div className="red"></div>
            <div className="letter overflow-hidden h-15 z-1">
                <p id="letter" className="p">P</p>
                <p id="letter" className="o">o</p>
                <p id="letter" className="l">l</p>
                <p id="letter" className="ll">l</p>
            </div>
        </section>
    )
}

export default LogoAnimate