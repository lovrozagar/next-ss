import React from 'react'

type ComponentProperties = {
  prop: string
}

const Component = ({ prop }: ComponentProperties) => {
  return <h2 className='text-red-500'>{prop}</h2>
}

export { Component }

export type { ComponentProperties }
