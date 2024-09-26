
import { Building, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl  font-extrabold text-darkBlue mb-12 md:mb-16 text-center">
          About Us
        </h1>

        {/* Company Profile Section */}
        <section className=" text-darkBlue p-8 md:p-12 rounded-lg mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-6">
            <Building size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center">
            Company Profile
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center max-w-3xl mx-auto">
            Westrade International Co., Inc. is a global leader in delivering 
            high-quality products and services. With decades of experience, 
            we prioritize innovation, excellence, and sustainability to drive 
            success for our customers and partners.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Mission Section */}
          <section className="flex flex-col items-center text-center">
            <div className="rounded-full p-6 mb-6">
              <Target size={48} className="text-darkBlue" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-darkBlue mb-6">
              Our Mission
            </h2>
            <ul className=" leading-relaxed space-y-4 text-lg md:text-xl text-darkBlue">
              <li>
                To provide quality products, on-time delivery, and cost-effective 
                piecing for all our present and future customers.
              </li>
              <li>
                To carry ready in stock of special wires and cables known 
                European and US brands in sufficient volume to meet urgent 
                local requirements.
              </li>
            </ul>
          </section>

          {/* Vision Section */}
          <section className="flex flex-col items-center text-center">
            <div className=" rounded-full p-6 mb-6">
              <Eye size={48} className="text-darkBlue" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-darkBlue mb-6">
              Our Vision
            </h2>
            <p className="text-darkBlue leading-relaxed text-lg md:text-xl">
              To be the leading supplier of high-quality engineered electrical 
              and mechanical equipment for commercial and industrial projects 
              in the Philippines.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;