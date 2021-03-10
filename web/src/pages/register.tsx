import { Button, TextField, Box, Paper, makeStyles, Container } from "@material-ui/core";
import { ErrorMessage, Formik } from "formik"; 
import { useLoginMutation, useRegisterMutation } from "../generated/graphql";
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
    width: "350px",
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

const Register = () => {
  const router = useRouter(); 
  const [ _, register] = useRegisterMutation(); 
  const { loginPaper, container, form, link} = useStyles(); 

  return (
    <Container className={container}>
    <Paper elevation={8} className={loginPaper}>
      <Formik initialValues={{username: "", password: "", code: "", name: ""}} onSubmit={async(values, {setErrors}) => {
        const mutationResponse = await register(values); 
        if (mutationResponse.data?.registerUser?.errors) {
          setErrors(toErrorMap(mutationResponse?.data?.registerUser?.errors)); 
        } else if (mutationResponse?.data?.registerUser?.user) {
          router.push("/", undefined,  {
            shallow: false
          }); 
        }
      }}>
        {({values, handleChange, handleSubmit, errors}) => (
          <div>
          <form className={form} onSubmit={handleSubmit}>
          <TextField error={!!errors.username} helperText={errors.username ? String(errors.username) : null} size="small" name="username" type="text" onChange={handleChange} value={values.username} label="Username" variant="outlined"/>
          <TextField error={!!errors.password} helperText={errors.password ? String(errors.password) : null} size="small" style={{marginTop: "20px"}} name="password" type="password" onChange={handleChange} value={values.password} label="Senha" variant="outlined"/>
          <TextField error={!!errors.name} helperText={errors.name? String(errors.name) : null} size="small" name="name" style={{marginTop: "20px"}} type="text" onChange={handleChange} value={values.name} label="Nome" variant="outlined"/>
          <TextField error={!!errors.code} helperText={errors.code? String(errors.code) : null} size="small" style={{marginTop: "20px"}} name="code" type="text" onChange={handleChange} value={values.code} label="Código de Estudante" variant="outlined"/>
          <Button style={{marginTop: "35px"}} type="submit">Registrar</Button>
          </form>
          </div>
        )} 
      </Formik>
    </Paper>
    </Container>
  )
}

export default Register; 