import React from "react";
import job from "./jobData";

const Card = ({ mdWidth, lgWidth }) => {
  const cardStyle = ` w-3/5 lg:w-2/5 border border-gray-300 shadow-md rounded-lg p-7 mx-auto bg-white flex m-10 }`;
  const titleStyle = "text-xl font-semibold";
  console.log(mdWidth);

  return (
    <div className="flex flex-wrap ">
    { job.map((job)=>(
      <div className={cardStyle}>
        <div className="mr-2">
          <img
            src="https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
            alt=""
            width="40px"
            className="rounded-md"
          />
        </div>
        <div>
          <h2 className={titleStyle}>{job.title}</h2>
          <p>
            {job.company} - {job.sector}
          </p>
          <p className="text-gray-600">
            {job.location} ({job.mode})
          </p>
          <div className="mt-5 text-sm">
            <p className="mb-1">
              {job.type} ({job.time})
            </p>
            <p className="mb-1"> Experience ({job.experience})</p>
            <p className="mb-1">
              {" "}
              {job.currency} {job.salary}
            </p>
            <p className="mb-1"> {job.employees} employees</p>
          </div>
          {job.applyType === "quick" && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded text-sm  mt-6">
              Apply Now
            </button>
          )}
          {job.applyType === "external" && <button className="bg-white text-blue-600 border-blue-500 border-2 py-2 px-4 rounded text-sm  mt-6">External Apply</button>}
        </div>
      </div>

      ))
}
    </div>
  );
};

export default Card;
