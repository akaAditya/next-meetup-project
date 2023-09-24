'use client'

import MeetupItem from "@/components/meetups/MeetupItem";
import { Fragment } from "react";

const ShowDetailsIdHandler = () => {
  return (
    <Fragment>
      <MeetupItem
        image="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="A first meet-up"
        address="ABCD, 123 New Wales"
      />
    </Fragment>
  );
};
export default ShowDetailsIdHandler;
