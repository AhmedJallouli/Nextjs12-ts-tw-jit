import React from 'react'

type DocumentationInterface = {
  header: String
  body: String
}

export default function Documentation(props: DocumentationInterface) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{props.header} &rarr;</h3>
      <p className="mt-4 text-xl">{props.body}</p>
    </div>
  )
}
