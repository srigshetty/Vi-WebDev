import Suggestions from './Suggestions';
import JobList from './JobList';
import avtarImage from "../../assets/avtarIntern2.png"
// import avtarImage from "../../assets/avatarimg_inter.png"

const MainContent = () => {
  return (
    <main className="flex-1 px-2 md:px-6 ">
      <Suggestions />

      <div className="relative bg-gradient-to-b from-pink-400 to-blue-200 p-4 md:p-6 pb-16 md:py-10 mt-10 md:mt-20 mb-8 text-center rounded-lg">
        <div className='w-full md:w-1/2 text-start px-0 md:px-8'>

          <h2 className="font-bold text-white text-lg md:text-2xl">Keep Connected And Embrace New Internship Opportunities</h2>
          <div className='w-1/2 md:w-full'>
            <p className="text-white mt-2 font-semibold text-sm md:text-base">Connection breeds opportunity. Stay linked, stay open.</p>
          </div>
        </div>
        {/* Image */}
        <img
          src={avtarImage}
          alt="Descriptive Alt Text"
          className="absolute bottom-0 right-4 md:right-32 w-40 md:w-64"
        />
      </div>



      {/* Job List assign to Avinash */}
      <JobList />
    </main>
  );
};

export default MainContent;
