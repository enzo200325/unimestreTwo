import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import {ExpandLess} from '@material-ui/icons';
import {ExpandMore} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 200,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

export function ListForLectureOnTable(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  if (props.given) {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Gravação da Aula" />
          {!open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!open} >
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <a href={props.link} target="_blank">Link</a>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <a href="" style={{textDecoration: "none", color: "black"}}>Ver Mais</a>        
        </ListItem>
      </List>
    )
  } else {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button>
          <ListItemText primary="Essa aula ainda está para acontecer, aguarde para ter acesso à notas feitas por outros alunos e à sua gravação" />
        </ListItem>
        <ListItem button>
          <a href={``}>Eventos</a>        
        </ListItem>
      </List>
    );
  } 
}

