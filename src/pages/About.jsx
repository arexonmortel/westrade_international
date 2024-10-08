import { Building, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-darkBlue mb-12 md:mb-16 text-center">
          About Us
        </h1>

        {/* Company Profile Section */}
        <section className=" text-darkBlue p-8 md:p-12 rounded-lg mb-12 md:mb-16 shadow-md bg-lightBlue bg-opacity-50">
          <div className="flex items-center justify-center mb-6">
            <Building size={48} className="text-blue-500 hover:scale-110 transition duration-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-darkBlue">
            History of Westrade International Co., Inc.
          </h2>
          <p className="leading-relaxed text-lg md:text-xl text-darkGray max-w-prose mx-auto text-center mb-4">
            Sometime in the early part of 1987, the core group of the U.S. military sales division of Connell Bros. Co. Pilipinas, Inc. approached top management, presenting its intentions to engage in the trading business on its own. 
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-darkGray max-w-prose mx-auto text-center mb-4">
            This idea was well-received by management after a thorough discussion of the corporate benefits. CBC Pilipinas, Inc., with approval from its headquarters in San Francisco, U.S.A., accepted the group’s proposal, leading to the birth of WESTRADE INTERNATIONAL CO., INC. on October 24, 1987.
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-darkGray max-w-prose mx-auto text-center mb-4">
            Westrade International Co., Inc. is 100% owned by Filipinos with management and staff having a combined experience of over 25 years in U.S. Military and international trading. 
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-darkGray max-w-prose mx-auto text-center mb-4">
            Today, Westrade provides high-quality engineered products for various industries, including commercial, industrial, food and beverage, pharmaceuticals, cement, and more.
          </p>
        </section>

        {/* Divider */}
        <div className=" my-12"></div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Mission Section */}
          <section className="flex flex-col items-center text-center bg-lightBlue bg-opacity-50 p-8 rounded-lg shadow-md">
            <div className="rounded-full p-6 mb-6 ">
              <Target size={48} className="text-blue-500 hover:scale-110 transition duration-300" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-darkBlue mb-6">
              Our Mission
            </h2>
            <ul className="leading-relaxed space-y-4 text-lg md:text-xl text-darkGray">
              <li>To provide quality products, on-time delivery, and cost-effective pricing for all our customers.</li>
              <li>To maintain a ready stock of special wires and cables from known European and U.S. brands to meet urgent local requirements.</li>
            </ul>
          </section>

          {/* Vision Section */}
          <section className="flex flex-col items-center text-center bg-lightBlue bg-opacity-50 p-8 rounded-lg shadow-md">
            <div className="rounded-full p-6 mb-6">
              <Eye size={48} className="text-blue-500 hover:scale-110 transition duration-300" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-darkBlue mb-6">
              Our Vision
            </h2>
            <p className="text-darkGray leading-relaxed text-lg md:text-xl max-w-prose">
              To be the leading supplier of high-quality engineered electrical and mechanical equipment for commercial and industrial projects in the Philippines.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
