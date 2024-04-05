// eslint-disable-next-line no-unused-vars
import React from "react";
import { TbDownload } from "react-icons/tb";
import PropTypes from "prop-types";

const DownloadButton = (prop) => {
  return (
    <button
      className="bg-black w-fit h-fit p-2 rounded-lg text-white font-BreeSerif shadow-md"
      onClick={prop.download}
    >
      <div className="flex flex-row items-center">
        <TbDownload className="itext-white mr-2" />
        Download
      </div>
    </button>
  );
};

DownloadButton.propTypes = {
  download: PropTypes.func,
};

export default DownloadButton;
