import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        navbar
      </div>
      < Component {...pageProps} />
    </>
  
  );;
}

export default MyApp
