import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../components";
import { useUser } from "../hooks";

export const FindSessions = () => {
  const [isTimeEnter, setIsTimeEnter] = useState(false);
  const [tutors, setTutors] = useState([]);
  const [times, setTimes] = useState([]);
  const [curTutor, setCurTutor] = useState(null);
  const { user, isLoading } = useUser();

  useEffect(async () => {
    try {
      const response = await fetch(`/api/users/tutors`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTutors(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleTimeSubmit = async (time) => {
    try {
      console.log(time);
      const response = await fetch(`/api/appointments/`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          tutor_id: curTutor,
          student_id: user.id,
          time_block: parseInt(time.time_block),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setIsTimeEnter(true);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleTutorSubmit = async (id) => {
    try {
      const response = await fetch(`/api/availabilities/${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setCurTutor(id);
      setTimes(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-2xl h-full gap-4 p-3">
        {tutors.length != 0 && !isTimeEnter ? (
          <div>
            {/* <form onSubmit={handleTimeSubmit} className="flex flex-col gap-4">
              <label>Choose your meeting time</label>
              <input
                type="time"
                className="rounded-md focus:outline-none border-2 p-2"
                ref={timeRef}
              />
              <button type="submit">Submit</button>
            </form> */}

            <div className="flex flex-col gap-4">
              <p>Choose a tutor</p>
              <div className="flex gap-4">
                {tutors.map((tutor) => (
                  <div>
                    <img
                      src={tutor.profile_picture}
                      alt="Profile Img"
                      className="m-2 rounded-md"
                    />
                    <button
                      onClick={() => handleTutorSubmit(tutor.id)}
                      className="rounded-md border-2 p-2"
                    >
                      {tutor.username}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {times && (
              <div>
                <p className="my-3 text-xl">Availabilities</p>
                <div className="flex justify-center items-center gap-4 p-4 border-2 rounded-md">
                  {times.map((time) => (
                    <button
                      onClick={() => handleTimeSubmit(time)}
                      className="p-2 rounded-md bg-green-600 font-bold text-white"
                    >
                      {`${time.time_block}:00`}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* {isTutorEnter && (
              <div className="flex flex-col gap-4">
                <p>Choose a subject</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsSubjectEnter(true)}
                    className="rounded-md border-2 p-2"
                  >
                    Math
                  </button>
                  <button
                    onClick={() => setIsSubjectEnter(true)}
                    className="rounded-md border-2 p-2"
                  >
                    Chemistry
                  </button>
                  <button
                    onClick={() => setIsSubjectEnter(true)}
                    className="rounded-md border-2 p-2"
                  >
                    Physics
                  </button>
                </div>
              </div>
            )} */}
          </div>
        ) : (
          <p>You have successfully booked an appointment.</p>
        )}
      </div>
    </Layout>
  );
};
