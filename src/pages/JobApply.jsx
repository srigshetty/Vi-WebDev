import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { FaUserGroup } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";

// Sample JSON data
const jobData = {
  title: "UI/UX Designer",
  company: "Genex Corporate service",
  location: "Mumbai",
  locationIcon: <GrLocation />,
  stipend: "₹ 15,000 / month",
  stipendIcon: <BsCurrencyDollar />,
  duration: "3 months",
  durationIcon: <FaRegCalendarAlt />,
  applyBy: "20 OCT '24",
  applyByIcon: <MdOutlineTimer />,
  openings: 6,
  openingsIcon: <TfiBag />,
  applicants: "18 Candidates",
  applicantsIcon: <FaUserGroup />,
  onboarding: "Immediate Join",
  onboardingIcon: <GrUpdate />,
  posted: "Today",
  postedIcon: <MdDateRange />,
  internshipSpotlight: [
    "Proficient in Designing tools like Adobe XD, Figma, etc.",
    "Certification regarding designing courses."
  ],
  skillsRequired: [
    "Figma", "UX Research", "Adobe Photoshop", "Adobe Illustrator", "Sketch", 
    "Mockups", "Userflow", "Prototyping"
  ],
  overview: `Our UI/UX Design Internship program provides a unique opportunity 
             to gain hands-on experience in designing and enhancing digital products. 
             As an intern, you'll collaborate with our seasoned design team, 
             contribute to live projects, and sharpen your skills in a dynamic, 
             team-oriented environment.`,
  requirements: [
    "Should be available for full-time (in-office) internship",
    "Basic understanding of design principles and tools",
    "Portfolio: A portfolio showcasing your design work (academic or personal projects) is a plus",
    "Strong verbal and written communication skills",
    "Enthusiasm for learning and growing in the field of UI/UX design",
    "Should be available for a duration of 3 months"
  ],
  responsibilities: [
    "Develop wireframes, build prototypes, and craft high-fidelity mockups",
    "Gain proficiency with industry-standard tools such as Figma, Sketch, and Adobe XD",
    "Translate design ideas into interactive experiences",
    "Perform user research and conduct usability testing",
    "Collaborate with developers, project managers, and cross-functional team members"
  ]
};

const JobApply = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleApply = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <Link to="/intern2">
        <button className="border border-gray-600 text-gray-600 font-semibold px-4 py-1 rounded-md mb-6">&larr; Back</button>
      </Link>

      {/* Job Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">{jobData.title}</h1>
          <FaArrowUpRightFromSquare className='inline-flex mr-3 text-gray-600'/>
          <span className="font-bold text-sm sm:text-lg text-gray-600">{jobData.company}</span>
        </div>
        <div className='flex flex-col space-y-2'>
          <button className="button px-4">Apply Now</button>
          <button className="border border-[#0D3451] text-[#0D3451] font-semibold px-4 py-1 rounded-md">Save</button>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex flex-col sm:grid grid-cols-2 gap-4 p-4">
        {/* Left Column */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.locationIcon} Location</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.location}</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.stipendIcon} Stipend</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.stipend}</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.durationIcon} Duration</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.duration}</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.applyByIcon} Apply by</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.applyBy}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.openingsIcon} Openings</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.openings}</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.applicantsIcon} Applicants</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.applicants}</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.onboardingIcon} Onboarding</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.onboarding}</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-2 rounded border border-gray-100">
            <span className="font-medium flex items-center gap-4">{jobData.postedIcon} Posted</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-300 font-semibold">
            <p>{jobData.posted}</p>
          </div>
        </div>
      </div>

      {/* Internship Spotlight */}
      <div className="mt-10 mb-10">
        <h2 className="text-xl mb-2 font-bold">Internship Spotlight</h2>
        <ul className="list-disc pl-6 text-gray-600 font-medium">
          {jobData.internshipSpotlight.map((spotlight, index) => (
            <li key={index}>{spotlight}</li>
          ))}
        </ul>
      </div>

      {/* Skills Required */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">Skill(s) Required</h2>
        <div className="flex flex-wrap pl-3 text-gray-600 gap-4 mt-4 font-medium">
          {jobData.skillsRequired.map((skill, index) => (
            <span key={index} className="px-3 py-[1px] border border-gray-400 rounded-full bg-slate-50 text-sm text-gray-600">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Overview</h2>
        <p className="text-gray-600">{jobData.overview}</p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-600">
          {jobData.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Requirements</h2>
        <ul className="list-disc pl-6 text-gray-600">
          {jobData.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <button 
        onClick={handleApply} 
        className="bg-[#0D3451] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#052538]"
      >
        Apply
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
            <p className="mb-4 text-gray-600">Thank you for applying. We will review your application and get back to you soon.</p>
            <button 
              onClick={closePopup} 
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApply;
