import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}));

function Item({name}) {
  const styles = useStyles();

  return (
    <>
    <h3>item: {name}</h3>
    </>
  );
}

export default Item;


