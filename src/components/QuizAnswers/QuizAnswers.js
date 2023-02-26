import classes from './QuizAnswers.module.scss';

function getColumnsForGrid(numAnswers) {
  const maxColumns = 4;
  const minColumns = 1;
  const maxRows = Math.ceil(numAnswers / maxColumns);

  for (let i = maxColumns; i >= minColumns; i--) {
    const rowsNeeded = Math.ceil(numAnswers / i);
    const columnsNeeded = Math.ceil(numAnswers / rowsNeeded);
    if (columnsNeeded <= maxColumns && rowsNeeded <= maxRows) {
      return columnsNeeded;
    }
  }

  return maxColumns;
}

const QuizAnswers = (props) => {

  const gridColumnsNum = getColumnsForGrid(props.answers.length);
  const columnWidth = `calc((100% - ${gridColumnsNum - 1}rem) / ${gridColumnsNum})`;

  return (
    <div className={classes.answers}>
      <ul
        className={classes['grid-container']}
        style={{ gridTemplateColumns: `repeat(${gridColumnsNum}, ${columnWidth})` }}>
        {props.answers.map((answer) => {
          return <li className={classes['grid-item']} key={answer}>{answer}</li>
        })}
      </ul>
    </div>
  )
}

export default QuizAnswers;
