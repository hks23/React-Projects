import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <h1>Custom App | Coffee</h1>
    )
}
const reactElement = {
    type: 'a',
    props: {
        href:"https://google.com",
        target: '_blank'
    },
    children: 'CLick me to visit google'
}

const anotherElement = (
    <a href='https://google.com' target='_blank'> Visit Google </a>
)

const reactElement1 = React.createElement(
    'a', // a tag
    {href:"https://google.com", target: '_blank'},
    'click me to visit GOOgle'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    //<MyApp />
    // anotherElement
    reactElement1

)
