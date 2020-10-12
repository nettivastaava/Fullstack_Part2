import React from 'react'

const Course = (props) => props.courses.map(course =>
  
    <div key={course.id}>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
    )
  
  
  const Header = (props) => {
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Content = (props) => props.parts.map(exercise =>
    <div key={exercise.id}>
      <Part part={exercise.name} exercise={exercise.exercises}/> 
    </div>
    )
  
  
  
  const Part = (props) => {
    return(
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }
  
  const Total = (props) => props.total.reduce(function(sum, total) {
    var summa = sum + total.exercises
    return (
      summa
    )
  }, 0)


export default Course