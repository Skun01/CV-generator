export default function CVsheet({personalDetails, educationData, workExperienceData}){
  return(
    <div className="cv-sheet-container">
      <div className="cv-sheet-header">
        <div className="title-name">{personalDetails.fullName}</div>
        <div className="personal-details">
          <div className="email"><i className="ti-email"> </i>{personalDetails.email}</div>
          <div className="phone"><i className="ti-mobile"> </i>{personalDetails.phoneNumber}</div>
          <div className="address"><i className="ti-location-pin"> </i>{personalDetails.address}</div>
        </div>
      </div>
      <div className="main-information">
          <div className="education">
            <div className="title">{educationData.length > 0 ? "Education" : ""}</div>
            <div className="list-card">
              {educationData.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-description">
                  <p className="time">{item.graduationYear}</p>
                  <p className="location">{item.location}</p>
                </div>
                <div className="card-header">
                  <p className="card-title">{item.schoolName}</p>
                  <p className="description">{item.fieldOfStudy} - {item.degree}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="work-experience">
            <div className="title">{workExperienceData.length > 0 ? "Work Experience" : ""}</div>
            <div className="list-card">
              {workExperienceData.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-description">
                  <p className="time">{item.startDate} - {item.endDate}</p>
                  <p className="location">{item.position}</p>
                </div>
                <div className="card-header">
                  <p className="card-title">{item.companyName}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}