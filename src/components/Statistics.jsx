/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Statistics({ backers, totalBucks, fundTarget }) {

  const formattedBucks = totalBucks.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  // ***********************  Project Deadline ****************
  // Today's date
  const today = new Date();

  // October 31, 2024
  const october31_2024 = new Date(2024, 9, 31); // Note: Months are zero-based (0-11)

  // Calculate the difference in milliseconds
  const differenceMs = october31_2024 - today;

  // Convert milliseconds to days
  const daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));


  // ************************ Progress Bar *************************
 
  let pctBacked = totalBucks / fundTarget * 100 

  if (pctBacked > 100) {
    pctBacked = 100
  }

  return (
    <article
      className="w-[327px] h-[412px] bg-white mx-auto mb-6 pt-6 rounded-lg
            xl:w-[730px] xl:h-[212px] xl:px-12 xl:pt-10"
    >
      <div className="grid grid-cols-1 gap-5 mb-10 xl:grid-cols-3 xl:mb-6">
        <div className="xl:border-r-2">
          <h1 className="text-3xl font-bold text-center mb-2">
            ${formattedBucks}
          </h1>
          <p className="text-sm text-dark-gray text-center mb-6 xl:text-base">
            of $100,000 backed
          </p>
          <hr className="w-20 mx-auto border-t border-dark-gray xl:hidden"></hr>
        </div>

        <div className="xl:border-r-2">
          <h1 className="text-3xl font-bold text-center mb-2">{backers}</h1>
          <p className="text-sm text-dark-gray text-center mb-6 xl:text-base">
            total backers
          </p>
          <hr className="w-20 mx-auto border-t border-dark-gray xl:hidden"></hr>
        </div>

        <div className="xl:border-r-2">
          <h1 className="text-3xl font-bold text-center mb-2">{daysLeft}</h1>
          <p className="text-sm text-dark-gray text-center mb-2 xl:text-base">days left</p>
        </div>
      </div>

      <div className="flex justify-start w-[279px] h-3 bg-slate-300 mx-auto rounded-full xl:w-[634px]">
        {/* Tailwind styling failed */}
        <div style={{width: `${pctBacked}%`, height: "12px", backgroundColor: "#3cb4ac"}}></div>
      </div>
    </article>
  );
}
