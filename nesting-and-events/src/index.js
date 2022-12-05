import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';


const taskList = [
  {id:"task1", title:"Buy Milk", isComplete: true},
  {id:"task2",title:"Read a book",isComplete:false},
  {id:"task3",title:"Early morning run",isComplete:false},
  {id:"task4",title:"Drink water",isComplete:false},
  {id:"task5",title:"Visit the puppy shelter",isComplete:true},
  {id:"task6",title:"Watch Bad Sisters",isComplete:false}
];


function App() {
  
  const [data, setData] = React.useState(taskList);

  function toggleComplete(id){
    console.log(`Task with the id '${id}' was clicked`);
    const newData = data.map((props) => {
      if (props.id == id){
        props.isComplete = !props.isComplete;
      }
      return props;
    });
    setData(newData)
  }
   
   return (
      <Fragment>
        <h1 key="heading">Task List</h1>
        <TaskContainer>
        {data.map((props) => {
          const {title, isComplete, id} = props;
           return <Task key={id} id ={id} isComplete={isComplete} title={title} handleClick={toggleComplete}/>
           })}

       </TaskContainer>
      </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);