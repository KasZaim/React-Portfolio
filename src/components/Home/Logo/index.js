import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import LogoSVG from '../../../assets/images/K.svg'
import ProfileImage from '../../../assets/images/profilbild.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    // Initial state
    gsap.set(outlineLogoRef.current, {
      strokeDasharray: 2000,
      strokeDashoffset: 2000
    })

    // Create timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" }
    })

    tl.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    .to(outlineLogoRef.current, {
      duration: 3,
      strokeDashoffset: 0,
    })
    .to(solidLogoRef.current, {
      duration: 1,
      opacity: 1,
      onComplete: () => {
        setTimeout(() => {
          setShowImage(true)
        }, 2000)
      }
    })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      {!showImage ? (
        <>
          <img
            className="solid-logo"
            ref={solidLogoRef}
            src={LogoSVG}
            alt="JavaScript,  Developer"
          />

          <svg
            width="290.85"
            height="353.05"
            viewBox="0 0 290.85 353.05"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="svg-container"
              fill="none"
            >
              <path
                ref={outlineLogoRef}
                stroke="#ffd700"
                strokeWidth="2"
                d="M150.52,166.61l149.81,175.32-84.75-3.51-127.7-153.41,8.54,148.48-67-2.77L10.09-5.46l67,2.78,8.6,149.43L196.24,2.25l80.97,3.36-126.7,161ZM86.79,182.26l129.18,155.21,82.28,3.41-148.96-174.33L275.26,6.48l-78.51-3.25-111.85,146.2L76.21-1.76,11.09-4.45l19.23,334.24,65.11,2.7-8.64-150.22"
              />
            </g>
          </svg>
        </>
      ) : (
        <img
          className="profile-pic"
          src={ProfileImage}
          alt="Kaser Mahmood"
        />
      )}
    </div>
  )
}

export default Logo
