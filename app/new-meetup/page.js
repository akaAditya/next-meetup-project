"use client";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const AddingNewMeetUpHandler = (enteredData) => {
    console.log(enteredData);
  };

  return (
    <>
      <h1>NewMeetUp</h1>
      <NewMeetupForm onAddMeetup={AddingNewMeetUpHandler} />
    </>
  );
};
export default NewMeetUp;
