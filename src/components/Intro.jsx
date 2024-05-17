/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Overlays from "./Overlays";

export default function Intro({
  modalOpen,
  setModalOpen,
  totalBucks,
  setTotalBucks,
  backers,
  setBackers,
}) {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <>
      <Overlays 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        totalBucks={totalBucks}
        setTotalBucks={setTotalBucks}
        backers={backers}
        setBackers={setBackers}
      />

      <article
        className="w-[327px] h-[284px] mx-auto -mt-14 mb-6 px-8 bg-white flex 
            flex-col items-center relative rounded-lg xl:-mt-20 xl:w-[730px] xl:h-[297px] xl:px-12"
      >
        <figure className="-mt-8 mb-6">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#000" cx="28" cy="28" r="28" />
              <g fillRule="nonzero">
                <path
                  d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                  fill="#444"
                />
                <path
                  d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                  fill="#FFF"
                />
              </g>
            </g>
          </svg>
        </figure>

        <h2 className="text-xl font-bold text-center mb-6 xl:text-3xl">
          Mastercraft Bamboo Monitor Riser
        </h2>

        <p className="text-center text-sm mb-6 xl:text-base xl:mb-14">
          A beautifully handcrafted monitor stand to reduce neck and eye strain
        </p>

        <div className="w-full flex justify-between gap-2">
          <button
            className="w-[214px] h-[56px] bg-moderate-cyan rounded-full text-white font-bold hover:bg-dark-cyan"
            onClick={() => setModalOpen(true)}
          >
            Back this project
          </button>

          <button onClick={handleBookmark}>
            <div
              className={`xl:w-[190px] xl:flex xl:justify-start items-center rounded-full 
              ${bookmarked ? "bg-emerald-100" : "bg-slate-200"}`}
            >
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle
                    className={`${
                      bookmarked ? "fill-dark-cyan" : "fill-[#2F2F2F]"
                    }`}
                    // fill="#2F2F2F"
                    cx="28"
                    cy="28"
                    r="28"
                  />
                  <path
                    className={`${
                      bookmarked ? "fill-white" : "fill-[#B1B1B1]"
                    }`}
                    // fill="#B1B1B1"
                    d="M23 19v18l5-5.058L33 37V19z"
                  />
                </g>
              </svg>
              <p
                className={`hidden ml-4 font-bold xl:block 
              ${bookmarked ? "text-dark-cyan" : "text-dark-gray"}`}
              >
                {bookmarked ? "Bookmarked" : "Bookmark"}
              </p>
            </div>
          </button>
        </div>
      </article>
    </>
  );
}
