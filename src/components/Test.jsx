import "./test.css";
import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../utils/textStyles";

const Test = () => {
  return (
    <div className="container">
      <div className="planet-container">
        <div className="day">
          <div className="pin Saudi">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Saudi Arabia
            </span>
          </div>
          <div className="pin uk">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              United Kingdom
            </span>
          </div>
          <div className="pin France">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              France
            </span>
          </div>
          <div className="pin Spain">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Spain
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
