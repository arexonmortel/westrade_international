/* eslint-disable react/prop-types */
import { Building, Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactInfo from '../components/ContactInfo';
import { office, warehouse } from '../api/data';
import logo from '../assets/westrade_logo_no_bg.png';
 
const ContactPage = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-3xl md:text-4xl font-extrabold text-darkBlue mb-8 text-center">
          Contact Us
        </h1>

        <div className="shadow-lg rounded-xl overflow-hidden bg-lightBlue bg-opacity-50">
          {/* Company Info */}
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Westrade Logo" className="h-20" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-center text-darkBlue mb-6">
              Westrade International Co., Inc.
            </h2>
            
            {/* Grid Layout for Two Rows */}
            <div className="grid md:grid-cols-2 gap-6">
              <ContactInfo
                icon={<Building />}
                title="Office Address"
                content={[
                  "5F Unit 503 Raffles Corporate Center,",
                  "F. Ortigas Jr. Road, Ortigas Center,",
                  "Pasig City"
                ]}
              />
                <ContactInfo
                icon={<MapPin />}
                title="Warehouse Location"
                content={[
                  "No. 3 Bayanihan Drive,",
                  "Bayanihan Village, Brgy. San Isidro,",
                  "Cainta, Rizal"
                ]}
              />
              <ContactInfo
                icon={<Clock />}
                title="Office Hours"
                content={[
                  "Monday - Friday: 9:00 AM - 5:00 PM",
                  "Saturday: 9:00 AM - 12:00 PM"
                ]}
              />
              <ContactInfo
                icon={<Clock />}
                title="Warehouse Hours"
                content={[
                  "Monday - Saturday: 9:00 AM - 5:00 PM"
                ]}
              />

              <ContactInfo
                icon={<Phone />}
                title="Phone Numbers"
                content={[
                  { label: "Office:", numbers: ["(632) 8779-7718", "(632) 8779-7686", "(632) 8779-7593"] },
                  { label: "Warehouse:", numbers: ["(632) 8656-1333"] },
                  { label: "Mobile:", numbers: ["0998 582 6065"] }
                ]}
              />
              <ContactInfo
                icon={<Mail />}
                title="Email Addresses"
                content={["admin@westrade.ph, inquiry@westrade.ph"]}
              />

            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-[300px] md:h-[400px] mt-8">
            <h1 className='text-darkBlue font-bold text-2xl p-6 text-center'>OFFICE LOCATION</h1> 
            <iframe
              className="w-full h-full"
              src={office}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full h-[300px] md:h-[400px] mt-32">
            <h1 className='text-darkBlue font-bold text-2xl p-6 text-center'>WAREHOUSE LOCATION</h1>
            <iframe
              className="w-full h-full"
              src={warehouse}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
