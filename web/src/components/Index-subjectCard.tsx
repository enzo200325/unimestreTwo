import { Typography, Paper, Button, Grid } from "@material-ui/core"
import {useRouter} from "next/router"; 

export const SubjectCard = (props) => {
  const router = useRouter()
  
  return (
    <Paper style={{height: "200px", width: "300px", padding: "10px", margin: "30px"}}>
      <Grid container>
        <Grid container item >
          <Button onClick={() => router.push(`/${props?.subjectName}`)}><Typography variant="h6">{props.subjectName}</Typography></Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

