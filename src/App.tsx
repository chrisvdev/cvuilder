import React from 'react'
import useCVData from '@/store/CVData'

export default function App() {
  const {data} = useCVData()
  console.log(data)
  return (
    <div>
      probando cositas que Juan Pablo me dice 🥰
    </div>
  )
}
