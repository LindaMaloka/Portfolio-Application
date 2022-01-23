import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Objectives from '../components/Objectives/Objectives';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <Hero />
      </Section> 
      <Section grid> 
      <Objectives />
        <BgAnimation /> 
      </Section> 
      <Section grid> 
      < Education  />
        <BgAnimation /> 
      </Section> <Section grid> 
      <Skills />
        <BgAnimation /> 
      </Section> <Section grid> 
      <About />
        <BgAnimation /> 
      </Section> 
     
      <Projects />
      
    </Layout>
  );
};

export default Home;
