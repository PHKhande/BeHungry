import { useContext } from "react";
import AboutContext from "../../util/AboutContext";

const Footer = function () {
  const {dev} = useContext(AboutContext);
  return (
    <div className="bg-purple-300 m-5 border border-purple-800 rounded-md">
      <h4 className="p-2">
        Created By <strong>{dev.name}</strong>
      </h4>
      <strong className="p-2">Eat Green</strong>
    </div>
  );
};

export default Footer;
