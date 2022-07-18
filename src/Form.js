import React,{ useState } from "react";

const Form = () => {
    const [fName,setFName] = useState("")
    const [lName,setLName] = useState("")
    const [date,setDate] = useState("")
    const [gender,setGender] = useState("")
    const [siblings,setSiblings] = useState("")
    const [fatherFName,setFatherFName] = useState("")
    const [fatherLName,setFatherLName] = useState("")
    const [fatherqualification,setFatherqualification] = useState("")
    const [fatherPhone,setFatherPhone] = useState("")
    const [fatherEmail,setFatherEmail] = useState("")
    const [fatherOccu,setFatherOccu] = useState("")
    const [motherFName,setMotherFName] = useState("")
    const [motherLName,setMotherLName] = useState("")
    const [motherQualification,setMotherQualification] = useState("")
    const [motherPhone,setMotherPhone] = useState("")
    const [motherEmail,setMotherEmail] =  useState("")
    const [motherOccu,setMotherOccu] = useState("")
    const [address,setAddress] = useState("")
    const [error,setError] = useState('')
    const [color,setColor] = useState("")

    
    console.log(fName)

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    const handleGender = (event) => {
        setGender(event.target.id)
      }

    const submit = () =>{
        if(fName=="" || lName == "" || date == "" || gender == "" || fatherFName == "" || fatherLName == "" || fatherqualification == "" || fatherPhone == "" || fatherEmail == "" || fatherOccu == "" || motherFName == "" || motherLName == "" || motherQualification == "" || motherPhone == "" || motherEmail == "" || motherOccu == "" || address == ""){
            setError("Fields can't be Empty!")
            setColor("red")
            
        }
        else{
            if(!/^[a-zA-Z_ ]*$/.test(fName)){
                setError("First Name can only contain characters!")
                setColor("red")
                setFName("")
            }else if(!/^[a-zA-Z_ ]*$/.test(lName)){
                setError("LastName can only contain characters!")
                setColor("red")
                setLName("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(fatherFName)){
                setError("Father's Name only contain characters!")
                setColor("red")
                setFatherFName("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(fatherLName)){
                setError("Father's Name only contain characters!")
                setColor("red")
                setFatherLName("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(fatherqualification)){
                setError("Father's Qualification only contain characters!")
                setColor("red")
                setFatherqualification("")
            }
            else if(!/^[0-9]*$/.test(fatherPhone)){
                setError("Phone Number Can only contains numbers!")
                setColor("red")
                setFatherPhone("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(fatherOccu)){
                setError("Father's Occupation only contain characters!")
                setColor("red")
                setFatherOccu("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(motherFName)){
                setError("Mother's Name only contain characters!")
                setColor("red")
                setMotherFName("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(motherLName)){
                setError("Mother's Name only contain characters!")
                setColor("red")
                setMotherLName("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(motherQualification)){
                setError("Mother's Qualification only contain characters!")
                setColor("red")
                setMotherQualification("")
            }
            else if(!/^[0-9]*$/.test(motherPhone)){
                setError("Phone Number Can only contains numbers!")
                setColor("red")
                setMotherPhone("")
            }
            else if(!/^[a-zA-Z_ ]*$/.test(motherOccu)){
                setError("Father's Occupation only contain characters!")
                setColor("red")
                setMotherOccu("")
            }
            else{
                setError("Data Saved Successfully!")
                setColor("green")
            
            }
        }

    } 

  return (
    <div className="form">
      <h1>Student Registration Form</h1>
        <p style={{color: color}}>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name of the Applicant</label>
          <div className="inputArea">
            <input
              type="text"
              id="fName"
              name="fName"
              className="first"
              placeholder="First"
              value={fName}
              onChange={(event) => setFName(event.target.value)}
              required
              style={{width: 180}}
            />
            <input
              type="text"
              id="lName"
              name="lName"
              className="first"
              style={{width: 180}}
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
              placeholder="Last"
            />
          </div>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <div className="inputArea">
            <input type="date" placeholder="MM/DD/YYYY" id="date" required value={date}
             onChange={(e) => setDate(e.target.value)}

            />
          </div>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>

          <input type="radio" id="male" name="gender" required value={gender} onChange={handleGender}/>
          <label htmlFor="male" className="gender">
            Male
          </label>

          <input type="radio" id="female" name="gender" required value={gender} onChange={handleGender}/>
          <label htmlFor="female" className="gender">
            Female
          </label>
        </div>
        <div>
          <label>Details of Siblings</label>
          <div className="inputArea">
            <input type="text" id="siblings" value={siblings} 
            onChange={(e) => setSiblings(e.target.value)}
            />
          </div>
        </div>
        <h1>Parent's Information</h1>
        <div>
          <label>Father's Name</label>
          <div className="inputArea">
            <input
              type="text"
              id="fatherFName"
              name="fatherFName"
              className="first"
              placeholder="First"
              required
              style={{width: 180}}
              value={fatherFName}
              onChange={(e) => setFatherFName(e.target.value)}
            />
            <input
              type="text"
              id="fatherLName"
              name="fatherLName"
              className="first"
              placeholder="Last"
              required
              style={{width: 180}}
              value={fatherLName}
              onChange={(e) => setFatherLName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Father's Qualification</label>
          <div className="inputArea">
            <input
              type="text"
              id="fatherqualification"
              name="fatherqualification"
              required
              value={fatherqualification}
              onChange={(e) => setFatherqualification(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <label htmlFor="fatherphone">Phone</label>
            <div className="inputArea">
              <input
                type="text"
                id="fatherphone"
                name="fatherphone"
                required
                placeholder="### ### ####"
                value={fatherPhone}
                minLength={10}
                maxLength={10}
                onChange={(e) => setFatherPhone(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="fatherEmail">Email</label>
            <div className="inputArea">
              <input type="email" id="fatherEmail" name="fatherEmail" required value={fatherEmail} onChange={(e) => setFatherEmail(e.target.value)}/>
            </div>
          </div>
        </div>
        <div>
          <label>Father's Occupation</label>
          <div className="inputArea">
            <input type="text" id="fatherOccupation" name="fatherOccupation" required value={fatherOccu} 
            onChange={(e) => setFatherOccu(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Mother's Name</label>
          <div className="inputArea">
            <input
              type="text"
              id="motherFName"
              name="motherFName"
              className="first"
              placeholder="First"
              required
              value={motherFName}
              onChange={(e) => setMotherFName(e.target.value)}
              style={{width: 180}}
            />
            <input
              type="text"
              id="motherLName"
              name="motherLName"
              className="first"
              placeholder="Last"
              required
              value={motherLName}
              onChange={(e) => setMotherLName(e.target.value)}
              style={{width: 180}}
            />
          </div>
        </div>
        <div>
          <label>Mother's Qualification</label>
          <div className="inputArea">
            <input type="text" id="motherQualification" required value={motherQualification} 
            onChange={(e) => setMotherQualification(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <label htmlFor="motherphone">Phone</label>
            <div className="inputArea">
              <input
                type="text"
                id="motherphone"
                name="motherphone"
                required
                minLength={10}
                maxLength={10}
                value={motherPhone}
                onChange={(e) => setMotherPhone(e.target.value)}
                placeholder="### ### ####"
              />
            </div>
          </div>
          <div>
            <label htmlFor="motherEmail">Email</label>
            <div className="inputArea">
              <input type="email" id="motherEmail" name="motherEmail" required value={motherEmail} 
                onChange={(e) => setMotherEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <label>Mother's Occupation</label>
          <div className="inputArea">
            <input type="text" id="motherOccupation" name="motherOccupation" required value={motherOccu} 
            onChange={(e) => setMotherOccu(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Address</label>
          <div className="inputArea">
            <input type="text" id="address" placeholder="Street Address" required value={address}
           onChange={(e) => setAddress(e.target.value)}
             />
          </div>
        </div>
        <input type='submit' onClick={submit}/>
      </form>
    </div>
  );
};

export default Form;
