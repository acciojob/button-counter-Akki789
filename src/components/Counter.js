import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    function handle(){
        setCount(prev => prev+1)
    }

  return (
    <div>
        <p>{`Button clicked ${count} times`}</p>
        <button onClick={handle}>Click me</button>
    </div>
  )
}
