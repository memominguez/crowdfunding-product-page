/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PledgeForm({
  setModalOpen,
  setSubmitted,
  totalBucks,
  setTotalBucks,
  backers,
  setBackers,
}) {
  const [selection, setSelection] = useState("");

  const [bucksNoReward, setBucksNoReward] = useState(25);
  const [bucksBamboo, setBucksBamboo] = useState(25)
  const [bucksBlack, setBucksBlack] = useState(75)
  const [bucksMahogany, setBucksMahogany] = useState(200)
 
  const handleNoReward = (e) => {
    e.preventDefault();
    setBackers((prevBackers) => prevBackers + 1);
    setTotalBucks(totalBucks + +bucksNoReward);  
    setSubmitted(true);
  };


  const handleBamboo = (e) => {
    e.preventDefault();
    setBackers((prevBackers) => prevBackers + 1);
    setTotalBucks(totalBucks + +bucksBamboo);
    setSubmitted(true);
  };

  const handleBlack = (e) => {
    e.preventDefault();
    setBackers((prevBackers) => prevBackers + 1);
    setTotalBucks(totalBucks + +bucksBlack);
    setSubmitted(true);
  };

  const handleMahogany = (e) => {
    e.preventDefault();
    setBackers((prevBackers) => prevBackers + 1);
    setTotalBucks(totalBucks + +bucksMahogany);
    setSubmitted(true);
  };

  return (
    <section className="w-[327px] h-fit mx-auto pt-8 mt-2 mb-2 bg-white xl:w-[730px]">
      <article className="px-6 xl:px-12">
        <div className="flex flex-row justify-between items-baseline">
          <h1 className="text-lg font-bold mb-4 xl:text-2xl">
            Back this project
          </h1>
          <button onClick={() => setModalOpen(false)}>
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="#000"
                fillRule="evenodd"
                opacity=".4"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm leading-6 text-dark-gray mb-6 xl:text-base">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </article>

      {/* ******************* Pledge with no reward ****************** */}
      <article
        className="w-[279px] h-fit mx-auto border-2 border-stone-200 rounded-lg 
          pt-6 px-6 pb-6 mb-6 xl:w-[634px] xl:pt-8 focus-within:border-moderate-cyan"
      >
        <div className="flex flex-row justify-start gap-3 mb-8 xl:mb-4">
          <input
            type="radio"
            name="selection"
            value="noreward"
            onChange={(e) => setSelection(e.target.value)}
            className="w-6 h-6"
          />
          <h2 className="font-bold">Pledge with no reward</h2>
        </div>
        <p className="text-sm text-dark-gray leading-6 mb-6 xl:ml-8">
          Choose to support us without a reward if you simply believe in out
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>

        {/* Submit form */}
        {selection === "noreward" && (
          <form onSubmit={handleNoReward}>
            <hr className="border-t-2 mb-4" />
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
              <p className="text-center text-sm text-dark-gray mb-4 xl:text-base xl:mb-0">
                Enter your pledge
              </p>
              <div className="flex flex-row justify-between">
                <div className="relative">
                  <div className="text-lg font-bold text-dark-gray absolute left-4 top-[10px]">
                    &#36;
                  </div>
                  <input
                    type="number"
                    min="25"
                    autoFocus
                    value={bucksNoReward}
                    onChange={(e) => setBucksNoReward(e.target.value)}
                    className="w-[100px] h-12 rounded-full outline-none 
                  border-solid border-2 border-slate-300 pl-8 font-bold cursor-pointer xl:mr-4"
                  />
                </div>

                <button
                  type="submit"
                  className="w-[115px] h-12 bg-moderate-cyan rounded-full text-white hover:bg-dark-cyan"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        )}
      </article>

      {/* ********************* Bamboo stand ******************** */}
      <article
        className="w-[279px] h-fit mx-auto border-2 border-stone-200 rounded-lg 
          pt-6 px-6 pb-6 mb-6 xl:w-[634px] xl:pt-8 focus-within:border-moderate-cyan"
      >
        {/* Top row */}
        <div className="xl:flex xl:flex-row xl:justify-between xl:items-start xl:mb-4">
          <div className="flex flex-row justify-start items-center gap-3 mb-8 xl:mb-0">
            <input
              type="radio"
              name="selection"
              value="bamboo"
              onChange={(e) => setSelection(e.target.value)}
              className="w-6 h-6"
            />
            <div className="xl:flex xl:gap-3">
              <h2 className="font-bold">Bamboo Stand</h2>
              <p className="text-sm text-moderate-cyan xl:text-base xl:font-bold">
                Pledge $25 or more
              </p>
            </div>
          </div>

          <div className="hidden xl:flex justify-start items-center gap-1">
            <h1 className="text-lg font-bold">101</h1>
            <span className="text-sm text-dark-gray">left</span>
          </div>
        </div>

        {/* Paragraph */}
        <p className="text-sm text-dark-gray leading-6 mb-6 xl:ml-8">
          You get an ergonomic stand made of natural bamboo. You&apo;ve helped
          us launch out promotional campaign, and you&apo;ll be added to a
          special Backer member list.
        </p>

        {/* How many left - Desktop hidden */}
        <div className="flex justify-start items-center gap-1 mb-6 xl:hidden">
          <h1 className="text-lg font-bold">101</h1>
          <span className="text-sm text-dark-gray">left</span>
        </div>

        {/* Submit form */}
        {selection === "bamboo" && (
          <form onSubmit={handleBamboo}>
            <hr className="border-t-2 mb-4" />
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
              <p className="text-center text-sm text-dark-gray mb-4 xl:text-base xl:mb-0">
                Enter your pledge
              </p>
              <div className="flex flex-row justify-between">
                <div className="relative">
                  <div className="text-lg font-bold text-dark-gray absolute left-4 top-[10px]">
                    &#36;
                  </div>
                  <input
                    type="number"
                    min="25"
                    autoFocus
                    value={bucksBamboo}
                    onChange={(e) => setBucksBamboo(e.target.value)}
                    className="w-[100px] h-12 rounded-full outline-none 
                  border-solid border-2 border-slate-300 pl-8 font-bold cursor-pointer xl:mr-4"
                  />
                </div>

                <button
                  type="submit"
                  className="w-[115px] h-12 bg-moderate-cyan rounded-full text-white hover:bg-dark-cyan"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        )}
      </article>

      {/* ********************* Black edition stand ******************** */}
      <article
        className="w-[279px] h-fit mx-auto border-2 border-stone-200 rounded-lg 
          pt-6 px-6 pb-6 mb-6 xl:w-[634px] xl:pt-8 focus-within:border-moderate-cyan"
      >
        {/* Top row */}
        <div className="xl:flex xl:flex-row xl:justify-between xl:items-start xl:mb-4">
          <div className="flex flex-row justify-start items-center gap-3 mb-8 xl:mb-0">
            <input
              type="radio"
              name="selection"
              value="black"
              onChange={(e) => setSelection(e.target.value)}
              className="w-6 h-6"
            />
            <div className="xl:flex xl:gap-3">
              <h2 className="font-bold">Black Edition Stand</h2>
              <p className="text-sm text-moderate-cyan xl:text-base xl:font-bold">
                Pledge $75 or more
              </p>
            </div>
          </div>

          <div className="hidden xl:flex justify-start items-center gap-1">
            <h1 className="text-lg font-bold">64</h1>
            <span className="text-sm text-dark-gray">left</span>
          </div>
        </div>

        {/* Paragraph */}
        <p className="text-sm text-dark-gray leading-6 mb-6 xl:ml-8">
          You get a Black Special Edition computer stand and a personal thank
          you. You&apo;ll be added to our Backer member list. Shipping is
          included.
        </p>

        {/* How many left - Desktop hidden */}
        <div className="flex justify-start items-center gap-1 mb-6 xl:hidden">
          <h1 className="text-lg font-bold">64</h1>
          <span className="text-sm text-dark-gray">left</span>
        </div>

        {/* Submit form */}
        {selection === "black" && (
          <form onSubmit={handleBlack}>
            <hr className="border-t-2 mb-4" />
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
              <p className="text-center text-sm text-dark-gray mb-4 xl:text-base xl:mb-0">
                Enter your pledge
              </p>
              <div className="flex flex-row justify-between">
                <div className="relative">
                  <div className="text-lg font-bold text-dark-gray absolute left-4 top-[10px]">
                    &#36;
                  </div>
                  <input
                    type="number"
                    min="75"
                    autoFocus
                    value={bucksBlack}
                    onChange={(e) => setBucksBlack(e.target.value)}
                    className="w-[100px] h-12 rounded-full outline-none 
                  border-solid border-2 border-slate-300 pl-8 font-bold cursor-pointer xl:mr-4"
                  />
                </div>

                <button
                  type="submit"
                  className="w-[115px] h-12 bg-moderate-cyan rounded-full text-white hover:bg-dark-cyan"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        )}
      </article>

      {/* ********************* Mahogany special edition ******************** */}
      <article
        className="w-[279px] h-fit mx-auto border-2 border-stone-200 rounded-lg 
          pt-6 px-6 pb-6 mb-6 xl:w-[634px] xl:pt-8 focus-within:border-moderate-cyan"
      >
        {/* Top row */}
        <div className="xl:flex xl:flex-row xl:justify-between xl:items-start xl:mb-4">
          <div className="flex flex-row justify-start items-center gap-3 mb-8 xl:mb-0">
            <input
              type="radio"
              name="selection"
              value="mahogany"
              onChange={(e) => setSelection(e.target.value)}
              className="w-6 h-6"
            />
            <div className="xl:flex xl:gap-3">
              <h2 className="font-bold text-gray-300">
                Mahogany Special Edition
              </h2>
              <p className="text-sm text-teal-200 xl:text-base xl:font-bold">
                Pledge $200 or more
              </p>
            </div>
          </div>

          <div className="hidden xl:flex justify-start items-center gap-1">
            <h1 className="text-lg text-gray-300 font-bold">0</h1>
            <span className="text-sm text-dark-gray">left</span>
          </div>
        </div>

        {/* Paragraph */}
        <p className="text-sm text-gray-300 leading-6 mb-6 xl:ml-8">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You&apo;ll be added to our Backer member list.
          Shipping is included.
        </p>

        {/* How many left - Desktop hidden */}
        <div className="flex justify-start items-center gap-1 mb-6 xl:hidden">
          <h1 className="text-lg text-gray-300 font-bold">0</h1>
          <span className="text-sm text-dark-gray">left</span>
        </div>

        {/* Submit form */}
        {selection === "mahogany" && (
          <form onSubmit={handleMahogany}>
            <hr className="border-t-2 mb-4" />
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
              <p className="text-center text-sm text-dark-gray mb-4 xl:text-base xl:mb-0">
                Enter your pledge
              </p>
              <div className="flex flex-row justify-between">
                <div className="relative">
                  <div className="text-lg font-bold text-dark-gray absolute left-4 top-[10px]">
                    &#36;
                  </div>
                  <input
                    type="number"
                    min="200"
                    autoFocus
                    value={bucksMahogany}
                    onChange={(e) => setBucksMahogany(e.target.value)}
                    className="w-[100px] h-12 rounded-full outline-none 
                  border-solid border-2 border-slate-300 pl-8 font-bold cursor-pointer xl:mr-4"
                  />
                </div>
                <button
                  type="submit"
                  className="w-[115px] h-12 bg-moderate-cyan rounded-full text-white hover:bg-dark-cyan"
                  disabled
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        )}
      </article>
    </section>
  );
}
