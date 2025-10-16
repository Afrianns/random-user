import axios from "axios";
import { useEffect, useState, type ReactElement } from "react";

import line from "./assets/line.svg";
import lineOne from "./assets/lineOne.svg";

import type { UserType } from "./types/userType";

import Loading from "./components/loading";

import Address from "./components/address";
import Registered from "./components/registered";
import LoginData from "./components/loginData";
import Location from "./components/location";
import Id from "./components/id";

import convertDate from "./utils/convertDate";

function App() {
  const [user, setUser] = useState<UserType>();

  const [activeSection, setActiveSection] = useState<string>("address");

  const [section, setSection] = useState<ReactElement>();

  const queryParameters = new URLSearchParams(window.location.search);
  const query = queryParameters.get("s");

  useEffect(() => {
    if (user) return;
    axios
      .get("https://randomuser.me/api")
      .then(function (response) {
        if (response.status == 200) {
          setUser(response.data.results[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (query) {
      setActiveSection(query);
    }
  }, [user]);

  let changeSection = (type: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("s", type);
    window.history.pushState({}, "", url.toString());
    setActiveSection(type);
  };

  useEffect(() => {
    if (user) {
      switch (activeSection) {
        case "address":
          setSection(<Address {...user.location} />);
          break;
        case "registered":
          setSection(<Registered {...user.registered} />);
          break;
        case "login":
          setSection(<LoginData {...user.login} />);

          break;
        case "location":
          setSection(<Location {...user.location} />);
          break;

        case "id":
          setSection(<Id {...user.id} />);
          break;

        default:
          break;
      }
    }
  }, [activeSection, user]);

  let dynamiclass = (type: string) =>
    `card ${
      activeSection == type
        ? "bg-gray-800 text-gray-100 hover:bg-gray-900"
        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }`;

  return (
    <div className="max-w-[1440px] mx-auto border-t-5 border-amber-500 px-2 sm:px-5 py-10 space-y-2">
      {user ? (
        <>
          <div className="main-container mt-16">
            <section className="gap-x-5 bg-linear-to-b from-purple-400 to-orange-300 p-3 rounded-lg relative">
              <div className="border border-yellow-100 p-1 rounded-lg w-fit mx-auto absolute left-0 right-0 -top-20 z-10">
                <img src={user.picture.large} className="rounded-sm" alt="" />
              </div>
              <div className="space-y-2 mt-16 text-center z-10 relative">
                <div>
                  <h2 className="text-2xl font-bold font-rubik">
                    {user.name.title} {user.name.first} {user.name.last}
                  </h2>
                  <a href="mailto:user.email" className="text-sm font-light">
                    {user.email}
                  </a>
                </div>

                <div>
                  <div className="border border-gray-100/20 bg-gray-50/20 py-2 px-3 rounded-lg text-xs sm:max-w-2/3 mx-auto">
                    <div className="flex item-center justify-between">
                      <span className="font-light">Phone Number</span>
                      <a href=""></a>
                      <p>{user.phone}</p>
                    </div>
                    <hr className="border border-gray-100/20 my-2 block" />
                    <div className="flex item-center justify-between">
                      <span className="font-light">Date of Birth</span>
                      <p>
                        {convertDate(user.dob.date)} - ({user.dob.age} Years
                        old)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
                <img src={line} className="absolute -left-36 -top-10" alt="" />
                <img
                  src={lineOne}
                  className="absolute -right-28 -top-28"
                  alt=""
                />
              </div>
            </section>
          </div>
          <div className="main-container">
            <ul className="flex gap-x-2 items-center whitespace-nowrap overflow-x-scroll pb-2 text-sm">
              <li
                className={dynamiclass("address")}
                onClick={() => changeSection("address")}
              >
                Address
              </li>
              <li
                className={dynamiclass("registered")}
                onClick={() => changeSection("registered")}
              >
                Registered Date
              </li>
              <li
                className={dynamiclass("login")}
                onClick={() => changeSection("login")}
              >
                Login Data
              </li>
              <li
                className={dynamiclass("location")}
                onClick={() => changeSection("location")}
              >
                Location
              </li>
              <li
                className={dynamiclass("id")}
                onClick={() => changeSection("id")}
              >
                Id
              </li>
            </ul>
            <hr className="border-b border-gray-100" />
            {section}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
