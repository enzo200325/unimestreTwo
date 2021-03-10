import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useGetLectureTimesQuery } from '../generated/graphql';
import { LectureOnTable } from './lectureOnTable';
import { toMinutes, toWeekDay } from "../utils/timeStringToMinutes"; 

const useStyles = makeStyles({
  table: {
    width: "100%", 
  },
});

export default function BasicTable({}) {
  const classes = useStyles();

  let [{data}] = useGetLectureTimesQuery(); 
  const lectureTimes = data?.lectureTimes; 
  let row1: any[] = ["7:30"], 
      row2: any[] = ["8:15"], 
      row3: any[] = ["9:15"], 
      row4: any[] = ["10:00"], 
      row5: any[] = ["11:00"], 
      row6: any[] = ["11:45"]; 
  let rows = [row1, row2, row3, row4, row5, row6]; 
  for (let i = 0; i < lectureTimes?.length; i++) {
    let time = lectureTimes[i]?.time;
    let day = lectureTimes[i]?.day; 
    let teacher = lectureTimes[i]?.teacher.name; 
    const switchTime = (column: number) => {
      switch (time) {
        case "7:30":
          row1[column] = lectureTimes[i]; 
          break;
        case "8:15": 
          row2[column] = lectureTimes[i]; 
          break;
        case "9:15": 
          row3[column] = lectureTimes[i]; 
          break;
        case "10:00": 
          row4[column] = lectureTimes[i]; 
          break;
        case "11:00": 
          row5[column] = lectureTimes[i]; 
          break;
        case "11:45": 
          row6[column] = lectureTimes[i]; 
          break;
      }
    }
    switch(day) {
      case "Monday":
        switchTime(1); 
        break; 
      case "Tuesday": 
        switchTime(2); 
        break; 
      case "Wednesday":
        switchTime(3); 
        break; 
      case "Thursday":
        switchTime(4); 
        break; 
      case "Friday":
        switchTime(5); 
        break; 
    }
  }

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horário</TableCell>
            <TableCell align="center">Segunda</TableCell>
            <TableCell align="center">Terça</TableCell>
            <TableCell align="center">Quarta</TableCell>
            <TableCell align="center">Quinta</TableCell>
            <TableCell align="center">Sexta</TableCell>
          </TableRow>
        </TableHead>
        {console.log(toMinutes("7:30") < (new Date().getTime() / 60000) - (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() / 60000))}
        <TableBody >
          {rows.map((row) => (
            <TableRow>
              <TableCell style={{padding: "10px"}}align="left">{row[0]}</TableCell>
              <TableCell style={{padding: "9px"}}><LectureOnTable title={row[1]?.teacher?.name} link="" given={toWeekDay(row[1]?.day) > new Date().getDay() ? false : toWeekDay(row[1]?.day) < new Date().getDay() ? true : toMinutes(row[1]?.time) + 45 < (new Date().getTime() / 60000) - (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() / 60000) ? true : false} /></TableCell>
              <TableCell style={{padding: "0px"}}><LectureOnTable title={row[2]?.teacher?.name} link="" given={toWeekDay(row[2]?.day) > new Date().getDay() ? false : toWeekDay(row[2]?.day) < new Date().getDay() ? true : toMinutes(row[2]?.time) + 45 < (new Date().getTime() / 60000) - (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() / 60000) ? true : false} /></TableCell>
              <TableCell style={{padding: "0px"}}><LectureOnTable title={row[3]?.teacher?.name} link="" given={toWeekDay(row[3]?.day) > new Date().getDay() ? false : toWeekDay(row[3]?.day) < new Date().getDay() ? true : toMinutes(row[3]?.time) + 45 < (new Date().getTime() / 60000) - (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() / 60000) ? true : false} /></TableCell>
              <TableCell style={{padding: "0px"}}><LectureOnTable title={row[4]?.teacher?.name} link="" given={toWeekDay(row[4]?.day) > new Date().getDay() ? false : toWeekDay(row[4]?.day) < new Date().getDay() ? true : toMinutes(row[4]?.time) + 45 < (new Date().getTime() / 60000) - (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() / 60000) ? true : false}/></TableCell>
              <TableCell style={{padding: "0px"}}><LectureOnTable title={row[5]?.teacher?.name} link="" given={toWeekDay(row[5]?.day) > new Date().getDay() ? false : toWeekDay(row[5]?.day) < new Date().getDay() ? true : toMinutes(row[5]?.time) + 45 < (new Date().getTime() / 60000) - (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() / 60000) ? true : false} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
