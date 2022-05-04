import PropTypes from 'prop-types'

function Hero() { 
    const heroSubTitle = 'New Games & Accessories'
    const heroTitle = `Monthly packages. 
    Excitement delivered daily.`
    const heroDescription = "What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month."
    const heroButton = 'Get Started'
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    <h2 className="hero__subtitle">{heroSubTitle}</h2>
                    <h1 className="hero__title">
                        {heroTitle}
                    </h1>
                    <p className="hero__description">
                        {heroDescription}
                    </p>
                    <a href="https://endless.com" className="btn hero__button">
                        {heroButton}
                    </a>
                </div>
            </div>
        </section>
    )
}

Hero.propTypes = {
    heroSubTitle: PropTypes.string,
    heroTitle: PropTypes.string,
    heroDescription: PropTypes.string,
    heroButton: PropTypes.string,
}

export default Hero
