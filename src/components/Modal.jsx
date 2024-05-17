/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import PledgeForm from "./PledgeForm";
import ThanksMessage from "./ThanksMessage";

export default function Modal({
  setModalOpen,
  totalBucks,
  setTotalBucks,
  backers,
  setBackers,
}) {
  // https://www.youtube.com/watch?v=nwJK-jo91vA

  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="fixed inset-0 h-screen bg-black bg-opacity-25 backdrop-blur-sm
            flex justify-center items-start overflow-auto"
    >
      {submitted ? (
        <ThanksMessage setModalOpen={setModalOpen} />
      ) : (
        <PledgeForm
          setModalOpen={setModalOpen}
          setSubmitted={setSubmitted}
          totalBucks={totalBucks}
          setTotalBucks={setTotalBucks}
          backers={backers}
          setBackers={setBackers}
        />
      )}
    </div>
  );
}
