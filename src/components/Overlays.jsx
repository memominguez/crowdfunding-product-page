/* eslint-disable no-unused-vars */
import { createPortal } from "react-dom";
import Modal from "./Modal";

const mountElement = document.getElementById("overlays");
// https://www.youtube.com/watch?v=6uypfDjBQ9Q&t=485s

const Overlays = ({
  modalOpen,
  setModalOpen,
  totalBucks,
  setTotalBucks,
  backers,
  setBackers,
}) => {
  return createPortal(
    <>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          totalBucks={totalBucks}
          setTotalBucks={setTotalBucks}
          backers={backers}
          setBackers={setBackers}
        />
      )}
    </>,
    mountElement
  );
};

export default Overlays;
