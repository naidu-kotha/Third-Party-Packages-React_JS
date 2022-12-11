import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import "./ReactPopup.css";

const overlayStyles = {
  backgroundColor: "#ffff",
};

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button className="trigger-button" type="button">
          Trigger
        </button>
      }
      overlayStyle={overlayStyles}
      //   position="top right"
    >
      {/* <div>
        <p>React is a popular and widely used programming language</p>
      </div> */}
      {(close) => (
        <>
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
);
export default ReactPopUp;
