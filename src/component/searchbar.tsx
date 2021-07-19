import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        marginLeft: "90%",
      },
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '606%',
      [theme.breakpoints.down('sm')]: {
        width: "600%",
      },
    },
  }),
);


export default function InputAdornments(props: any) {
  const classes = useStyles();
const {handleChange} = props

  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            className={classes.textField}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">🔦</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </div>
    </div>
  );
}
