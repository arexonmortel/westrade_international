import logo from '../assets/westrade_logo_no_bg.png';

function Home() {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-royalBlue py-20 w-full h-full md:h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-40 space-y-6 md:space-y-0">
        
        {/* Left Content: Text */}
        <div className="flex flex-col items-start md:items-start space-y-8 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue leading-tight">
            Welcome to Westrade International Co., Inc.
          </h1>
          <p className="text-lg md:text-xl text-darkBlue">
            Your trusted partner in trading and seminars. We provide innovative solutions for your business growth.
          </p>
          <a
            href="https://www.facebook.com/WestradeInternationalCoInc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-royalBlue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Visit Our Facebook Page
          </a>
        </div>

        {/* Right Content: Logo */}
        <div className="flex justify-center md:justify-end">
          <img
            className="rounded-full md:h-96 md:w-96 w-60 h-60 shadow-lg transform hover:scale-105 transition-all duration-500"
            src={logo}
            alt="Westrade Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
