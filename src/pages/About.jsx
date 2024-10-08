
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
            History of Westrade International Co., Inc.
          </h2>
          <p className="leading-relaxed text-lg md:text-xl text-darkBlue">
<p  className='mb-4 leading-relaxed text-lg md:text-xl text-darkBlue text-center'>            Sometime in the early part of 1987, the core group of the U.S. military sales division of Connell Bros. Co. Pilipinas, Inc. approached top management, presenting its intentions to engage in the trading business of its own. The idea was very well taken by the management after deliberating in details the overall corporate benefit of this plan. CBC Pilipinas, Inc. with the distinct approval of corporate headquarters in San Francisco, U.S.A. accepted the group&apos;s proposal. This move opened the opportunity to streamline the company&apos;s operation and concentrate henceforth its resources for the other major lines. CBC Pilipinas, Inc. dropped its U.S. Military line and gave the whole activity to the group&apos;s efforts. This in effect was the birth of WESTRADE INTERNATIONAL CO., INC (WICO) and in October 24, 1987, it was officially incorporated under Securities and Exchange Commission Reg. No. 143983.
</p>
<p  className='mb-4 leading-relaxed text-lg md:text-xl text-darkBlue text-center'>            Westrade International Co., Inc. is 100% owned by Filipinos. Its management and staff has an aggregate total of 25 years work exposure from each individual&apos;s experience in the U.S. Military and international trading business.
</p >
            Westrade principals are strategically located in the U.S., Asia and Europe. They are all seasoned veterans in the international trading business. Aside from this, Westrade is concentrated extensively on the equipment/construction material requirements of the U.S. military bases in the Philippines. The turn-over to the Philippine Government in November 1991 of Clark Air Base and Subic Naval Base required Westrade to adopt a re-orientation on its sales activities and the company is now heavily engaged in trading activities on the Philippine domestic scene. By having an access to a world full of high quality products, Westrade is able to offer a wide range of product and materials from simple wire to complex, highly engineered electrical and mechanical appar
<p className='mb-4 leading-relaxed text-lg md:text-xl text-darkBlue text-center'>            Today, Westrade brings it all together, supply high quality engineered products, great and small, for commercial and industrial, power generation and distribution, food and beverage, dairy, pharmaceutical, cement, sugar, chemical, oil electronic and other allied industries
</p>          </p>
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