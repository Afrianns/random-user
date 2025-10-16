import axios from "axios";
import { useEffect, useState, type ReactElement } from "react";

import line from "./assets/line.svg";
import lineOne from "./assets/lineOne.svg";

import type { UserType } from "./types/userType";
import Address from "./components/address";
import Registered from "./components/registered";
import LoginData from "./components/loginData";
import Location from "./components/location";
import Id from "./components/id";
import convertDate from "./utils/convertDate";

function App() {
  const [user, setUser] = useState<UserType>();
  let temp = {
    gender: "female",
    name: {
      title: "Mademoiselle",
      first: "Loredana",
      last: "Boyer",
    },
    location: {
      street: {
        number: 1745,
        name: "Rue Duquesne",
      },
      city: "Oberägeri",
      state: "Fribourg",
      country: "Switzerland",
      postcode: 3447,
      coordinates: {
        latitude: "-62.5710",
        longitude: "167.7641",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "loredana.boyer@example.com",
    dob: {
      date: "1998-10-29T00:33:33.067Z",
      age: 26,
    },
    registered: {
      date: "2016-03-11T12:02:34.428Z",
      age: 9,
    },
    login: {
      uuid: "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
      username: "yellowpeacock117",
      password: "addison",
      salt: "sld1yGtd",
      md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
      sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
      sha256:
        "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d",
    },
    phone: "076 011 72 58",
    cell: "078 703 25 84",
    id: {
      name: "AVS",
      value: "756.7255.5653.36",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/44.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
    },
    nat: "CH",
  };

  const [section, setSection] = useState<ReactElement>(
    <Address {...temp.location} />
  );

  const getUser = () => {
    // axios
    //   .get("https://randomuser.me/api?exc=login")
    //   .then(function (response) {
    //     // handle success
    //     if (response.status == 200) {
    //       setUser(response.data.results[0]);
    //     }
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  };

  let changeSection = (type: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("s", type);
    window.history.pushState({}, "", url.toString());
  };

  const queryParameters = new URLSearchParams(window.location.search);
  const d = queryParameters.get("s");
  useEffect(() => {
    switch (d) {
      case "address":
        setSection(<Address {...temp.location} />);
        break;
      case "registered":
        setSection(<Registered {...temp.registered} />);
        break;
      case "login":
        setSection(<LoginData {...temp.login} />);

        break;
      case "location":
        setSection(<Location {...temp.location} />);
        break;

      case "id":
        setSection(<Id {...temp.id} />);
        break;

      default:
        break;
    }
  });

  let dynamiclass = (type: string) =>  `card ${
    d == type ? "bg-gray-500 text-gray-100 hover:bg-gray-600" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
  }`;

  return (
    <div className="max-w-[1440px] mx-auto border-t-5 border-amber-500 px-5 py-10 space-y-2">
      <div className="main-container mt-16">
        <section className="gap-x-5 bg-linear-to-b from-purple-400 to-orange-300 p-3 rounded-lg relative">
          <div className="border border-yellow-100 p-1 rounded-lg w-fit mx-auto absolute left-0 right-0 -top-20 z-10">
            <img src={temp.picture.large} className="rounded-sm" alt="" />
          </div>
          <div className="space-y-2 mt-16 text-center z-10 relative">
            <div>
              <h2 className="text-2xl font-bold font-rubik">
                {temp.name.title} {temp.name.first} {temp.name.last}
              </h2>
              <a href="mailto:temp.email" className="text-sm font-light">
                {temp.email}
              </a>
            </div>

            <div>
              <div className="border border-gray-100/20 bg-gray-50/20 py-2 px-3 rounded-lg text-xs max-w-2/3 mx-auto">
                <div className="flex item-center justify-between">
                  <span className="font-light">Phone Number</span>
                  <a href=""></a>
                  <p>{temp.phone}</p>
                </div>
                <hr className="border border-gray-100/20 my-2 block" />
                <div className="flex item-center justify-between">
                  <span className="font-light">Date of Birth</span>
                  <p>
                    {convertDate(temp.dob.date)} - ({temp.dob.age} Years old)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
            <img src={line} className="absolute -left-36 -top-10" alt="" />
            <img src={lineOne} className="absolute -right-28 -top-28" alt="" />
          </div>
        </section>
      </div>
      <div className="main-container">
        {/* <section className="space-y-3 px-3">
          <h3>Register Date</h3>
          <p className="border border-yellow-200 bg-yellow-100 py-1 px-5 rounded w-fit">
            {new Date(temp.registered.date).toLocaleDateString()}
          </p>
        </section> */}

        <ul className="flex gap-x-2 items-center whitespace-nowrap overflow-x-scroll pb-2 text-sm">
          <li className={dynamiclass("address")} onClick={() => changeSection("address")}>
            Address
          </li>
          <li
            className={dynamiclass("registered")}
            onClick={() => changeSection("registered")}
          >
            Registered Date
          </li>
          <li className={dynamiclass("login")} onClick={() => changeSection("login")}>
            Login Data
          </li>
          <li className={dynamiclass("location")} onClick={() => changeSection("location")}>
            Location
          </li>
          <li className={dynamiclass("id")} onClick={() => changeSection("id")}>
            Id
          </li>
        </ul>
        <hr className="border-b border-gray-100" />
        {section}
      </div>
    </div>
  );
}

export default App;
