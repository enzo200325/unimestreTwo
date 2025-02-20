import { useState } from "react";
import sha1 from "js-sha1"; 
import { useCreateNoteMutation } from "../generated/graphql"

const URL = "https://api.cloudinary.com/v1_1/duczgjqsk/image/upload"; 

const Notes = () => {
  const [inputValue, setInputValue] = useState([]); 
  const [_, createNote ]= useCreateNoteMutation()

  const handleSubmit = async (e: any) => {
    e.preventDefault(); 
    const formData = new FormData(); 
    const fileToSend = inputValue[0]; 
    let timestamp = (Date.now() / 1000 | 0).toString();
    const signature = sha1(`eager=w_400,h_300,c_pad|w_260,h_200,c_crop&public_id=sample_image&timestamp=${timestamp}NDrSpdzXUu_RpJ1ssZLMSOMstAQ`); 
    formData.append("file", fileToSend);
    formData.append("api_key", "957516873698331");
    formData.append("eager", "w_400,h_300,c_pad|w_260,h_200,c_crop");
    formData.append("public_id", "sample_image");
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    let result = await fetch(URL, { 
      method: "POST", 
      body: formData, 
    })
    result = await result.json()

    if (result) {
      await createNote({isImage: true, lectureId: 7, user: "enzo2003", link: result.url}); 
    }
  }

  return (
    <form>
      <input type="file" value={inputValue[0]?.filename} onChange={(e) => setInputValue(Array.from(e.target.files))}/>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Submit image</button>
    </form>
  )
}

export default Notes; 