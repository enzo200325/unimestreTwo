import {useRouter} from "next/router";
import { useTeacherFromSubjectNameQuery } from "../../generated/graphql";


const SubjectPage = () => {
  const router = useRouter(); 
  const {subjectName}: any = router.query

  console.log(subjectName)

  let teachers: any = useTeacherFromSubjectNameQuery({variables: {subjectName: subjectName}}); 
  teachers = teachers[0]?.data?.getTeacherFromSubjectName; 
  console.log(teachers); 
  
  return (
    <h1>hello</h1>
  )
}

export default SubjectPage; 