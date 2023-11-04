import React from 'react'

type ComponentProperties = {
  prop: string
}

const Component = ({ prop }: ComponentProperties) => {
  return <h2 className='m-5'>{prop}</h2>
}

export { Component }

export type { ComponentProperties }
