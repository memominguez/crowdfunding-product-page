/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Overlays from "./Overlays";
export default function Information({
  modalOpen,
  setModalOpen,
  totalBucks,
  setTotalBucks,
  backers,
  setBackers,
}) {
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

      <section className="w-[327px] h-[1655px] mx-auto pt-8 bg-white xl:w-[730px] xl:h-[1197px] xl:pt-10">
        <article className="px-6 xl:px-12">
          <h1 className="text-lg font-bold mb-4">About this project</h1>
          <p className="text-sm leading-6 text-dark-gray mb-6 xl:text-base xl:leading-7">
            The Mastercraft Bamboo Monitor Rise is a sturdy and stylish platform
            that elevates your screen to a more comfortable viewing height.
            Placing your monitor at eye level has the potential to improve your
            posture and make you more comfortable while at work, helping you
            stay focused on the task at hand.
          </p>
          <p className="text-sm leading-6 text-dark-gray mb-8 xl:text-base xl:leading-7 xl:mb-10">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </article>

        {/* ********************* Bamboo stand ******************** */}
        <article
          className="w-[279px] h-[370px] mx-auto border-2 border-stone-200 rounded-lg 
          py-4 px-6 mb-6 xl:w-[634px] xl:h-[248px] xl:py-0 xl:pt-8"
        >
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <h2 className="font-bold xl:text-lg">Bamboo Stand</h2>
            <p className="text-moderate-cyan mb-6">Pledge $25 or more</p>
          </div>
          <p className="text-sm leading-6 text-dark-gray mb-6 xl:text-base xl:leading-7">
            You get an ergonomic stand made of natural bamboo. You&apos;ve
            helped us launch our promotional campaign and you&apos;ll be added
            to a special Backer member list.
          </p>
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <div className="flex justify-start items-center gap-1 mb-8">
              <h1 className="text-3xl font-bold">101</h1>
              <span className="text-sm text-dark-gray">left</span>
            </div>
            <button
              className="w-[157px] h-[48px] bg-moderate-cyan text-white rounded-full hover:bg-dark-cyan"
              onClick={() => setModalOpen(true)}
            >
              Select Reward
            </button>
          </div>
        </article>

        {/* ********************* Black edition stand ******************** */}
        <article
          className="w-[279px] h-[370px] mx-auto border-2 border-stone-200 rounded-lg 
          py-4 px-6 mb-6 xl:w-[634px] xl:h-[248px] xl:py-0 xl:pt-8"
        >
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <h2 className="font-bold xl:text-lg">Black Edition Stand</h2>
            <p className="text-moderate-cyan mb-6">Pledge $75 or more</p>
          </div>
          <p className="text-sm leading-6 text-dark-gray mb-6 xl:text-base xl:leading-7">
            You get a Black Special Edition complete stand and a personal thank
            you. You&apos;ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <div className="flex justify-start items-center gap-1 mb-8">
              <h1 className="text-3xl font-bold">64</h1>
              <span className="text-sm text-dark-gray">left</span>
            </div>
            <button
              className="w-[157px] h-[48px] bg-moderate-cyan text-white rounded-full hover:bg-dark-cyan"
              onClick={() => setModalOpen(true)}
            >
              Select Reward
            </button>
          </div>
        </article>

        {/* ********************* Mahogany special edition ******************** */}
        <article
          className="w-[279px] h-[370px] mx-auto border-2 border-stone-200 rounded-lg 
          py-4 px-6 mb-6 xl:w-[634px] xl:h-[248px] xl:py-0 xl:pt-8"
        >
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <h2 className="font-bold text-gray-300">
              Mahogany Special Edition
            </h2>
            <p className="text-teal-200 mb-6">Pledge $200 or more</p>
          </div>
          <p className="text-sm leading-6 text-gray-300 mb-6">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You&apo;ll be added to out Backer member list.
            Shipping is included.
          </p>
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <div className="flex justify-start items-center gap-1 mb-8">
              <h1 className="text-3xl text-gray-300 font-bold">0</h1>
              <span className="text-sm text-dark-gray">left</span>
            </div>
            <button
              className="w-[157px] h-[48px] bg-gray-300 text-white rounded-full"
              onClick={() => setModalOpen(true)}
              disabled
            >
              Select Reward
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
