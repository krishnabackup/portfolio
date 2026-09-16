import { useRef } from 'react'
import { useInView } from 'framer-motion'



export default function ProjectImage({imageSource}) {
  return (
    <div>
     <img src={imageSource} height={400}/>
    </div>
  )
}
