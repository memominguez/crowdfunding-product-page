/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./components/Header";
import Information from "./components/Information";
import Intro from "./components/Intro";
import Statistics from "./components/Statistics";


function App() { 
  const [modalOpen, setModalOpen] = useState(false);
  const [totalBucks, setTotalBucks] = useState(0);
  const [backers, setBackers] = useState(0);  
  let fundTarget = 100000

  return (
    <div className="w-full min-h-screen mx-auto bg-slate-100">
      <div className="w-[375px] mx-auto bg-slate-50 lg:w-[1024px] xl:w-[1280px] 2xl:w-[1440px]">
        <Header />
        <main>
          <Intro 
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen}
            totalBucks={totalBucks}
            setTotalBucks={setTotalBucks}
            backers={backers}
            setBackers={setBackers}
            />
          <Statistics backers={backers} totalBucks={totalBucks} fundTarget={fundTarget}/>
          <Information 
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen}
            totalBucks={totalBucks}
            setTotalBucks={setTotalBucks}
            backers={backers}
            setBackers={setBackers}
            />
        </main>        
      </div>
    </div>
  );
}

export default App;
