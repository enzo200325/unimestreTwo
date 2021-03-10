import { Box, Container, Paper, Typography } from "@material-ui/core";
import Link from "next/link"; 
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { Header } from "../components/Header"; 
import { LectureOnTable } from "../components/lectureOnTable";
import BasicTable from "../components/Table";
import { useMeQuery } from "../generated/graphql";




const Home = ({}) => {
  const [{data}] = useMeQuery()

  let body; 
  if (!!data?.me) {
    body = (
      <Container style={{marginTop: "130px", marginBottom: "110px",  width: "810px"}}>
      <h1 style={{color: "white"}}>Aulas da Semana</h1>
      <BasicTable />
    </Container>
    )
  } else { 
    body = (
      <Paper style={{margin: "160px 200px 0px 200px", padding: "20px"}}>
        <Typography variant="h4" style={{marginLeft: "10px"}} >
          Site exclusivo para estudantes do Colégio Exathum, Joinville
        </Typography>
        <Typography variant="h6" style={{marginLeft: "10px", marginTop: "20px"}}>Se você é um deles, <Link href="/register">clique aqui</Link></Typography>
      </Paper>
    )
  }

  return (
    <>
    <Header loggedIn={!!data?.me} userName={data?.me?.username}/>
    {body}
    </>
  )
}


export default Home; 