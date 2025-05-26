import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSearch,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCalendarAlt,
  FaNewspaper,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaTrophy,
  FaMicroscope,
  FaMusic,
  FaFutbol,
} from "react-icons/fa";

const HomeComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("news");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // School data
  const newsItems = [
    {
      id: 1,
      title: "Olympic High Dominates National Science Fair",
      excerpt:
        "Our students won 3 gold medals at the Kenya National Science and Engineering Fair...",
      date: "May 15, 2023",
      category: "Achievements",
    },
    {
      id: 2,
      title: "New Computer Lab Unveiled",
      excerpt:
        "The school has commissioned a state-of-the-art computer lab with 50 new workstations...",
      date: "April 28, 2023",
      category: "Facilities",
    },
    {
      id: 3,
      title: "Annual Sports Day Results",
      excerpt:
        "Track and field records broken as Blue House emerges overall winner...",
      date: "March 10, 2023",
      category: "Sports",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Parents-Teachers Meeting",
      date: "June 5, 2023",
      time: "8:00 AM - 1:00 PM",
    },
    {
      id: 2,
      title: "Music Festival Regionals",
      date: "June 12, 2023",
      time: "All Day",
    },
    {
      id: 3,
      title: "Mid-Term Break",
      date: "June 19-23, 2023",
      time: "All Day",
    },
  ];

  const alumni = [
    {
      id: 1,
      name: "Barack Omondi",
      graduationYear: 1995,
      profession: "Medical Doctor",
      achievement: "Chief of Surgery at Nairobi Hospital",
      image: "https://placehold.co/400x400/800000/FFFFFF?text=Dr.+W.Mwangi",
    },
    {
      id: 2,
      name: "Derrick Were",
      graduationYear: 2005,
      profession: "Software Engineer",
      achievement: "Founder of TechSolutions Africa",
      image: "https://placehold.co/400x400/800000/FFFFFF?text=J.+Omondi",
    },
    {
      id: 3,
      name: "Grace Atieno",
      graduationYear: 2010,
      profession: "Environmental Scientist",
      achievement: "UN Environmental Program Lead",
      image: "https://placehold.co/400x400/800000/FFFFFF?text=G.+Atieno",
    },
    {
      id: 4,
      name: "Peter Kamau",
      graduationYear: 1998,
      profession: "Journalist",
      achievement: "Chief Editor at Daily Nation",
      image: "https://placehold.co/400x400/800000/FFFFFF?text=P.+Kamau",
    },
  ];

  const departments = [
    {
      name: "Sciences",
      icon: <FaMicroscope />,
      description: "Physics, Chemistry, Biology and Mathematics",
    },
    {
      name: "Humanities",
      icon: <FaBook />,
      description: "History, Geography, CRE and IRE",
    },
    {
      name: "Languages",
      icon: <FaChalkboardTeacher />,
      description: "English, Kiswahili and French",
    },
    {
      name: "Technical",
      icon: <FaMicroscope />,
      description: "Computer Studies, Business and Agriculture",
    },
    { name: "Arts", icon: <FaMusic />, description: "Music, Art and Design" },
    {
      name: "Sports",
      icon: <FaFutbol />,
      description: "Athletics, Football, Basketball and more",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Top Announcement Bar */}
      <div className="bg-yellow-500 text-[#800000] text-center py-2 px-4 text-sm font-medium">
        <p>
          Applications for Form 1 2024 now open! Deadline: June 30, 2023.{" "}
          <a href="#" className="underline font-semibold">
            Apply now
          </a>
        </p>
      </div>

      {/* Header/Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#800000] shadow-md" : "bg-[#800000]"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and School Name */}
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-[#700000] rounded-full flex items-center justify-center text-white font-bold text-xl border-2 border-yellow-500">
                OHS
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">
                  OLYMPIC HIGH SCHOOL
                </h1>
                <p className="text-[#d3a3a3] text-xs">Do your best always</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium"
              >
                Academics
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium"
              >
                Admissions
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium"
              >
                Alumni
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button className="text-white">
                <FaSearch className="w-5 h-5" />
              </button>
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#700000] py-4 px-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium py-2 border-b border-[#900000]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium py-2 border-b border-[#900000]"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium py-2 border-b border-[#900000]"
              >
                Academics
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium py-2 border-b border-[#900000]"
              >
                Admissions
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium py-2 border-b border-[#900000]"
              >
                Alumni
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium py-2 border-b border-[#900000]"
              >
                Contact
              </a>
              <div className="pt-2">
                <button className="bg-yellow-500 text-[#800000] font-bold py-2 px-4 rounded w-full">
                  Apply Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative bg-[#800000] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Shaping Future Leaders Through Quality Education
              </h1>
              <p className="text-lg mb-8 text-[#d3a3a3]">
                Olympic High School is a premier institution in Kenya committed
                to academic excellence, character formation, and holistic
                development.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-[#800000] font-bold py-3 px-6 rounded-lg transition duration-300">
                  Apply Now
                </button>
                <button className="bg-transparent hover:bg-[#700000] text-white font-semibold py-3 px-6 border border-white hover:border-yellow-300 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                {/* Hero Slideshow */}
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full h-full bg-[#700000] flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-5xl font-bold mb-4 text-yellow-400">
                        1
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Academic Excellence
                      </h3>
                      <p className="text-[#d3a3a3]">
                        Consistently ranked among Kenya's top schools
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full h-full bg-[#600000] flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-5xl font-bold mb-4 text-yellow-400">
                        2
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Holistic Development
                      </h3>
                      <p className="text-[#d3a3a3]">
                        Sports, arts, and leadership programs
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full h-full bg-[#500000] flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-5xl font-bold mb-4 text-yellow-400">
                        3
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Alumni Network
                      </h3>
                      <p className="text-[#d3a3a3]">
                        Successful graduates worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index
                        ? "bg-yellow-500"
                        : "bg-white bg-opacity-50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#faf5f5] p-6 rounded-lg text-center border border-[#e6cdcd]">
              <div className="text-[#800000] text-3xl font-bold mb-2">
                1,200+
              </div>
              <div className="text-[#800000] font-medium">Students</div>
            </div>
            <div className="bg-[#faf5f5] p-6 rounded-lg text-center border border-[#e6cdcd]">
              <div className="text-[#800000] text-3xl font-bold mb-2">85+</div>
              <div className="text-[#800000] font-medium">Teachers</div>
            </div>
            <div className="bg-[#faf5f5] p-6 rounded-lg text-center border border-[#e6cdcd]">
              <div className="text-[#800000] text-3xl font-bold mb-2">40+</div>
              <div className="text-[#800000] font-medium">Clubs</div>
            </div>
            <div className="bg-[#faf5f5] p-6 rounded-lg text-center border border-[#e6cdcd]">
              <div className="text-[#800000] text-3xl font-bold mb-2">A</div>
              <div className="text-[#800000] font-medium">KCSE Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#faf5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#800000] mb-4">
              About Olympic High School
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-[#800000] mb-4">
                Our History
              </h3>
              <p className="text-gray-800 mb-4">
                Founded in 1972, Olympic High School has grown from humble
                beginnings to become one of Kenya's most respected secondary
                institutions. Named in honor of the Olympic ideals of
                excellence, our school has consistently produced outstanding
                academic and extracurricular results.
              </p>
              <p className="text-gray-800 mb-6">
                Over the years, we've maintained a tradition of discipline and
                hard work while adapting to modern educational needs. Our alumni
                network spans across the globe, with graduates excelling in
                diverse fields from medicine to technology, arts to public
                service.
              </p>
              <button className="bg-[#800000] hover:bg-[#700000] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 flex items-center">
                Read More <FaArrowRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md border border-[#e6cdcd]">
                  <div className="bg-[#800000] h-48 flex items-center justify-center text-white text-lg font-medium">
                    School Building
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md border border-[#e6cdcd]">
                  <div className="bg-[#700000] h-48 flex items-center justify-center text-white text-lg font-medium">
                    Classroom
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md border border-[#e6cdcd]">
                  <div className="bg-[#900000] h-48 flex items-center justify-center text-white text-lg font-medium">
                    Library
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md border border-[#e6cdcd]">
                  <div className="bg-[#600000] h-48 flex items-center justify-center text-white text-lg font-medium">
                    Laboratory
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#800000] mb-4">
              Our Academic Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive curriculum that prepares students for
              university and beyond
            </p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-[#faf5f5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-[#e6cdcd]"
              >
                <div className="p-6">
                  <div className="text-[#800000] text-4xl mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#800000] mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{dept.description}</p>
                  <button className="text-[#800000] font-medium hover:text-[#700000] flex items-center">
                    Learn More <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-[#faf5f5]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#800000]">
                News & Events
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("news")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "news"
                    ? "bg-[#800000] text-white"
                    : "bg-white text-[#800000] border border-[#e6cdcd]"
                }`}
              >
                News
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "events"
                    ? "bg-[#800000] text-white"
                    : "bg-white text-[#800000] border border-[#e6cdcd]"
                }`}
              >
                Events
              </button>
            </div>
          </div>

          {activeTab === "news" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-[#e6cdcd]"
                >
                  <div className="bg-[#800000] h-48 flex items-center justify-center text-white text-lg font-medium">
                    News Image {item.id}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-600 font-medium mb-2">
                      {item.category} • {item.date}
                    </div>
                    <h3 className="text-xl font-semibold text-[#800000] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{item.excerpt}</p>
                    <button className="text-[#800000] font-medium hover:text-[#700000] flex items-center">
                      Read More <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-[#e6cdcd]"
                >
                  <div className="bg-[#800000] text-white p-4 flex items-center">
                    <FaCalendarAlt className="text-2xl mr-3" />
                    <div>
                      <div className="font-bold">{event.date}</div>
                      <div className="text-sm text-[#d3a3a3]">{event.time}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#800000] mb-3">
                      {event.title}
                    </h3>
                    <button className="text-[#800000] font-medium hover:text-[#700000] flex items-center">
                      View Details <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <button className="bg-[#800000] hover:bg-[#700000] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
              View All {activeTab === "news" ? "News" : "Events"}{" "}
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#800000] mb-4">
              Our Distinguished Alumni
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Olympic High School alumni are making an impact across Kenya and
              the world
            </p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((alumnus) => (
              <div
                key={alumnus.id}
                className="bg-[#faf5f5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-[#e6cdcd]"
              >
                <div className="h-48 bg-[#800000] flex items-center justify-center">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#800000] mb-1">
                    {alumnus.name}
                  </h3>
                  <div className="text-gray-600 font-medium mb-2">
                    {alumnus.profession}
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {alumnus.achievement}
                  </p>
                  <button className="text-[#800000] text-sm font-medium hover:text-[#700000] flex items-center">
                    Read Profile <FaArrowRight className="ml-2 text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-[#800000] hover:bg-[#700000] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
              Join Alumni Network <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#800000] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What People Say About Us
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#700000] p-6 rounded-lg border border-[#900000]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#900000] flex items-center justify-center text-yellow-400 text-xl font-bold mr-4">
                  JK
                </div>
                <div>
                  <h4 className="font-semibold">Mr. Joseph Kariuki</h4>
                  <p className="text-[#d3a3a3] text-sm">Parent</p>
                </div>
              </div>
              <p className="text-[#f5ebeb]">
                "Olympic High has transformed my son both academically and in
                character. The teachers are dedicated and the discipline is
                exceptional. I'm impressed by how the school balances academics
                with co-curricular activities."
              </p>
            </div>

            <div className="bg-[#700000] p-6 rounded-lg border border-[#900000]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#900000] flex items-center justify-center text-yellow-400 text-xl font-bold mr-4">
                  SW
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Wambui</h4>
                  <p className="text-[#d3a3a3] text-sm">Form 4 Student</p>
                </div>
              </div>
              <p className="text-[#f5ebeb]">
                "Being at Olympic High has been the best experience of my life.
                The teachers go beyond the syllabus to ensure we understand
                concepts. The school has given me opportunities to explore my
                talents in music and athletics too."
              </p>
            </div>

            <div className="bg-[#700000] p-6 rounded-lg border border-[#900000]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#900000] flex items-center justify-center text-yellow-400 text-xl font-bold mr-4">
                  AM
                </div>
                <div>
                  <h4 className="font-semibold">Dr. Amina Mohammed</h4>
                  <p className="text-[#d3a3a3] text-sm">Class of 2008</p>
                </div>
              </div>
              <p className="text-[#f5ebeb]">
                "The foundation I got at Olympic High prepared me for medical
                school and my career. The discipline and work ethic instilled in
                us continues to serve me well. I'm proud to be an Olympic
                alumnus!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#faf5f5]">
        <div className="container mx-auto px-4">
          <div className="bg-[#800000] rounded-xl p-8 md:p-12 text-center text-white shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join the Olympic Family?
            </h2>
            <p className="text-[#d3a3a3] max-w-2xl mx-auto mb-8">
              Applications for the 2024 academic year are now open. Limited
              spaces available. Apply today to secure your spot at one of
              Kenya's top schools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-[#800000] font-bold py-3 px-8 rounded-lg transition duration-300">
                Apply Now
              </button>
              <button className="bg-transparent hover:bg-[#700000] text-white font-semibold py-3 px-8 border border-white hover:border-yellow-300 rounded-lg transition duration-300">
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#800000] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div className="h-8 w-8 bg-[#700000] rounded-full flex items-center justify-center text-yellow-400 font-bold mr-2">
                  OHS
                </div>
                Olympic High
              </h3>
              <p className="text-[#d3a3a3] mb-4">
                Excellence Through Discipline. Shaping future leaders since
                1972.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d3a3a3] hover:text-yellow-300">
                    News & Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <address className="not-italic text-[#d3a3a3]">
                <p className="mb-2">P.O. Box 12345-00100</p>
                <p className="mb-2">Nairobi, Kenya</p>
                <p className="mb-2">Phone: +254 712 345 678</p>
                <p className="mb-2">Email: info@olympichigh.ac.ke</p>
              </address>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-[#d3a3a3] mb-4">
                Subscribe to our newsletter to receive updates on school news
                and events.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg text-gray-800 w-full focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-[#800000] font-bold px-4 py-2 rounded-r-lg transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[#900000] pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#d3a3a3] text-sm mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Olympic High School. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#d3a3a3] hover:text-yellow-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#d3a3a3] hover:text-yellow-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#d3a3a3] hover:text-yellow-300 text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
