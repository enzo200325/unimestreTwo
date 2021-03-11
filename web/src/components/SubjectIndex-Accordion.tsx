import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link';

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export function LectureAccordion(props) {
  const classes = useStyles2();
  const [expanded, setExpanded] = React.useState<number | false>(false);
  let lectures = props.lectures; 

  const handleChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {lectures.map(lecture => {
        let month = lecture?.month; 
        let day = lecture?.day; 
        let weekDay = lecture?.weekDay; 
        let time = lecture?.time; 
        let linkToLecture = lecture?.link; 
        let id = lecture?.id;
        let notes = [...lecture?.notes]; 
        return (
          <Accordion expanded={expanded === id} onChange={handleChange(id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{`${weekDay}(${day}/${month}) - ${time}`}</Typography>
              <Typography className={classes.secondaryHeading}>*assunto da aula</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {
                  notes.map(note => {
                    return (
                      // <Link href={note?.link} passHref={true}>
                      //   <p>link</p>
                      // </Link>
                      <img style={{height: "300px"}} src={note?.link} />
                    )
                  })
                } 
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
}