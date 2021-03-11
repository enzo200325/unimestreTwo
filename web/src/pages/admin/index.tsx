import { useGetAllSubjectsQuery, useMeQuery } from "../../generated/graphql"
import Link from "next/link"
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

const AdminPage = () => {
  const [loginData] = useMeQuery(); 
  const router = useRouter();

  const [getAllSubjectsData] = useGetAllSubjectsQuery();  
  let subjects = getAllSubjectsData?.data?.subjects; 

  if (!loginData?.data?.me) {
    return (
      <div>
        <Header loggedIn={false} />
        <h1 style={{marginTop: "150px"}}>Você não está logado</h1>
      </div>
    ) 
  } else {
    if (!(loginData?.data?.me?.username === "enzo2003" || loginData?.data?.me?.username === "LucasDamiani")) {
      return (
        <div>
          <h1>Você não tem acesso a esta página.</h1>
        </div>
      )
    }
  }

  return (
    <div>
      {subjects?.map(subject => {
        const name = subject?.name; 
        return (
          <Link href={`/admin/${name}`} passHref={true}>
            <h4 style={{color: "white"}}>{name}</h4>
          </Link>
        )
      })}
    </div>
  )
}

export default AdminPage; 