import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import AreasWeCover from '../components/AreasWeCover';
import JobsBanner from '../components/JobsBanner';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AreasWeCover />
      <JobsBanner />
      <ContactForm />
    </main>
  );
};

export default Home;
