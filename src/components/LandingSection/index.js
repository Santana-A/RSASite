import React, {useState} from 'react'
import Video from '../video/video.mp4'
import { LandingContainer, LandingBg, VideoBg, LandingContent, LandingH1, LandingP, LandingBtnWrapper, ArrowForward, ArrowRight, ButtonL, ButtonR} from './LandingElements'

const LandingSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <LandingContainer>
        <LandingBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </LandingBg>
        <LandingContent>
            <LandingH1>RSA:</LandingH1>
            <LandingP>Public-Key Cryptosystem</LandingP>
            <LandingBtnWrapper>
                <ButtonL to='background' smooth={true} duration={500} spy={true} exact='true' offset={-80}  onMouseEnter={onHover} 
                onMouseLeave={onHover}
                >
                    Learn More {hover ? <ArrowForward /> : <ArrowRight /> }
                </ButtonL>
                <ButtonR to='/encrypt' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Start Encrypting {hover ? <ArrowForward /> : <ArrowRight /> }
                </ButtonR>
            </LandingBtnWrapper>
        </LandingContent>
    </LandingContainer>
  )
}

export default LandingSection
