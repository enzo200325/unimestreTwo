import { Button, TextField, Box, Paper, makeStyles, Container } from "@material-ui/core";
//import  from '@material-ui/lab/'
import { ErrorMessage, Formik } from "formik"; 
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import Link from "next/link"; 
import { useRouter } from "next/router"; 

const useStyles = makeStyles({
  container: {
    display: "flex", 
    justifyContent: "center", 
  },
  loginPaper: {
    height: "400px",
    width: "300px",
    margin: "100px",
    display: "flex", 
    justifyContent: "center", 
    flexDirection: "row", 
    alignItems: "center", 
  }, 
  form: {
    display: "flex", 
    flexDirection: "column", 
  }, 
  link: {
    textDecoration: "none", 
    color: "black", 
    marginTop: "3px", 
    fontWeight: 500,
    fontSize: "0.875rem", 
    "&$link:hover": {
      cursor: "pointer",
    }

  },
})

const Login = () => {
  const router = useRouter(); 
  const [{fetching: loginFetching}, login] = useLoginMutation(); 
  const { loginPaper, container, form, link} = useStyles(); 

  return (
    <Container className={container}>
    <Paper elevation={8} className={loginPaper}>
      <Formik initialValues={{username: "", password: ""}} onSubmit={async(values, {setErrors}) => {
        const mutationResponse = await login(values); 
        if (mutationResponse.data?.login?.errors) {
          setErrors(toErrorMap(mutationResponse.data.login.errors)); 
        } else if (mutationResponse.data?.login?.user) {
          router.push("/", undefined,  {
            shallow: false
          }); 
        }
      }}>
        {({values, handleChange, handleSubmit, errors}) => (
          <div>
          <form className={form} onSubmit={handleSubmit}>
          <TextField error={!!errors.username} helperText={errors.username ? String(errors.username) : null} size="small" name="username" type="text" onChange={handleChange} value={values.username} label="Nome de Usuário" variant="outlined"/>
          <TextField error={!!errors.password} helperText={errors.password ? String(errors.password) : null} size="small" style={{marginTop: "20px"}} name="password" type="password" onChange={handleChange} value={values.password} label="Senha" variant="outlined"/>
          <Button onLoadStart={() => loginFetching} style={{marginTop: "35px"}} type="submit">Login</Button>
          </form>
          <span><p style={{marginBottom: "0px", marginTop: "70px", fontSize: "0.900rem"}}>Não tem uma conta ainda? </p><Link href="/register"><p className={link}>REGISTRE-SE</p></Link></span>
          </div>
        )} 
      </Formik>
    </Paper>
    </Container>
  )
}

export default Login; 