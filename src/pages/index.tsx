import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenFinOps - Expert DevOps/SRE Open e-Mobility</title>
        <meta name="description" content="Expert DevOps/SRE spécialisé dans le déploiement haute disponibilité de la plateforme Open e-Mobility pour un avenir plus vert et durable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}