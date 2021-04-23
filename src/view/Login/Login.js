import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: '8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.6rem',
  },
  form: {
    width: '100%',
    marginTop: '1rem',
    fontSize: '1.6rem',
  },
  submit: {
    margin: '3rem 0 2rem',
    fontSize: '1.3rem',
  },
  input: {
    fontSize: '1.6rem',
  },
}));

const Login = ({ inputValue, inputValueHandler }) => {
  const classes = useStyles();
  let history = useHistory();

  //redirect after Login
  const loginHandler = (e) => {
    e.preventDefault();
    history.push(`/caesar/${inputValue}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Type name and surname to use Caesar Cipher
        </Typography>
        <form onSubmit={(e) => loginHandler(e)} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="name & surname"
            type="text"
            id="name"
            value={inputValue}
            onChange={inputValueHandler}
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

Login.proptTypes = {
  password: PropTypes.string.isRequired,
  passwordChangeHandler: PropTypes.func.isRequired,
};

export default withRouter(Login);
