import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useRouter} from "next/router";
import { useTeacherFromSubjectNameQuery } from "../../generated/graphql";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { LectureAccordion } from '../../components/SubjectIndex-Accordion';
import { Header } from '../../components/Header';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles1 = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "64px", 
  },
}));

function SubjectPage() {
  const classes = useStyles1();
  const [value, setValue] = React.useState(5);
  const router = useRouter(); 
  const {subjectName}: any = router.query

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  let teachers: any = useTeacherFromSubjectNameQuery({variables: {subjectName: subjectName}});   
  teachers = teachers[0]?.data?.getTeacherFromSubjectName; 
  console.log(teachers); 
  let lecturesList = []; 
  let tabs = []; 
  if (teachers) {
    teachers.forEach(teacher => {
      let lectures = teacher?.lectures; 
      let name = teacher?.teacher; 
      let index = teacher?.lectures[0]?.id; 
      lecturesList.push(
      <TabPanel value={value} index={index}>
        <LectureAccordion lectures={lectures} />
      </TabPanel>
      )
      tabs.push(
        <Tab value={index} label={name} {...a11yProps(index)} />
      )
    })
    console.log(tabs)
    console.log(lecturesList); 
  }

  return (
    <>
    <Header loggedIn={true} username={""}/>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          {tabs}
        </Tabs>
      </AppBar>
      {lecturesList}
    </div>
    </>
  );
}

export default SubjectPage; 
