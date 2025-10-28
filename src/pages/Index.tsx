import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCatalog from "@/components/CourseCatalog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="courses">
        <CourseCatalog />
      </section>
      <Footer />
    </div>
  );
};

export default Index;