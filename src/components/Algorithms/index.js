import React from 'react'
import Icon1 from '../images/ppkey.png'
import Icon2 from '../images/encrypt.png'
import Icon3 from '../images/decrypt3.png'

import { AlgorithmsContainer, AlgorithmsCard, AlgorithmsWrapper, AlgorithmsIcon, AlgorithmsH1, AlgorithmsH2, AlgorithmsP } from './AlgorithmsElements'

const Algorithms = () => {
  return (
    <AlgorithmsContainer id ='algorithm'>
        <AlgorithmsH1>Algorithms</AlgorithmsH1>
        <AlgorithmsWrapper>
            <AlgorithmsCard>
                <AlgorithmsIcon src={Icon1}/>
                <AlgorithmsH2>Key Generation</AlgorithmsH2>
                <AlgorithmsP>Choose two prime numbers p and q. Calculate modulus n such that n = pq. Calculate Euler’s totient of modulus n (φ(n) = (p-1)(q-1)). Choose public key e such that 1 {'<'} e {'<'} φ(n) and e is relatively prime to φ(n). Calculate private key d such that  ed mod φ(n) = 1. </AlgorithmsP>
            </AlgorithmsCard>
            <AlgorithmsCard>
                <AlgorithmsIcon src= {Icon2} />
                <AlgorithmsH2>Encryption</AlgorithmsH2>
                <AlgorithmsP>Treating the plaintext, M, as a number and assuming that M is less than n. C = M<sup>e</sup> mod n where C is the ciphertext.</AlgorithmsP>
            </AlgorithmsCard>
            <AlgorithmsCard>
                <AlgorithmsIcon src= {Icon3} />
                <AlgorithmsH2>Decryption</AlgorithmsH2>
                <AlgorithmsP>Treating the ciphertext, C, as a number. M = C<sup>d</sup> mod n where M is the plaintext.</AlgorithmsP>
            </AlgorithmsCard>
        </AlgorithmsWrapper>
    </AlgorithmsContainer>

    
  )
}

export default Algorithms
