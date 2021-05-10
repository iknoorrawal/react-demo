
import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, Button } from '@material-ui/core';
import Item from './components/item';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    backgroundColor: 'grey',
    textAlign: 'center',
    margin: 'auto',

  },
  app: {
    textAlign: 'center',
  },
}));

function App() {
  const styles = useStyles();

  function demoIknoor() {
    setDemo(demo + 1)
  }

  const [demo, setDemo] = React.useState(0)

  return (
    <div className={styles.app}>
      <h1>Esther's Restaurant</h1>
      <Card>
        <Card className={styles.card}>
          <Item name="burger"/>
          <Item name="burger"/>
          <Item />
        </Card>
      </Card>
      <Button onClick={demoIknoor}>{demo}</Button>
    </div>
  );
}

export default App;