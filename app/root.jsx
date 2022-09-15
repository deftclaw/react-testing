import { useState } from 'react'
import { Scripts } from '@remix-run/react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <html>
      <head>
        <title>
          My {count}-teenth Remix App
        </title>
      </head>
      <body>
        <p>
          This is the {count} App. Hooray!
        </p>
        <button
          onClick={() => setCount(c => c + 1)}
        >
          {count}
        </button>
        <Scripts />
      </body>
    </html>
  )
}
