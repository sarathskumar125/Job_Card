import React, { useState } from "react";

const Form = ({ width, height, text, font, titleText, titleFont }) => {
  const formStyle = ` w-4/5 lg:w-${width} h-${height} border border-gray-300 shadow-md rounded-lg p-7 mx-auto bg-white text-${text} font-${font} mx-auto mb-10`;
  const titleStyle = `text-${titleText} font-${titleFont}`;
  const inputStyle = "w-full border border-gray-300 px-4 py-2 rounded-lg";
  const star = "text-amber-700";
  const mb = "mb-5";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    expMin: "",
    expMax: "",
    salaryMin: "",
    salaryMax: "",
    totalEmp: "",
    applyType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderFormFields = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className="flow-root mb-5 ">
              <span className={titleStyle}>Create a job</span>
              <span className="float-right font-semibold">step 1</span> <br />
            </div>
            <div>
              <div className={mb}>
                <label className="block mb-2">
                  job title<span className={star}>*</span>
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="ex. UX UI Designer"
                />
              </div>
              <div className={mb}>
                <label className="block mb-2">
                  Company Name<span className={star}>*</span>
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="ex. Google"
                />
              </div>
              <div className={mb}>
                <label className="block mb-2">
                  Industry<span className={star}>*</span>
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="ex. Information Technology"
                />
              </div>
              <div className={mb}>
                <div className="flex">
                  <div className="w-1/2 mr-5">
                    <label className="block mb-2">Location</label>
                    <input
                      className={inputStyle}
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="ex. Chennai"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block mb-2">Remote Type</label>
                    <input
                      className={inputStyle}
                      type="text"
                      name="remoteType"
                      value={formData.remoteType}
                      onChange={handleChange}
                      placeholder="ex. In-office"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="flow-root mb-5 ">
              <span className={titleStyle}>Create a job</span>
              <span className="float-right font-semibold">step 2</span> <br />
            </div>

            <div className={mb}>
              <label className="block mb-2">Experience</label>
              <div className="flex">
                <div className="w-1/2 mr-5">
                  <input
                    className={inputStyle}
                    type="text"
                    name="expMin"
                    value={formData.expMin}
                    onChange={handleChange}
                    placeholder="Minimum"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    className={inputStyle}
                    type="text"
                    name="expMax"
                    value={formData.expMax}
                    onChange={handleChange}
                    placeholder="Maximum"
                  />
                </div>
              </div>
            </div>

            <div className={mb}>
              <label className="block mb-2">Salary</label>
              <div className="flex">
                <div className="w-1/2 mr-5">
                  <input
                    className={inputStyle}
                    type="text"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={handleChange}
                    placeholder="Minimum"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    className={inputStyle}
                    type="text"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={handleChange}
                    placeholder="Maximum"
                  />
                </div>
              </div>
            </div>

            <div className={mb}>
              <label className="block mb-2">Total Employee</label>
              <input
                className={inputStyle}
                type="text"
                name="totalEmp"
                value={formData.totalEmp}
                onChange={handleChange}
                placeholder="ex. 100"
              />
            </div>

            <div className={mb}>
              <label className="block mb-2">Apply Type</label>
              <label className="mr-5 text-gray-400">
              <input
               className="h-5 w-5 mr-1 text-indigo-600"
                type="radio"
                name="applyType"
                value="quick"
                checked={formData.applyType === 'quick'}
                onChange={handleChange}
              /> Quick apply
              </label>
              <label className=" text-gray-400">
              <input
               className="h-5 w-5 mr-1 text-indigo-600"
                type="radio"
                name="applyType"
                value="external"
                checked={formData.applyType === 'external'}
                onChange={handleChange}
              /> External apply
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={formStyle}>
      <form onSubmit={handleSubmit}>
        {renderFormFields()}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12"
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {step < 2 && (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto mt-12"
              onClick={nextStep}
            >
              Next
            </button>
          )}

          {step === 2 && (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12"
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
