import React from 'react'
export default function Avatar({funcss ,children , width, height , bg}) {
  return (
    <button className={`button circle padding content-middle ${funcss} ${bg}`} style={{
        width:`${width}px`,
        height:`${height}px`,
        borderRadius:"50%"
    }}>
        {children}
    </button>
  )
}
