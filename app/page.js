"use client";

import MeetupList from "@/components/meetups/MeetupList";

const Data = [
  {
    id: "m1",
    image:
      "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A first meet-up",
    address: "ABCD, 123456 New Wales",
  },
  {
    id: "m2",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A second meet-up",
    address: "A2Z, Texas 12112",
  },
  {
    id: "m3",
    image:
      "https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A third meet-up",
    address: "M4, 21404 New York",
  },
];
const HomePage = (props) => {
  return (
      <MeetupList meetups={Data} />
  );
};

// async function getData(){
//   return Data
// }
export default HomePage;
