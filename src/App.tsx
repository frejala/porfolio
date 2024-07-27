import Header from '@/components/layout/Header';
import AboutMe from '@/components/sections/AboutMe';
import { StarsBackground } from './components/ui/StarsBackground';

const App = () => {
  return (
    <main className="relative flex flex-wrap justify-center bg-[#1F1F23]">
      <StarsBackground />
      <div className="w-full max-w-screen-2xl py-1 md:py-5">
        <Header />
      </div>
      <div className="w-full max-w-[1450px]">
        <AboutMe />
      </div>
    </main>
  );
};

export default App;
