import React from "react";

//this components will be used to wrap some other components to add some extra style on them
//the props indicated is nothing more than the other component mentioned above
function Modal(props) {
  return (
    <>
      <div className="backdrop" onClick={props.onBackgroundclick}></div>
      <dialog open className="modal centered">
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
