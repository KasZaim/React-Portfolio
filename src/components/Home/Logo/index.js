import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import LogoSVG from '../../../assets/images/K.svg'
import ProfileImage from '../../../assets/images/profilbild.png'
import './index.scss'

// Custom hook for counting animation
const useCountAnimation = (targetValue, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const startCounting = () => {
    if (hasStarted) return
    setHasStarted(true)
    
    setTimeout(() => {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(easeOutQuart * targetValue)
        
        setCount(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(targetValue)
        }
      }
      animate()
    }, delay)
  }

  return [count, startCounting]
}

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const [showImage, setShowImage] = useState(false)
  const [showStats, setShowStats] = useState(false)
  
  // Counting hooks
  const [yearsCount, startYearsCount] = useCountAnimation(3, 2000, 0)
  const [projectsCount, startProjectsCount] = useCountAnimation(10, 2000, 500)
  const [hoursCount, startHoursCount] = useCountAnimation(10, 2000, 1000)

  useEffect(() => {
    // Add a small delay to ensure DOM elements are fully rendered
    const timeoutId = setTimeout(() => {
      console.log('Starte Animation', {
        bgRef: bgRef.current,
        outlineLogoRef: outlineLogoRef.current,
        solidLogoRef: solidLogoRef.current
      });
      // Check if all refs are available
      if (!bgRef.current || !outlineLogoRef.current || !solidLogoRef.current) {
        console.warn('Logo refs not available, skipping animation')
        return
      }

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
          console.log('Solid Logo eingeblendet, setze showImage in 2s');
          setTimeout(() => {
            setShowImage(true)
            // Start stats animation after profile image is shown
            setTimeout(() => {
              setShowStats(true)
              startYearsCount()
              startProjectsCount()
              startHoursCount()
            }, 500)
          }, 2000)
        }
      })

      // Cleanup function
      return () => {
        tl.kill()
      }
    }, 100) // Small delay to ensure DOM is ready

    // Cleanup timeout on unmount
    return () => {
      clearTimeout(timeoutId)
    }
  }, [startYearsCount, startProjectsCount, startHoursCount]);

  console.log('showImage:', showImage);

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
                stroke="#00F050"
                strokeWidth="2"
                d="M150.52,166.61l149.81,175.32-84.75-3.51-127.7-153.41,8.54,148.48-67-2.77L10.09-5.46l67,2.78,8.6,149.43L196.24,2.25l80.97,3.36-126.7,161ZM86.79,182.26l129.18,155.21,82.28,3.41-148.96-174.33L275.26,6.48l-78.51-3.25-111.85,146.2L76.21-1.76,11.09-4.45l19.23,334.24,65.11,2.7-8.64-150.22"
              />
            </g>
          </svg>
        </>
      ) : (
        <div className="profile-card">
          <div className="profile-image-container">
            <img src={ProfileImage} alt="Kaser Mahmood" />
          </div>
          {showStats && (
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">+{yearsCount}</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+{projectsCount}</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+{hoursCount}k</div>
                <div className="stat-label">Hours Worked</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Logo