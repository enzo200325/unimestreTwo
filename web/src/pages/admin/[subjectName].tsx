import { useTeacherFromSubjectNameQuery } from "../../generated/graphql";
import {useRouter} from "next/router"; 
import { SingleTeacherOnSubject } from "../../components/Admin-SingleTeacherOnSubject";


const AdminSubjectPage = () => {
  const router = useRouter(); 
  const {subjectName}: any = router.query; 
  let [{data}] = useTeacherFromSubjectNameQuery({variables: {subjectName: subjectName}}) 
  let teachers = data?.getTeacherFromSubjectName; 

  return (
    <div>
      {teachers?.map(teacher => {
      return <SingleTeacherOnSubject teacher={teacher} />
      })}
    </div>
  )
}

export default AdminSubjectPage; 