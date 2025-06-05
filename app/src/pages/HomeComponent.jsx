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
import rombo from "../assets/rombo.jpg";
import barack from "../assets/barack.jpg";
import phenny from "../assets/phenny.jpg";
import citified from "../assets/citified.jpg";
import kubash from "../assets/kubash.jpg";
import outing from "../assets/outing.jpg";
import award from "../assets/award.jpg";
import mentoring from "../assets/mentoring.jpg";
import contest from "../assets/contest.jpg";

const HomeComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gallery = [
    { id: 1, src: citified, alt: "Citified Event" },
    { id: 2, src: kubash, alt: "Kubash Event" },
    { id: 3, src: outing, alt: "Outing Event" },
    { id:4, src: award, alt: "Award Ceremony" },
    { id:5 , src: mentoring, alt: "Mentoring Session" },
    { id: 6, src: contest, alt: "Contest Event" },
  ];
  const activities = [
    {
      year: "2019",
      items: [
        "Leaders' mentorship for student leaders",
        "Maths symposium with 6 schools and 183 participants",
        "Production of 1st Olympic School Magazine (THE LENS)",
        "Classroom-to-boardroom concept",
        "Spiritual mentorship",
        "Examiners talk",
        "Club sessions facilitation",
      ],
    },
    {
      year: "2020-2021",
      items: [
        "Virtual mentorship sessions during COVID-19",
        "Leadership talks by alumni",
        "Study skills and career guidance",
        "Mental health awareness sessions",
      ],
    },
    {
      year: "2022",
      items: [
        "Library book donation (638 books worth Ksh.150,000)",
        "Visit to National Assembly",
        "Journalism Club tour to Standard Media Group",
      ],
    },
    {
      year: "2023",
      items: [
        "Career talk for ex-candidates",
        "5 students received full scholarships",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Winnie Akinyi",
      role: "Manager at Think Twice Company",
      quote: "Leadership is about inspiring others to believe in themselves.",
    },
    {
      name: "Joyce Thairu",
      role: "Lecturer at Multimedia University",
      quote: "Academic excellence starts with proper study skills and self-belief.",
    },
    {
      name: "Elmard Reagan",
      role: "Counseling Psychologist",
      quote: "Overcoming depression begins with acknowledging your struggles.",
    },
  ];

  // Alumni Executive Stories
  const alumniStories = [
    {
      name: "Barack Omondi Odhiambo",
      position: "Chairperson",
      graduationYear: "Class of 2015",
      schoolRoles: "Bell-ringer (2013/14), School Headboy (2014/2015)",
      education: "Bachelors of Journalism (Multimedia University), Bachelors of Leadership and Management (Tangaza University)",
      message: "Success is not just about personal achievement, but about lifting others as you climb. At OHSAA, we're committed to creating pathways for current students to realize their full potential.",
      image: barack,
    },
    {
      name: "Phenny Ogembo",
      position: "Vice Chairperson",
      graduationYear: "Class of 2014",
      schoolRoles: "Debate Club President, Science Club Leader",
      education: "Bachelors in Education (University of Nairobi), Masters in Educational Leadership",
      message: "Education transformed my life, and through OHSAA, I'm passionate about paying it forward. Every student deserves mentors who believe in them and opportunities to excel.",
      image: phenny
    },
    {
      name: "Francis Rombo",
      position: "Alumni Member",
      graduationYear: "Class of 2019",
      schoolRoles: " Student Council Representative",
      education: "Software Engineering (ALX)",
      message: "Olympic High School gave me the foundation to pursue my dreams in technology. I'm proud to contribute to OHSAA's mission of empowering the next generation of leaders and innovators.",
      image: rombo
    }
  ];

  // Color variables
  const colors = {
    maroon: "#8c0606",
    maroonLight: "#a83232",
    maroonDark: "#5a0404",
    yellow: "#f5b301",
    yellowDark: "#d49a00",
    white: "#ffffff",
    grayLight: "#f5f5f5",
    grayDark: "#333333",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#8c0606] shadow-md" : "bg-[#8c0606]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white font-bold text-xl">OHSAA</span>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "home" ? "bg-[#8c0606] text-white" : "text-[#f5b301] hover:bg-[#8c0606]"
                      }`}
                    onClick={() => setActiveTab("home")}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "about" ? "bg-[#8c0606] text-white" : "text-[#f5b301] hover:bg-[#8c0606]"
                      }`}
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </a>
                  <a
                    href="#activities"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "activities" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#5a0404]"
                      }`}
                    onClick={() => setActiveTab("activities")}
                  >
                    Activities
                  </a>
                  <a
                    href="#gallery"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "gallery" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#5a0404]"
                      }`}
                    onClick={() => setActiveTab("gallery")}
                  >
                    Gallery
                  </a>
                  <a
                    href="#contact"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "contact" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#5a0404]"
                      }`}
                    onClick={() => setActiveTab("contact")}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-[#f5b301] hover:bg-[#d49a00] text-black px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  Join Us <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#f5b301] hover:text-white hover:bg-[#5a0404] focus:outline-none"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#5a0404]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === "home" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#8c0606]"
                  }`}
                onClick={() => {
                  setActiveTab("home");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === "about" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#5a0404]"
                  }`}
                onClick={() => {
                  setActiveTab("about");
                  setIsMenuOpen(false);
                }}
              >
                About
              </a>
              <a
                href="#activities"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === "activities" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#5a0404]"
                  }`}
                onClick={() => {
                  setActiveTab("activities");
                  setIsMenuOpen(false);
                }}
              >
                Activities
              </a>
              <a
                href="#gallery"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === "gallery" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#5a0404]"
                  }`}
                onClick={() => {
                  setActiveTab("gallery");
                  setIsMenuOpen(false);
                }}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === "contact" ? "bg-[#5a0404] text-white" : "text-[#f5b301] hover:bg-[#5a0404]"
                  }`}
                onClick={() => {
                  setActiveTab("contact");
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
              <button className="w-full bg-[#f5b301] hover:bg-[#d49a00] text-black px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                Join Us <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-[#8c0606] pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Olympic High School Alumni Association
            </h1>
            <p className="text-xl text-[#f5e38c] max-w-3xl mx-auto">
              Igniting dreams and passion for a better future through mentorship and community support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#f5b301] hover:bg-[#d49a00] text-black font-bold py-3 px-6 rounded-lg flex items-center">
                Our Activities <FaCalendarAlt className="ml-2" />
              </button>
              <button className="bg-transparent hover:bg-[#5a0404] text-white font-bold py-3 px-6 border-2 border-[#f5b301] rounded-lg flex items-center">
                Join Alumni <FaUserGraduate className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#8c0606] mb-2">About OHSAA</h2>
            <div className="w-20 h-1 bg-[#f5b301] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Olympic High School Alumni Association (OHSAA) is a registered initiative founded by Olympic High School graduates (Alumni) and formed on 23rd September 2018.
              </p>
              <p className="text-gray-700 mb-4">
                We have the passion, zeal, and an unending desire for giving back to the society through mentoring the young generation and especially students thus igniting their dreams and passion for a better future through self-realization and unleashing their potentials beyond every limitation.
              </p>
              <p className="text-gray-700 mb-6">
                Through the support of the Olympic High School administration and well-wishers, we have been reaching these dreams. Our core objective is to promote the academic, physical, moral, and spiritual growth of students.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-[#f8e0e0] px-4 py-2 rounded-full">
                  <FaChalkboardTeacher className="text-[#8c0606] mr-2" />
                  <span className="text-[#8c0606] font-medium">Mentorship</span>
                </div>
                <div className="flex items-center bg-[#f8e0e0] px-4 py-2 rounded-full">
                  <FaBook className="text-[#8c0606] mr-2" />
                  <span className="text-[#8c0606] font-medium">Education</span>
                </div>
                <div className="flex items-center bg-[#f8e0e0] px-4 py-2 rounded-full">
                  <FaTrophy className="text-[#8c0606] mr-2" />
                  <span className="text-[#8c0606] font-medium">Excellence</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#8c0606] p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p>To be the leading alumni association in nurturing holistic student development.</p>
              </div>
              <div className="bg-[#f5b301] p-6 rounded-lg text-black">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p>To promote academic, physical, moral, and spiritual growth of students.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg col-span-2">
                <h3 className="text-xl font-bold mb-2 text-[#8c0606]">Registration</h3>
                <p className="text-gray-700">
                  OHSAA is a registered National Non-Profit and Non-Political Organization with registration certificate no: <strong>SOC/78149</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div id="activities" className="py-12 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#8c0606] mb-2">Our Activities</h2>
            <div className="w-20 h-1 bg-[#f5b301] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We organize various programs to support students and promote the school's development.
            </p>
          </div>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8c0606] text-white font-bold text-xl px-4 py-2 rounded-full">
                    {activity.year}
                  </div>
                </div>
                <ul className="space-y-2">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-[#f5b301] mt-1 mr-2">
                        <FaArrowRight />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 bg-[#8c0606] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2">Mentorship Impact</h2>
            <div className="w-20 h-1 bg-[#f5b301] mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto text-[#f5e38c]">
              Hear from our mentors who have inspired students through our programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#5a0404] p-6 rounded-lg">
                <div className="mb-4">
                  <FaUserGraduate className="text-[#f5b301] text-3xl" />
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-[#f5b301]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {gallery.map((item, index) => (
    <div key={item.id || index} className="relative group overflow-hidden rounded-lg shadow-lg">
      <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-[#f5b301] text-black px-4 py-2 rounded-md font-medium">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>


      {/* Alumni Stories Section */}
      <div id="alumni-stories" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#8c0606] mb-2">Alumni Stories</h2>
            <div className="w-20 h-1 bg-[#f5b301] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Messages from our alumni executive team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {alumniStories.map((alumni, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#8c0606]">{alumni.name}</h3>
                  <p className="text-[#f5b301] font-medium mb-2">{alumni.position}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Graduated:</span> {alumni.graduationYear}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">School Roles:</span> {alumni.schoolRoles}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Education:</span> {alumni.education}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 italic">"{alumni.message}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div id="contact" className="py-12 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#8c0606] mb-2">Contact Us</h2>
            <div className="w-20 h-1 bg-[#f5b301] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#8c0606] mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#8c0606]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Phone:</p>
                    <p className="text-gray-900 font-medium">0790333460, 0789202312</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#8c0606]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Email:</p>
                    <p className="text-gray-900 font-medium">ohsaa2019@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#8c0606]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Social Media:</p>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-[#8c0606] hover:text-[#5a0404]">
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-[#8c0606] hover:text-[#5a0404]">
                        <FaTwitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-[#8c0606] hover:text-[#5a0404]">
                        <FaInstagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-[#8c0606] hover:text-[#5a0404]">
                        <FaYoutube className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8c0606] mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#8c0606] focus:border-[#8c0606]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#8c0606] focus:border-[#8c0606]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#8c0606] focus:border-[#8c0606]"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-[#f5b301] hover:bg-[#d49a00] text-black font-bold py-2 px-4 rounded-md">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#5a0404] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">OHSAA</h3>
              <p className="text-[#f5e38c]">
                Olympic High School Alumni Association - Igniting dreams and passion for a better future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#f5e38c] hover:text-white">Home</a></li>
                <li><a href="#about" className="text-[#f5e38c] hover:text-white">About</a></li>
                <li><a href="#activities" className="text-[#f5e38c] hover:text-white">Activities</a></li>
                <li><a href="#gallery" className="text-[#f5e38c] hover:text-white">Gallery</a></li>
                <li><a href="#contact" className="text-[#f5e38c] hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Activities</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaMicroscope className="mr-2 text-[#f5b301]" />
                  <span>Maths Symposium</span>
                </li>
                <li className="flex items-center">
                  <FaNewspaper className="mr-2 text-[#f5b301]" />
                  <span>The Lens Magazine</span>
                </li>
                <li className="flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-[#f5b301]" />
                  <span>Mentorship</span>
                </li>
                <li className="flex items-center">
                  <FaBook className="mr-2 text-[#f5b301]" />
                  <span>Library Donations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-[#f5b301] hover:text-white">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#f5b301] hover:text-white">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#f5b301] hover:text-white">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#f5b301] hover:text-white">
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
              <p className="text-[#f5e38c]">
                Subscribe to our newsletter for updates
              </p>
              <div className="mt-2 flex">
                <input type="email" placeholder="Your email" className="bg-[#8c0606] text-white px-3 py-2 rounded-l-md focus:outline-none w-full" />
                <button className="bg-[#f5b301] text-black px-4 py-2 rounded-r-md font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#8c0606] text-center text-[#f5e38c]">
            <p>&copy; {new Date().getFullYear()} Olympic High School Alumni Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;