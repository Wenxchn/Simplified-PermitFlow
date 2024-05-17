"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [isInterior, setIsInterior] = useState(true);

  // Interior Checks
  const [interiorRemodel, setInteriorRemodel] = useState(false);
  const [interiorNewBathroom, setInteriorNewBathroom] = useState(false);
  const [interiorNewLaundryRoom, setInteriorNewLaundryRoom] = useState(false);
  const [interiorOther, setInteriorOther] = useState(false);

  // Exterior Checks
  const [exteriorGarageDoor, setExteriorGarageDoor] = useState(false);
  const [exteriorDoors, setExteriorDoors] = useState(false);
  const [exteriorFencing, setExteriorFencing] = useState(false);
  const [exteriorOther, setExteriorOther] = useState(false);

  if (page === 1) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f0e33] to-[#0a7aff] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Permit<span className="text-permitBlue">Flow</span>
          </h1>
          <h1 className="text-3xl font-bold">
            What residential work are you doing?
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <button
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              onClick={() => {
                setPage(2);
              }}
            >
              <h3 className="text-2xl font-bold">Interior Work →</h3>
              <div className="text-left text-lg">
                The layout and decoration of indoor spaces
              </div>
            </button>
            <button
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              onClick={() => {
                setIsInterior(false);
                setPage(3);
              }}
            >
              <h3 className="text-2xl font-bold">Exterior Work →</h3>
              <div className="text-left text-lg">
                The outside appearance of buildings or structures
              </div>
            </button>
          </div>
        </div>
      </main>
    );
  } else if (page === 2) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f0e33] to-[#0a7aff] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Permit<span className="text-permitBlue">Flow</span>
          </h1>
          <h1 className="text-3xl font-bold">
            What interior work are you doing? Select all that applies.
          </h1>
          <div className="grid grid-cols-1 gap-4 text-black sm:grid-cols-2 md:gap-8">
            <button
              className={
                interiorRemodel
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setInteriorRemodel(!interiorRemodel)}
            >
              <h3 className="text-2xl font-bold">Bathroom Remodel</h3>
            </button>
            <button
              className={
                interiorNewBathroom
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setInteriorNewBathroom(!interiorNewBathroom)}
            >
              <h3 className="text-2xl font-bold">New Bathroom</h3>
            </button>
            <button
              className={
                interiorNewLaundryRoom
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setInteriorNewLaundryRoom(!interiorNewLaundryRoom)}
            >
              <h3 className="text-2xl font-bold">New Laundry Room</h3>
            </button>
            <button
              className={
                interiorOther
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setInteriorOther(!interiorOther)}
            >
              <h3 className="text-2xl font-bold">Other</h3>
            </button>
          </div>
        </div>
        <button
          className="bg-permitYellow flex max-w-xs flex-col gap-4 rounded-full py-4 pl-10 pr-10 hover:bg-[#f2c764]"
          onClick={() => setPage(4)}
        >
          <h3 className="text-2xl font-bold text-black">Continue →</h3>
        </button>
      </main>
    );
  } else if (page === 3) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f0e33] to-[#0a7aff] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Permit<span className="text-permitBlue">Flow</span>
          </h1>
          <h1 className="text-3xl font-bold">
            What exterior work are you doing?
          </h1>
          <div className="grid grid-cols-1 gap-4 text-black sm:grid-cols-2 md:gap-8">
            <button
              className={
                exteriorGarageDoor
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setExteriorGarageDoor(!exteriorGarageDoor)}
            >
              <h3 className="text-xl font-bold">Garage Door Replacement</h3>
            </button>
            <button
              className={
                exteriorDoors
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setExteriorDoors(!exteriorDoors)}
            >
              <h3 className="text-2xl font-bold">Exterior Doors</h3>
            </button>
            <button
              className={
                exteriorFencing
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setExteriorFencing(!exteriorFencing)}
            >
              <h3 className="text-2xl font-bold">Fencing</h3>
            </button>
            <button
              className={
                exteriorOther
                  ? "border-permitYellow flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 bg-white p-4"
                  : "flex max-w-xs flex-col items-center gap-4 rounded-xl border-4 border-slate-50 bg-white p-4"
              }
              onClick={() => setExteriorOther(!exteriorOther)}
            >
              <h3 className="text-2xl font-bold">Other</h3>
            </button>
          </div>
        </div>
        <button
          className="bg-permitYellow flex max-w-xs flex-col gap-4 rounded-full py-4 pl-10 pr-10 hover:bg-[#f2c764]"
          onClick={() => setPage(4)}
        >
          <h3 className="text-2xl font-bold text-black">Continue →</h3>
        </button>
      </main>
    );
  } else if (page === 4) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f0e33] to-[#0a7aff] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Permit<span className="text-permitBlue">Flow</span>
          </h1>
          {isInterior ? (
            <div>{interiorRemodel ? <OTC /> : <IH />}</div>
          ) : (
            <div>
              {(exteriorGarageDoor || exteriorDoors) && !exteriorOther ? (
                <OTC />
              ) : exteriorOther ? (
                <IH />
              ) : (
                <NP />
              )}
            </div>
          )}
        </div>
      </main>
    );
  }
}

// Various Outcomes
const IH = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-4xl font-bold">✅ In-House Review Process</h1>
      <ul className="list-inside list-disc space-y-2 text-xl">
        <li>A building permit is required.</li>
        <li>Include plan sets.</li>
        <li>Submit application for in-house review.</li>
      </ul>
    </div>
  );
};

const OTC = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-4xl font-bold">
        ✅ Over-the-Counter Submission Process
      </h1>
      <ul className="list-inside list-disc space-y-2 text-xl">
        <li>A building permit is required.</li>
        <li>Submit application for OTC review.</li>
      </ul>
    </div>
  );
};

const NP = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-4xl font-bold">
        ❌ No Permit. Nothing is required! You’re set to build.
      </h1>
    </div>
  );
};
