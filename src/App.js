import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { useFetchHook } from './hooks/useFetchHook'

function App() {
  const url = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'
  const [result, error, isLoading] = useFetchHook(url)
  console.log(result, error, isLoading, "from hook")
  if(isLoading) return <h2 className="is-loading">Is loading.. </h2>

  const heroContent = [
    {
      subTitle: 'New Games & Accessories',
      title: `Monthly packages. 
      Excitement delivered daily.`,
      description: "What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.",
      button: 'Get Started',
    }
  ]

  return (
    <>
      <Header />
      <main>
        <Hero 
          subTitle={heroContent[0].subTitle} 
          title={heroContent[0].title} 
          description={heroContent[0].description} 
          button={heroContent[0].button}>
        </Hero>
        <section className="how-it-works">
          <div className="container">
              <header className="section__header">
                  <h2 className="section__title">
                      How It Works
                  </h2>
              </header> 
              <div className="cards">
                { result && 
                  result
                  .sort((a,b) => a.stepNumber > b.stepNumber ? 1 : -1)
                  .map(item => (
                    <div key={item.id} className="card">
                        <div className="card__step">
                           0{item.stepNumber}
                        </div>
                        <h3 className="card__title">
                            {item.versionContent.reduce((a, b) => a.effectiveDate > b.effectiveDate ? a : b).title}
                        </h3>
                        <p className="card__description">
                          {item.versionContent.reduce((a, b) => a.effectiveDate > b.effectiveDate ? a : b).body}
                        </p>
                    </div>
                  ))
                }
                </div>
            </div>
        </section>
        </main> 
    </>
  );
}

export default App
