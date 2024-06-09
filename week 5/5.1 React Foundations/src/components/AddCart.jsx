import React, { useState } from "react";
import DialogBox from "./DialogBox";

const AddCart = () => {
  const [show, setshow] = useState(false);
  const [details, setDetails] = useState([]);

  function handleAddDetails(newdetails) {
    setDetails([newdetails, ...details]);
  }
  function handleCloseShow() {
    setshow(false);
  }
  function openDialogBox() {
    setshow(true);
  }
  return (
    <div className="">
    <div className="flex items-center justify-center p-2">
    <button
        className="bg-slate-100 rounded w-36 text-slate-900 text-center h-10 font-bold "
        onClick={openDialogBox}
      >
      Add Cart  ➕
      </button>
    </div>
      <div className="">
      <DialogBox
        show={show}
        onSubmit={handleAddDetails}
        onClose={handleCloseShow}
      />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 p-4 m-2">
        {details.map((detail, index) => (
          <div key={index} className="flex">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-slate-700 text-white">
              <div className="font-bold text-xl mb-2">Name:{detail.name}</div>
              <p className="text-gray-100 text-base mb-4">
                About: {detail.description}
              </p>
              <div className="flex space-x-4 mb-4">
                <button className="bg-slate-100 text-slate-950 font-semibold p-2 rounded">
                  Facebook
                </button>
                <button className="bg-slate-100 text-slate-950 font-semibold p-2 rounded">
                  Linkedin
                </button>
              </div>
              <div>
                <h4 className="font-bold mb-2">Interest: {detail.Interest}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default AddCart;
