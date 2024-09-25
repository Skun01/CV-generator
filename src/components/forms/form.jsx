import ToolButton from './toolButton'
import CVsheet from '../CVsheet/sheet'
import {Input, TextArea} from './input'
import InputSectionTitle from './inputTitle.jsx'
import {useState} from 'react'
import FunctionButton from './functionButton.jsx'
import PersonalCard from './personal_card.jsx'
import AddDataBtn from './addDataBtn.jsx'
import { exampleData } from './data.jsx';
export default function Form(){
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [educationData, setEducationData] = useState([]);
  const [workExperienceData, setWorkExperienceData] = useState([]);
  const [education, setEducation] = useState({
    data: {},
    display:{
      adding: false,
      adding_index: -1,
      isDropDown: false,
      list_card: false,
    },
  })
  const [workExperience, setWorkExperience] = useState({
    data: {},
    display:{
      adding: false,
      adding_index: -1,
      isDropDown: false,
      list_card: false,
    },
  })
  function inputHandleChange(e){
    setPersonalDetails({...personalDetails, [e.target.name]: e.target.value})
  }
  const educationEvent = {
    handleEducationDisplay: function(){
      setEducation({...education, display: {...education.display, isDropDown: !education.display.isDropDown, list_card: !education.display.list_card}});
      document.querySelector(".education .angle").classList.toggle("rotate-angle");
    },
    handleEducationAdd: function(){
      setEducation({...education, display: {...education.display, adding: !education.display.adding, list_card: !education.display.list_card, adding_index: -1}});
    },
    handleInputChange: function(e){
      setEducation({...education, data: {...education.data, [e.target.name]: e.target.value}})
    },
    handleSaveEducation: function(){
      if(education.display.adding_index === -1){
        setEducationData([...educationData, education.data]);
      }
      else{
        const tmp = educationData;
        tmp[education.display.adding_index] = education.data;
        setEducationData(tmp);
      }
      setEducation({...education, data: {}, display: {...education.display, adding: false, list_card: true}, adding_index: -1})
    },
    handleCancelEducation: function(){
      setEducation({...education, data: {}, display: {...education.display, adding: false, list_card: true}, adding_index: -1})
    },
    handleDeleteEducation: function(){
      if(education.display.adding_index !== -1){
        const tmp = educationData;
        tmp.splice(education.display.adding_index, 1);
        setEducationData(tmp);
        setEducation({...education, data: {}, display: {...education.display, adding: false, list_card: true, adding_index: -1}})
      }
    },
    handleEditEducation: function(index){
      return ()=>setEducation({...education, data: educationData[index], display: {...education.display, adding_index: index, adding: true, list_card: false}})
    }
  }
  const workExperienceEvent = {
    handleWorkExperienceDisplay: function(){
      setWorkExperience({...workExperience, display: {...workExperience.display, isDropDown: !workExperience.display.isDropDown, list_card: !workExperience.display.list_card}});
      document.querySelector(".work-experience .angle").classList.toggle("rotate-angle");
    },
    handleWorkExperienceAdd: function(){
      setWorkExperience({...workExperience, display: {...workExperience.display, adding: !workExperience.display.adding, list_card: !workExperience.display.list_card, adding_index: -1}});
    },
    handleInputChange: function(e){
      setWorkExperience({...workExperience, data: {...workExperience.data, [e.target.name]: e.target.value}})
    },
    handleSaveWorkExperience: function(){
      setWorkExperienceData([...workExperienceData, workExperience.data]);
      setWorkExperience({...workExperience, data: {}, display: {...workExperience.display, adding: false, list_card: true}})
    },
    handleCancelWorkExperience: function(){
      setWorkExperience({...workExperience, data: {}, display: {...workExperience.display, adding: false, list_card: true}})
    },
    handleDeleteWorkExperience: function(){
      if(workExperience.display.adding_index !== -1){
        const tmp = workExperienceData;
        tmp.splice(workExperience.display.adding_index, 1);
        setWorkExperienceData(tmp);
        setWorkExperience({...workExperience, data: {}, display: {...workExperience.display, adding: false, list_card: true}})
      }
    },
    handleEditWorkExperience: function(index){
      return ()=>setWorkExperience({...workExperience, data: workExperienceData[index], display: {...workExperience.display, adding_index: index, adding: true, list_card: false}})
    }
  }
 
  // handle function clicking clear resume
  function handleClearResume(){
    setPersonalDetails({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setEducationData([]);
    setWorkExperienceData([]);
    [...document.querySelectorAll("input")].forEach(input=>{
      input.value = "";
    })
    document.querySelector("textarea").value = "";
  }
  function handleSampleResume(){
    setPersonalDetails(exampleData.personalDetails);
    setEducationData(exampleData.education);
    setWorkExperienceData(exampleData.workExperience);
    setValuePersonalDetailsInput(exampleData.personalDetails);
  }
  function setValuePersonalDetailsInput(data){
    const fullNameInput = document.querySelector("input[name='fullName']");
    const emailInput = document.querySelector("input[name='email']");
    const phoneNumberInput = document.querySelector("input[name='phoneNumber']");
    const addressInput = document.querySelector("input[name='address']");
    fullNameInput.value = data.fullName;
    emailInput.value = data.email;
    phoneNumberInput.value = data.phoneNumber;
    addressInput.value = data.address;
  }
  return(
    <>
    <div className="form-container">
      <div className="form-tools">
        <ToolButton themifyIcon="ti-trash" toolName="Clear Resume" toolClass="clear-resume" handleClick={handleClearResume}/>
        <ToolButton themifyIcon="ti-marker" toolName="Sample Resume" toolClass="sample-resume" handleClick={handleSampleResume}/>
      </div>
      <div className="form-inputs">
        <div className="personal-details input-section">
          <InputSectionTitle title="Personal Details" titleIcon="ti-user" isDropDown={false}/>
          <div className="input-group">
            {/* <FileInput label="Upload avatar: " name="avatar"/> */}
            <Input label="Full Name" type = "text" handleChange={inputHandleChange} name="fullName"/>
            <Input label="Email" type = "email" handleChange={inputHandleChange} name="email"/>
            <Input label="Phone Number" type = "tel" handleChange={inputHandleChange} name="phoneNumber"/>
            <Input label="Address" type = "text" handleChange={inputHandleChange} name="address"/>
          </div>
        </div>
        <div className="education input-section">
          <div className="input-form-section">
            <InputSectionTitle title="Education" titleIcon="ti-book" isDropDown={true} handleClick={educationEvent.handleEducationDisplay} />
            <div className="input-group education-input-group" style={{display: education.display.adding ? "flex" : "none"}}>
              <Input label="School Name" type = "text" name="schoolName" handleChange={educationEvent.handleInputChange} value={education.data.schoolName || ""}/>
              <Input label="Degree" type = "text" name="degree" handleChange={educationEvent.handleInputChange} value={education.data.degree || ""}/>
              <Input label="Field of Study" type = "text" name="fieldOfStudy" handleChange={educationEvent.handleInputChange} value={education.data.fieldOfStudy || ""}/>
              <Input label="Graduation Year" type = "number" name="graduationYear" handleChange={educationEvent.handleInputChange} value={education.data.graduationYear || ""}/>
              <Input label="Location" type = "text" name="location" handleChange={educationEvent.handleInputChange} value={education.data.location || ""}/>
              <div className="function-section">
                <FunctionButton functionName="Delete" functionClass="delete-btn" themifyIcon="ti-trash" handleClick={educationEvent.handleDeleteEducation}/>
                <div>
                <FunctionButton functionName="cancel" functionClass="cancel-btn" themifyIcon="ti-close" handleClick={educationEvent.handleCancelEducation}/>
                <FunctionButton functionName="save" functionClass="save-btn" themifyIcon="ti-check" handleClick={educationEvent.handleSaveEducation}/>
                </div>
            </div>
            </div>
          </div>
          <div className="personal-list education-list" style={{display: education.display.list_card ? "flex" : "none"}}>
            {educationData.map((item, index)=>(
              <PersonalCard title={item.schoolName} onEdit={educationEvent.handleEditEducation(index)} key={index}/>
            ))}
            <AddDataBtn dataName="Education" handleClick={educationEvent.handleEducationAdd}/>
          </div>
        </div>
        <div className="work-experience input-section">
          <div className="input-form-section">
            <InputSectionTitle title="Work Experience" titleIcon="ti-briefcase" isDropDown={true} handleClick={workExperienceEvent.handleWorkExperienceDisplay}/>
            <div className="input-group work-experience-input-group" style={{display: workExperience.display.adding ? "flex" : "none"}}>
              <Input label="Company Name" type = "text" handleChange={workExperienceEvent.handleInputChange} name="companyName" value={workExperience.data.companyName || ""} />
              <Input label="Position" type = "text" handleChange={workExperienceEvent.handleInputChange} name="position" value={workExperience.data.position || ""}/>
              <Input label="Location" type = "text" handleChange={workExperienceEvent.handleInputChange} name="location" value={workExperience.data.location || ""}/>
              <Input label="Start Date" type = "text" handleChange={workExperienceEvent.handleInputChange} name="startDate" value={workExperience.data.startDate || ""}/>
              <Input label="End Date" type = "text" handleChange={workExperienceEvent.handleInputChange} name="endDate" value={workExperience.data.endDate || ""}/>
              <TextArea label="Description" handleChange={workExperienceEvent.handleInputChange} name="description" value={workExperience.data.description || ""}/>
              <div className="function-section">
                <FunctionButton functionName="Delete" functionClass="delete-btn" themifyIcon="ti-trash" handleClick={workExperienceEvent.handleDeleteWorkExperience}/>
                <div>
                <FunctionButton functionName="cancel" functionClass="cancel-btn" themifyIcon="ti-close" handleClick={workExperienceEvent.handleCancelWorkExperience}/>
                <FunctionButton functionName="save" functionClass="save-btn" themifyIcon="ti-check" handleClick={workExperienceEvent.handleSaveWorkExperience}/>
                </div>
              </div>
            </div>
            
            <div className="personal-list work-experience-list" style={{display: workExperience.display.list_card ? "flex" : "none"}}>
              {workExperienceData.map((item, index)=>(
                <PersonalCard title={item.companyName} onEdit={workExperienceEvent.handleEditWorkExperience(index)} key={index}/>
              ))}
              <AddDataBtn dataName="Work Experience" handleClick={workExperienceEvent.handleWorkExperienceAdd}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CVsheet personalDetails={personalDetails} educationData={educationData} workExperienceData={workExperienceData}/>
    </>
  )
}
