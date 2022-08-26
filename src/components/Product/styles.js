import { makeStyles } from '@material-ui/core/styles';
//its a named import from material ui
export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    marginTop:0,
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cart:{
     color:'black',
    backgroundColor:'yellow',
    
    }

    // cart:"hover"":{
    //   color:'red',
    //  backgroundColor:'yellow',
     
    //  }
}));