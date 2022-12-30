import Navbar from '../../components/Navbar/Navbar';
import Experience from '../../components/Experience/Experience';

function Home() {
  return (
    <div class='home-div w-screen h-screen bg-slate-500 font-sans subpixel-antialiased text-slate-50'>
      <Navbar />
      <Experience />
    </div>
  );
}

export default Home;
