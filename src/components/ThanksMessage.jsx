/* eslint-disable react/prop-types */
export default function ThanksMessage({setModalOpen}) {
  return (   
      <article 
        className="flex flex-col items-center bg-white h-[382px] w-[327px] 
            mx-auto mt-8 pt-8 px-6 pb-10 rounded-lg xl:w-[540px] xl:h-[449px] xl:px-12"
      >
        <div className="mb-5 xl:mb-16">
          <svg            
            width="64" 
            height="64" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <g fill="none" fillRule="evenodd">
              <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
              <path
                stroke="#FFF"
                strokeWidth="5"
                d="M20 31.86L28.093 40 44 24"
              />
            </g>
          </svg>
        </div>
        <h2 className="text-lg font-bold mb-5 xl:text-2xl xl:mb-8">Thanks for your support!</h2>
        <p className="text-center text-sm leading-6 mb-8 xl:text-base xl:mb-10">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>    

        <button 
          onClick={() => setModalOpen(false)}
          className="w-[107px] h-[48px] bg-greenish rounded-full text-white font-bold hover:bg-dark-cyan"
        >
          Got it!
        </button>
      </article>   
  );
}
