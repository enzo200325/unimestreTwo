import { useGetNotesQuery } from "../../../generated/graphql";


const LecturesPage = () => {
  const [{data}] = useGetNotesQuery(); 
  
  return (
    <div>
      {}
    </div>
  )
}

export default LecturesPage; 