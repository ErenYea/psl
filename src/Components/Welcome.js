import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AWS from "aws-sdk";
const AWS_ACCESS_KEY = "AKIA47W6BLPUO47YQLC7";
const AWS_SECRET_KEY = "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";
const BUCKET_NAME = "pslinterpretor";

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
});

const s3 = new AWS.S3();

const Welcome = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [s3data, sets3data] = useState(null);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState("");
  const uploadFile = async (file) => {
    const params = {
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: file,
    };

    try {
      const response = await s3.upload(params).promise();
      console.log("File uploaded successfully:", response);
      // sets3data(response);
      return response;
    } catch (error) {
      console.log("hamza");
      console.error("Error uploading file:", error);
      return false;
    }
  };
  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);
    setFile(selectedFile);
    if (selectedFile) {
      setSuccess(true);
      const res = await uploadFile(selectedFile);
      if (res) {
        // perform axios reqeust
        const resp = await axios.post(
          "https://a48f-34-86-182-179.ngrok-free.app/" +
            "pslinterpretor/backend",
          {
            url: res.Location,
          }
        );
        console.log(resp);
        const text = resp.data;
        const results = text.result.join(", ");
        setText(results);
        document.getElementById("text").classList.remove("hidden");
      }
      setSuccess(false);
      // event.target.files = [];
    }
  };
  // useEffect(() => {
  //   console.log(file);
  // }, [file]);
  return (
    <div className="w-full h-screen flex flex-col items-center mt-4 justify-center">
      <div className="text-3xl font-semibold text-green-700  text-center  mt-6">
        Welcome to PSL
      </div>
      <div className="text-3xl font-semibold text-green-700 text-center">
        Interpreter!
      </div>

      <div className="mt-8">{user.name}</div>
      <div className="mt-2">{user.email}</div>
      <img src="PSL_icon.png" alt="" className="w-[190px] h-fit mt-6" />

      <div
        className="text-md text-red-400 font-semibold text-center hidden"
        id="text"
      >
        Detected Sign : <span className=" italic ">{text}</span>
      </div>
      <div className="border border-b h-[1px] w-3/4 mt-6"></div>
      <div className="w-full flex justify-center mt-6">
        <div
          className="text-md text-center  text-gray-500 py-2 px-4 rounded-lg border shadow-inner shadow-gray-500 "
          id="project_summary"
        >
          <span className="">Upload Video to Detect</span>
          <input
            type="file"
            name="project_summary"
            id="project_summary"
            className="w-fit text-center cursor-pointer"
            required
            onChange={handleFileUpload}
          />
        </div>
      </div>
      {/* <div className="h-[50px] mt-3 border bg-[#11a453] rounded-lg text-white w-3/4 text-center flex items-center justify-center">
        Upload Video to Detect
      </div> */}
      <div
        className="h-[50px] mt-3 border bg-[#11a453]/70 rounded-lg text-white w-3/4 text-center flex items-center justify-center"
        onClick={() => {
          setUser(null);
          navigate("/login");
        }}
      >
        Logout
      </div>
      {success && (
        <div class="flex absolute top-auto bottom-auto left-auto right-auto items-center justify-center backdrop-blur-sm ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-24 h-24 text-red-600 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Welcome;
