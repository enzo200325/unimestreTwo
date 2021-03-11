import Link from "next/link"; 
import {Toolbar, Typography, Button, AppBar} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { useLogoutMutation } from "../generated/graphql"
import { useRouter} from "next/router"

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 100px", 
    background: "linear-gradient(to right, #06d16c, #0f72db)"
  },
}))

export const Header = (props) => {
  const {toolbar} = useStyles(); 
  const [_, logout] = useLogoutMutation()
  const router = useRouter();

  const loginLink = (
    <Link href="/login" passHref>
      <Button color="inherit">Login</Button>
    </Link>
  )

  const logoutLink = (
    <div style={{display: "flex"}}>
      <p style={{marginBottom: "18.5px", marginRight: "15px"}}>{props.userName}</p>
      <Button color="inherit" onClick={async () => {
        const logoutResult = await logout(); 
        if (logoutResult) {
          router.push("/", undefined, {
            shallow: false
          }); 
        };
        {
      }}}>Logout</Button>
    </div>
  ) 

  return (
    <header>
      <AppBar>
        <Toolbar className={toolbar}>
          <Link href="/" passHref={true}>
          <Typography variant="h6" component="h1">
            Unimestre_v2
          </Typography>
          </Link>
          {props.loggedIn ? logoutLink : loginLink}
        </Toolbar>
      </AppBar>
    </header>
  )
}