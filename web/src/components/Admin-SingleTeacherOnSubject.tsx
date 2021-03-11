import {Dispatch, SetStateAction, useState} from "react"
import {useAddLectureMutation} from "../generated/graphql"; 


export const SingleTeacherOnSubject = (props) => {
  const [addingNewLecture, setAddingNewLecture] = useState(false); 
  const [monthInput, setMonthInput] = useState("0"); 
  const [dayInput, setDayInput] = useState(null); 
  const [weekDayInput, setWeekDayInput] = useState("Monday"); 
  const [timeInput, setTimeInput] = useState("7:30"); 
  const [aboutInput, setAboutInput] = useState(null); 

  const [_, addLecture] = useAddLectureMutation(); 

  let teacher = props.teacher; 
  const teacherName = teacher?.teacher; 
  let lectures = teacher?.lectures;

  const handleInputChange = (setFunction: Dispatch<SetStateAction<string>>, e) => {
    console.log(e.target.value)
    setFunction(e.target.value); 
  }

  const setStatesBackToNull = (setFunctions: Array<any>) => {
    setFunctions.forEach(setFunction => {
      setFunction(null); 
    })
  }
  const handleNewLectureConfirm = async () => {
    const response = await addLecture({month: monthInput, day: dayInput, weekDay: weekDayInput, time: timeInput, about: aboutInput, teacherName: teacherName})
    console.log(response); 
    setStatesBackToNull([setMonthInput, setDayInput, setWeekDayInput, setTimeInput, setAboutInput]);
  }
  
  return (
    <>
    <div>
      <h1>{teacherName}</h1>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>month</th>
            <th>day</th>
            <th>week day</th>
            <th>time</th>
            <th>about</th>
            <th>notes</th>
          </tr>
        </thead>
        <tbody>
          {lectures?.map(lecture => {
            
            return (
              <tr>
                <td>{lecture?.month}</td>
                <td>{lecture?.day}</td>
                <td>{lecture?.weekDay}</td>
                <td>{lecture?.time}</td>
                <td>{lecture?.about}</td>
                <td>{lecture?.notes?.map(note => {
                  if (note?.isImage) {
                    return <a href={note?.link} target="_blank">Nota</a>
                  }
                })}</td>
              </tr>
            )
          })}
          {addingNewLecture ? (
            <tr>
              <td>
                <select value={monthInput} onChange={(e) => handleInputChange(setMonthInput, e)}>
                  <option value={"0"}>Janeiro</option>
                  <option value={"1"}>Fevereiro</option>
                  <option value={"2"}>Março</option>
                </select>
              </td>
              <td>
                <input value={dayInput} placeholder="valores entre 1 e 31/30" onChange={(e) => handleInputChange(setDayInput, e)}>
                </input>
              </td>
              <td>
                <select value={weekDayInput} onChange={(e) => handleInputChange(setWeekDayInput, e)}>
                  <option value={"Monday"}>Segunda-Feira</option>
                  <option value={"Tuesday"}>Terça-Feira</option>
                  <option value={"Wednesday"}>Quarta-Feira</option>
                  <option value={"Thursday"}>Quinta-Feira</option>
                  <option value={"Friday"}>Sexta-Feira</option>
                </select>
              </td>
              <td>
                <select value={timeInput} onChange={(e) => handleInputChange(setTimeInput, e)}>
                  <option value={"7:30"}>7:30</option>
                  <option value={"8:15"}>8:15</option>
                  <option value={"9:15"}>9:15</option>
                  <option value={"10:00"}>10:00</option>
                  <option value={"11:00"}>11:00</option>
                  <option value={"11:45"}>11:45</option>
                </select>
              </td>
              <td>
                <input value={aboutInput} onChange={(e) => handleInputChange(setAboutInput, e)}>
                </input>
              </td>
            </tr>
          ) 
          : <button onClick={() => setAddingNewLecture(true)}>Adicionar Nova Aula</button>}
        </tbody>
        {addingNewLecture ? <button onClick={() => {
          handleNewLectureConfirm(); 
          }}>Confirmar</button> : null}
      </table>
    </div>
    </>
  )
}
