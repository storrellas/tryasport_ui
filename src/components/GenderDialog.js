import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


// Project import
import genderImage from "../assets/img/tryasport/img_gender_orange.png"
import maleImage from "../assets/img/tryasport/img_male.png"
import femaleImage from "../assets/img/tryasport/img_female.png"



// Redux
import { store, renderConfetti } from "../redux";

const styles = theme => ({
  avatar: {
    backgroundColor: 'red',
    color: 'blue',
  },
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '80vh',
    position: 'relative',
    overflowY: 'initial'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  button:{
    width: '75%', 
    display: 'flex',
    borderRadius:'100px', 
    justifyContent: 'center',
    backgroundColor: '#00CA9D',
    color: 'white',
    '&:hover':{
      backgroundColor: '#005643'
    }
  }
});

class GenderDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zIndex: 1000
    }
  }

  handleClick(e, gender) {
    //onClose(selectedValue);
    console.log('handleClick', gender)

    this.props.onClose()
  }



  render() {
    const { classes, onClose, ...other } = this.props;
    return (
      <Dialog maxWidth="xs" fullWidth 
              classes={{ paper: classes.dialogPaper }} onClose={onClose} 
              aria-labelledby="simple-dialog-title" {...other}>
        <canvas id="my-canvas" width={200} height={200} style={{ position:'absolute', backgroundColor: 'transparent', zIndex: this.state.zIndex }}></canvas>


        <img height="15%" src={genderImage} 
            style={{borderRadius: '10px', position: 'absolute', 
                    top: -30, margin: 'auto', left: 0, right: 0}}>
        </img>
        <IconButton aria-label="Close" className={classes.closeButton} 
            onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle id="simple-dialog-title" style={{textAlign: "center", marginTop: 80}}>
          What's your gender?
        </DialogTitle>

        <Box mt={2} mr={10} ml={10} style={{display:'flex', justifyContent: 'center'}}>
          <Button variant="contained" style={{width: "30%"}} onClick={(e) => this.handleClick(e, 'female')}>
            <img src={maleImage} style={{width:"100%"}} />
          </Button>
          
          <b style={{alignSelf: 'center', marginLeft: 10, marginRight: 10}}>OR</b>
          
          <Button variant="contained" style={{width: "30%"}} onClick={(e) => this.handleClick(e, 'female')}>
            <img style={{width:"100%"}} src={femaleImage} />
          </Button>
        </Box>

        <Box mt={2} style={{display:'flex', justifyContent: 'center'}}>
          <Button variant="contained" className={classes.button}>
            <div style={{flexGrow: 1}}>OK</div>
          </Button>
        </Box>

        <Box mt={2} style={{display:'flex', justifyContent: 'center'}}>
          <Button variant="contained" onClick={(e) => this.handleClick(e, 'prefer_not_to_say')}>
            Dont want to tell
          </Button>
        </Box>

      </Dialog>
    );
  }
}

/*
FriendDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  selectedValue: PropTypes.string,
};
/**/

export default withStyles(styles)(GenderDialog);

