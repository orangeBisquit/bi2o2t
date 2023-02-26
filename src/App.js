import Quiz from './components/Quiz/Quiz'
import classes from './App.module.scss'

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes['app-container']}>
        <Quiz></Quiz>
      </div>
    </div>
  );
}

export default App;
