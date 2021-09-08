import React from 'react'

const Hello = () => {
  return (
    <div>
      <p>Hello for real</p>
    </div>
  )
}

// React component needs to be capotalized
const HelloName = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
}

const Content = (props) => {

  return (
    <>
      {/* <p>
      <Part part={props.part1['name']} exercise={props.part1['exercises']} />
      <Part part={props.part2['name']} exercise={props.part2['exercises']} />
      <Part part={props.part3['name']} exercise={props.part3['exercises']} />
      </p> */}
      {props.part.map(p => 
        {return (
          <Part part={p['name']} exercises={p['exercises']} />
        )}
      )}
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {

  const age = 30
  const name = 'Sam'

  // const course = 'Half Stack application development'

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // const part = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  let totalExercise = course.parts.map(p => p.exercises).reduce((a, b) => a + b);


  
  return (
    <div>
      <p>Part 1</p>
      <Header course={course.name}/>
      {/* <Content part1={part1} part2={part2} part3={part3}/> */}
      <Content part={course.parts} />
      <Total total={totalExercise}/>
      <Hello />
      <HelloName name="Tom" age={10+12} />
      <HelloName name={name} age={age} />
    </div>
  )
}

export default App;
