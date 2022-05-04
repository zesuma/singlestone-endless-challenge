import PropTypes from 'prop-types'

function Hero(props) { 
    
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    <h2 className="hero__subtitle">{props.subTitle}</h2>
                    <h1 className="hero__title">
                        {props.title}
                    </h1>
                    <p className="hero__description">
                        {props.description}
                    </p>
                    <a href="https://endless.com" className="btn hero__button">
                        {props.button}
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
