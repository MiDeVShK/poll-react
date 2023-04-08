import "./logo.css"

const LogoAnimate = () => {
    return (
        <section class="loader">
            <div class="green"></div>
            <div class="red"></div>
            <div class="letter">
                <p id="letter" class="p">P</p>
                <p id="letter" class="o">o</p>
                <p id="letter" class="l">l</p>
                <p id="letter" class="ll">l</p>
            </div>
        </section>
    )
}

export default LogoAnimate