import React from "react";
import { useBasicInfo } from "../Context/StatesProvider";

const Education = ({ handleNext }) => {
  const {
    education,
    seteducation,
    newEducation,
    setNewEducation,
    changeEducation,
    addEducation,
    deleteEducation,
  } = useBasicInfo();
  return (
    <>
      <div className="education">
        {/* ---------- School --------- */}
        <div className="education_header">
          <h2 className="colorh">Education</h2>
          <p>
            Add your most relevant education, including programs you’re
            currently enrolled in.
          </p>
          <div className="row my-2">
            <h5>School Details</h5>
          </div>
          <div className="row my-3">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      schoolname: e.target.value,
                    });
                  }}
                  type="text"
                  className="form-control"
                  id="schoolname"
                  value={education.schoolname}
                  name="schoolname"
                  placeholder="School Name"
                />
                <label htmlFor="schoolname">School Name</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      schoollocation: e.target.value,
                    });
                  }}
                  type="text"
                  className="form-control"
                  id="schoollocation"
                  value={education.schoollocation}
                  name="schoollocation"
                  placeholder="School Location"
                />
                <label htmlFor="schoollocation">School Location</label>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      schoolstartyear: e.target.value,
                    });
                  }}
                  type="text"
                  className="form-control"
                  id="schoolstartyear"
                  value={education.schoolstartyear}
                  name="schoolstartyear"
                  placeholder="Start Year"
                />
                <label htmlFor="schoolstartyear">School Start Year</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      schoolendyear: e.target.value,
                    });
                  }}
                  type="text"
                  className="form-control"
                  id="schoolendyear"
                  value={education.schoolendyear}
                  name="schoolendyear"
                  placeholder="End Year"
                />
                <label htmlFor="schoolendyear">School End Year</label>
              </div>
            </div>
          </div>
        </div>

        {/* -----College----- */}

        <div className="education_header">
          <div className="row my-2">
            <h5>Degree Details</h5>
          </div>
          <div className="row my-3">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      degreename: e.target.value,
                    });
                  }}
                  type="text"
                  value={education.degreename}
                  className="form-control"
                  id="degree"
                  name="degree"
                  placeholder="Degree eg:- B.Tech , BCA"
                />
                <label htmlFor="degree">Degree eg:- B.Tech , BCA</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      degreefield: e.target.value,
                    });
                  }}
                  type="text"
                  value={education.degreefield}
                  className="form-control"
                  id="degreefield"
                  name="degreefield"
                  placeholder="Field of Study eg:- Computer Science"
                />
                <label htmlFor="degreefield">Field of Study</label>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      degreestartyear: e.target.value,
                    });
                  }}
                  type="text"
                  value={education.degreestartyear}
                  className="form-control"
                  id="degreestartyear"
                  name="degreestartyear"
                  placeholder="Start Year"
                />
                <label htmlFor="degreestartyear">Degree Start Year</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    seteducation({
                      ...education,
                      degreeendyear: e.target.value,
                    });
                  }}
                  type="text"
                  value={education.degreeendyear}
                  className="form-control"
                  id="degreeendyear"
                  name="degreeendyear"
                  placeholder="End Year"
                />
                <label htmlFor="degreeendyear">Degree End Year</label>
              </div>
            </div>
          </div>
        </div>

        {/* ----- additonal Courses----- */}

        {newEducation.length > 0 && <h5>Additional Courses</h5>}
        {newEducation.map((edu, index) => {
          return (
            <div className="education_header" key={index}>
              <div className="row my-2 d-flex">
                <div className=" d-flex justify-content-between">
                  <div className="center text-muted">
                    <h6>Course {index + 1}</h6>
                  </div>
                  <div>
                    <button
                      title={`Delete Course ${index + 1}`}
                      onClick={() => {
                        deleteEducation(index);
                      }}
                      className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                    >
                      <i className="fa-solid text-white pointer fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-lg-6 col-sm-12">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        changeEducation(e, index);
                      }}
                      type="text"
                      value={edu.course}
                      className="form-control"
                      id="course"
                      name="course"
                      placeholder="Course"
                    />

                    <label htmlFor="course">Course</label>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        changeEducation(e, index);
                      }}
                      type="text"
                      value={edu.institution}
                      className="form-control"
                      id="institution"
                      name="institution"
                      placeholder="Institution"
                    />
                    <label htmlFor="institution">Institution</label>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-lg-6 col-sm-12">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        changeEducation(e, index);
                      }}
                      type="text"
                      value={edu.startdate}
                      className="form-control"
                      id="startdate"
                      name="startdate"
                      placeholder="Start Date"
                    />
                    <label htmlFor="startdate">Start Date</label>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        changeEducation(e, index);
                      }}
                      type="text"
                      value={edu.enddate}
                      className="form-control"
                      id="enddate"
                      name="enddate"
                      placeholder="End Date"
                    />
                    <label htmlFor="enddate">End Date</label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="row my-3">
          <div className="col-lg-6 col-sm-12">
            <button
              title="Add more courses"
              onClick={() => {
                addEducation();
              }}
              className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
            >
              <i className="fa-solid text-white pointer fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
