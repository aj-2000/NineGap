import React, { useRef, useState } from "react";
import Header from "../components/layout/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const SignUpPage = () => {
  let navigate = useNavigate();
  const fileSelect = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<any>();
  const lastNameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const confirmPasswordRef = useRef<any>();
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState<any>([]);
  const [progress, setProgress] = useState(0);
  axios
    .get("http://localhost:5001/me", {
      headers: {
        "x-xsrf-token": "csrftoken",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  function uploadFile(file: any) {
    const url = `https://api.cloudinary.com/v1_1/hackon-technophiles/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
      setProgress(Math.round((e.loaded * 100.0) / e.total));
      console.log(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);

        setImage(response.secure_url);
        console.log(response.secure_url);
      }
    };

    fd.append("upload_preset", "udzvlomh");
    fd.append("tags", "browser_upload");
    fd.append("file", file);
    xhr.send(fd);
  }
  async function handleImageUpload() {
    if (fileSelect.current) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files: any) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      uploadFile(files[i]);
    }
  }

  const handleSignUp = (e: any) => {
    e.preventDefault();
    if (
      image &&
      firstNameRef.current?.value !== "" &&
      lastNameRef.current?.value !== "" &&
      emailRef.current?.value !== "" &&
      passwordRef.current?.value !== "" &&
      confirmPasswordRef.current?.value !== ""
    ) {
      const userBody = {
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        confirmPassword: confirmPasswordRef.current?.value,
        profilePhoto: image,
      };
      axios
        .post("http://localhost:5001/signup", userBody)
        .then((response) => {
          setMessages(["Signed Up Successfully, Redirecting to Sign Page"]);
          setTimeout(() => {
            navigate("/sign-in");
          }, 1000);
        })
        .catch((err) => {
          setMessages(err.response.data.error);
        });
    } else {
      setMessages(["Correctly Fill All Required Fields."]);
    }
  };

  return (
    <div>
      <div className="h-[100vh] overflow-scroll md:overflow-hidden">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:pb-[5000px] items-center justify-center min-w-[40%] bg-slate-200 py-auto overflow-scroll">
            <img
              className="max-w-[180px] md:max-w-[500px] mx-2"
              src="https://us01st-cf.zoom.us/fe-static/fe-signup-login-active/img/banner-step-2.4b72ef61.png"
            />
          </div>
          <div className="min-w-[60%] pb-4 md:pb-[5000px] flex flex-col justify-center items-center gap-y-6 md:mt-0 overflow-scroll">
            <div className="relative flex flex-col items-center md:mt-2">
              {messages.map((message: any) => (
                <span
                  key={message}
                  className="text-[10px] p-1 text-blue-500 font-bold"
                >
                  {message}
                </span>
              ))}
              <input
                ref={fileSelect}
                type="file"
                accept="image/*"
                style={{ display: "block" }}
                onChange={(e) => handleFiles(e.target.files)}
              />

              <div className="text-blue-900 max-h-[80px] max-w-[80px] rounded-full object-fill overflow-clip">
                {image && <img src={image} />}
                {!image && <CgProfile size={80} />}
              </div>
            </div>

            <form className="flex flex-col justify-center items-center gap-y-1">
              <div className="flex flex-col items-center gap-y-6">
                <input
                  className="rounded-sm border-1 border p-2 w-[320px]"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  ref={firstNameRef}
                />
              </div>
              <div className="flex flex-col items-center gap-y-6">
                <input
                  className="rounded-sm border-1 border p-2 w-[320px]"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  ref={lastNameRef}
                />
              </div>
              <div className="flex flex-col items-center gap-y-6">
                <input
                  className="rounded-sm border-1 border p-2 w-[320px]"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  ref={emailRef}
                />
              </div>

              <div className="flex flex-col items-center gap-y-6">
                <input
                  className="rounded-sm border-1 border p-2 w-[320px]"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <div className="flex flex-col items-center gap-y-6">
                <input
                  className="rounded-sm border-1 border p-2 w-[320px]"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                  ref={confirmPasswordRef}
                />
              </div>
            </form>
            <div
              onClick={handleSignUp}
              className="flex flex-col w-[320px] cursor-pointer"
            >
              <span className="text-sm text-center text-gray-400 font-medium py-2 bg-gray-200 rounded-lg px-auto min-w-[320px]">
                <span>Sign Up</span>
              </span>
            </div>
            <span className="text-xs text-gray-500">Or continue with</span>
            <div className="flex gap-x-8 justify-between">
              <a
                className="w-[2.5rem] flex flex-col gap-y-2 justify-center items-center "
                href="http://localhost:5001/auth/google"
              >
                <div className="flex justify-center border rounded-xl py-2 px-2">
                  <FcGoogle className="text-lg" />
                </div>
                <span className="text-xs text-gray-500 text-center">
                  Google
                </span>
              </a>

              <a
                className="w-[2.5rem] flex flex-col gap-y-2 justify-center items-center "
                href="http://localhost:5001/auth/facebook"
              >
                <div className="flex justify-center border rounded-xl py-2 px-2">
                  <FaFacebook className="text-lg text-[#3954c0]" />
                </div>
                <span className="text-xs text-gray-500 text-center">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
