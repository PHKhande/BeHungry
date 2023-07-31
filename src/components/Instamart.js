import { useState } from "react";

import { LOREM_IPSUM_TEXT } from "../Constants";

const Section = ({
  val,
  sectionName,
  sectionText,
  isVisible,
  setIsVisible,
}) => {
  return (
    <div className="border border-purple-950 p-2 m-2">
      <h1 className="text-3xl font-bold px-2 mx-2">{sectionName}</h1>
      {isVisible ? (
        <div className="px-2 mx-2">
          <button
            className="text-sm italic underline"
            onClick={() => {
              setIsVisible("");
            }}
          >
            Hide
          </button>
          <p className="italic">{sectionText}</p>
        </div>
      ) : (
        <button
          className="px-2 mx-2 text-sm underline"
          onClick={() => {
            setIsVisible(val);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="bg-purple-300 m-5 border border-purple-800 rounded-md">
      <Section
        key={"about"}
        val={"about"}
        sectionName={"About"}
        sectionText={LOREM_IPSUM_TEXT}
        isVisible={visibleSection === "about"}
        setIsVisible={(name) => setVisibleSection(name)}
      />
      <Section
        key={"team"}
        val={"team"}
        sectionName={"Team"}
        sectionText={LOREM_IPSUM_TEXT}
        isVisible={visibleSection === "team"}
        setIsVisible={(name) => setVisibleSection(name)}
      />
      <Section
        key={"product"}
        val={"product"}
        sectionName={"Product"}
        sectionText={LOREM_IPSUM_TEXT}
        isVisible={visibleSection === "product"}
        setIsVisible={(name) => setVisibleSection(name)}
      />
    </div>
  );
};

export default Instamart;
