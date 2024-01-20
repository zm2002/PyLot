import React from "react-native";
import "./style.css";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="div">
        <img className="image" alt="Image" src="image-1.png" />
        <div className="west-remote">
          <div className="overlap-group">
            <img className="img" alt="West remote ellipse" src="west-remote-ellipse.png" />
            <div className="text-wrapper">8</div>
          </div>
        </div>
        <div className="east-remote">
          <div className="overlap-group">
            <img className="img" alt="East remote ellipse" src="east-remote-ellipse.png" />
            <div className="east-remote-spots">5</div>
          </div>
        </div>
        <div className="core-west">
          <div className="overlap-group">
            <img className="img" alt="Core west ellipse" src="core-west-ellipse.png" />
            <div className="text-wrapper">4</div>
          </div>
        </div>
        <div className="arts-lot">
          <div className="overlap-group">
            <img className="img" alt="Arts lot ellipse" src="arts-lot-ellipse.png" />
            <div className="text-wrapper">17</div>
          </div>
        </div>
        <div className="text-wrapper-2">Open Spots</div>
        <div className="text-wrapper-3">East Remote</div>
        <div className="text-wrapper-4">5</div>
        <div className="ellipse" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="text-wrapper-5">8</div>
        <div className="text-wrapper-6">17</div>
        <div className="ellipse-4" />
        <div className="text-wrapper-7">4</div>
        <img className="ellipse-5" alt="Ellipse" src="ellipse-8.png" />
        <div className="text-wrapper-8">West Remote</div>
        <div className="text-wrapper-9">Arts Lot</div>
        <div className="text-wrapper-10">West Core</div>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <img className="banana-spot" alt="Banana spot" src="banana-spot.png" />
      </div>
    </div>
  );
};


export default MainPage;