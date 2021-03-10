import { useRouter } from 'next/router'
import {useTeacherFromSubjectNameQuery} from '../../../generated/graphql';

const LecturePage = () => {
  const router = useRouter()
  const { lid, subjectName } = router.query
  console.log(subjectName); 

  // let teachers: any = useTeacherFromSubjectNameQuery({variables: {subjectName: subjectName}}); 
  // teachers = teachers[0]?.data?.getTeacherFromSubjectName; 
  // console.log(teachers); 
  
  return (
    <div>
    </div>
  ) 
}

export default LecturePage;  