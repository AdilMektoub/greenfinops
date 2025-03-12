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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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