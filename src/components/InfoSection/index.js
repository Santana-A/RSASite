import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, lightText, darkText, id, imgStart, topLine, headline, description, img, alt, lightTextTop}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart} >
                    <Column1>
                        <TextWrapper>
                            <TopLine lightTextTop = {lightTextTop}>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
