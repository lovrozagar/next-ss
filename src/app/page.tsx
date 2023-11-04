import React from 'react'

import { Component } from '@/app/component'

const Page = () => {
  return (
    <div>
      <h1>Hi, I am a page and I have a default export.</h1>
      <Component prop='Hi, I am a component and I have a named export.' />
    </div>
  )
}

export default Page
