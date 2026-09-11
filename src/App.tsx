import { Suspense } from 'react';
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import type { Technology } from './components/type';
import Hero from './components/hero';
import Technologies from './components/technologies/technologi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const technologiesPromise: Promise<Technology[]> = (async () => {
    const res = await fetch('./technologies.json');
    const data = await res.json();
    return data.technologies;
  })();

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* <!-- Technologies --> */}
        <Suspense fallback={<div>Loading technologies...</div>}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>

      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover />
    </>
  )
}

export default App
