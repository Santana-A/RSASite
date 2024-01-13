import React, {useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavBtn, NavBtnLink } from '../Navbar/NavbarElements'
import { AlgorithmsH1 } from '../Algorithms/AlgorithmsElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link'
import '../../index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* global BigInt */

const EncryptPage = () => {
    var isCoprime = require('is-coprime');
    

    //Nav bar states
    const [scrollNav, setScrollNav] = useState(false)
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    //form states
    const formArray = [1,2,3,4,5];
    const [formNo, setFormNo] = useState(formArray[0])
    const [state, setState] = useState({
        p: '',
        q: '',
        e: '',
        cipher: '',
        plain: '',

    })

    //set value of n, totient of n, and d
    const [n, setN] = useState(0)
    const [totient, setTotient] = useState(0)
    const [d, setD] = useState('')

    //Check toggle button 
    const [isSelected, setIsSelected] = useState(true)

    //array of coprimes
    const [coprimes, setCoprimes] = useState([]);

    //set plaintext and ciphertext
    const [plaintext, setPlaintext] = useState('')
    const [ciphertext, setCiphertext] = useState('')

    //Handle input field data
    const inputHandle = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.value
        })
      }

    

    //Find all possible e's
    const findCoprimes = totientn => {
        for (let i = 2; i < totientn; i++){
            if(isCoprime(totientn, i)){
                coprimes.push(i)
            }
        }
    }

    //Check if number is prime
    const isPrime = num => {
        for(let i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
    }

    //calculate d given some e
    const calcD = (e, totientn)=> {
        for( let i = 1; i < totientn; i++){
            if (((e%totientn) * (i%totientn)) % totientn === 1){
                return i;
            }
        }
    }

    //encrypt message
    const encryptMes = (M, numE, numN) => {
        return Math.pow(parseInt(M), parseInt(numE)) % parseInt(numN)
    }

    //decrypt message
    const decryptMes = (base, expo, n) => {
        var mes = (BigInt(base) ** BigInt(expo))
        return BigInt(mes) % BigInt(n)
    }
    //Send error message if form input is empty
    const next = () => {
        if (formNo === 1 && state.p && state.q && !isNaN(state.p) && !isNaN(state.q) && isPrime(parseInt(state.p, 10)) && isPrime(parseInt(state.q, 10))){
            setFormNo(formNo + 1)
            let numP = parseInt(state.p)
            let numQ = parseInt(state.q)
            setN(numP * numQ)
            setTotient((numP-1) * (numQ-1))
            findCoprimes((numP-1) * (numQ-1))
        } else if (formNo === 2 && state.e && !isNaN(state.e)){
            setFormNo(formNo + 1)
            setD(calcD(parseInt(state.e), totient))

        } else if (formNo === 3){
            setFormNo(formNo+1)
        }else if (formNo === 1 && (!state.p || !state.q)){
            toast.error('Please fill in all input fields')
        } else if (formNo === 2 && (!state.d || !state.e)){
            toast.error('Please fill in all input fields')
        } else if (formNo === 1 && (!isPrime(parseInt(state.p, 10)) || !isPrime(parseInt(state.q, 10)))){
            toast.error('Please enter a prime number')
        }
        else{
            toast.error('Please enter a number in all input fields')
        }
    }

    //Handle final submit errors 
    const finalSubmit = () => {
        if (isSelected && state.plain && !isNaN(state.plain)) {
            setCiphertext(encryptMes(state.plain, state.e, n))
            setFormNo(formNo + 1)
            toast.success('Message Successfully Encrypted')
        } else if (!isSelected && state.cipher && !isNaN(state.cipher)) {
            var base = BigInt(state.cipher)
            var expo = BigInt(d)
            var mod = BigInt(n)
            
            // var mes = 179n ** 55n
            setPlaintext(parseInt(decryptMes(base, expo, mod)))
            console.log(plaintext)
            setFormNo(formNo + 1)
            toast.success('Message Successfully Decrypted')
        } else if ((isSelected && state.plain) || (!isSelected && !state.cipher)) {
          toast.error('Please enter a message')
        } else {
            toast.error('Please enter a numeric message')
        }
      }

    const prev = () => {
        if (formNo === 2){
            setFormNo(formNo -1)
            setCoprimes([])
        }else{
            setFormNo(formNo -1)
        }
        
    }

    const changeNav = () => {
        if (window.scrollY >= 160) {
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(()=>{
        //call your increment function here
    },[d]) 

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
    const toggleHover = () => {
        setHover(!hover)
    };

    const toggleHover2 = () => {
        setHover2(!hover2)
    };

    const toggleHover3 = () => {
        setHover3(!hover3)
    };

    const NavLink1 = {
    // color: #fff;
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0 1rem',
    height: '100%',
    cursor: 'pointer',
    borderBottom: hover ? '4px solid #79bde7' : 'none'
    }

    const NavLink2 = {
        // color: #fff;
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        padding: '0 1rem',
        height: '100%',
        cursor: 'pointer',
        borderBottom: hover2 ? '4px solid #79bde7' : 'none'
    }

    const NavLink3 = {
        // color: #fff;
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        padding: '0 1rem',
        height: '100%',
        cursor: 'pointer',
        borderBottom: hover3 ? '4px solid #79bde7' : 'none'
    }

    
  return (
    <>
    <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>RSA</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <Link to='/#background' style={NavLink1} onMouseEnter={toggleHover} onMouseLeave={toggleHover} smooth={true} duration={500} spy={true} exact='true' offset={-100} activeClass="active">Background</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/#algorithm' style={NavLink2} onMouseEnter={toggleHover2} onMouseLeave={toggleHover2} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Algorithm</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/#application' style={NavLink3} onMouseEnter={toggleHover3} onMouseLeave={toggleHover3} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Applications</Link>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/encrypt' onClick={() => window.location.reload(false)}>Encryption</NavBtnLink>
                </NavBtn>
                
            </NavbarContainer>
        </Nav>
        <>
        </>
        <div className='w-screen h-screen bg-sky-300 flex flex-col justify-center items-center'>
            <AlgorithmsH1>RSA Encryption and Decryption</AlgorithmsH1>
            <ToastContainer />
            <div className='card w-[500px] rounded-md shadow-md bg-white p-5'>
                <div className='flex justify-center items-center'>
                    {
                        formArray.map((v,i)=>
                        <>
                        <div className={`w-[35px] my-3 text-white rounded-full ${ formNo-1 === i || formNo-1 === i+1 || formNo-1 === i+2 || formNo-1 === i+3 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] bg-blue-500 flex justify-center items-center`}>
                            {v}
                        </div>
                        {
                            i !== formArray.length -1 && <div className={`w-[85px] h-[2px] ${formNo === i+2 || formNo === formArray.length? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                        }
                        </>)
                    }
                </div>
                {
                    formNo === 1 && <div>
                        <h1 class='text-xl text-center'>Key Generation</h1>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='p'>Prime Number p </label>
                            <input value={state.p} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='p' placeholder='prime number' id='p' />
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='q'>Prime Number q </label>
                            <input value={state.q} onChange={inputHandle}  className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='q' placeholder='prime number' id='q' />
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }

                {
                    formNo === 2 && <div>
                        <h1 class='text-xl text-center'>Key Generation</h1>
                        <h2 class='text-lg text-center'>n = p * q = {n}</h2>
                        <h2 class='text-lg text-center'>φ(n) = (p-1) (q-1) = {totient} </h2>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='e'>Choose an e</label>
                            <select value={state.e} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='e' placeholder='1 < e < φ(n)' id='e'> 
                            <option disabled={true} value="">1 {'<'} e {'<'} φ(n)</option>
                            {
                                coprimes.map(opt=><option>{opt}</option>)
                            }
                            </select>
                        </div>
                        <div className='mt-4 flex gap-3 justify-center items-center'>
                            <button onClick={prev} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }
                {
                    formNo === 3 && <div>
                        <h1 class='text-xl text-center'>Key Generation</h1>
                        <h2 class='text-lg text-center'>n = p * q = {n}</h2>
                        <h2 class='text-lg text-center'>φ(n) = (p-1) (q-1) = {totient} </h2>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='e'>Your selected e is: </label>
                            <input disabled={true} value={state.e} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='d' placeholder='ed mod φ(n) = 1' id='d' />
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='d'>Given the chosen e, d is equal to: </label>
                            <input disabled={true} value={d} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='d' placeholder='ed mod φ(n) = 1' id='d' />
                            <h2 class='text-base text-left'>* ed mod φ(n) = 1</h2>
                        </div>
                        <div className='mt-4 flex gap-3 justify-center items-center'>
                            <button onClick={prev} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }


                {
                    formNo === 4 && <div>
                        <div className='py-2'>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div onClick={()=> setIsSelected(!isSelected)} class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{isSelected ? 'Encryption' : 'Decryption'}</span>
                        </label>
                        </div>
                        <h1 class='text-xl text-center'>Enter a message in numeric form</h1>
                        
                            {isSelected ? (<div className='flex flex-col mb-2'>
                                <label htmlFor='plain'>Plaintext to be encrypted</label>
                                <input value={state.plain} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='plain' placeholder='Plaintext' id='plain' />
                            </div>) 
                            : (<div className='flex flex-col mb-2'>
                                <label htmlFor='cipher'>Ciphertext to be decrypted</label>
                                <input value={state.cipher} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='cipher' placeholder='Ciphertext' id='cipher' />
                            </div>)}
                            
    
                        <div className='mt-4 flex gap-3 justify-center items-center'>
                            <button onClick={prev} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                            <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
                        </div>
                    </div>
                }

{
                    formNo === 5 && <div>
                        
                        {isSelected ? 
                        (
                        <>
                        <h1 class='text-xl text-center'>Your Encrypted Message</h1>
                        <div className='flex flex-col mb-2'>
                            <input value={ciphertext} disabled={true} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='plain' placeholder='Plaintext' id='plain' />
                        </div>
                        </>
                        ) : 
                        (
                        <>
                        <h1 class='text-xl text-center'>Your Decrypted Message</h1>
                        <div className='flex flex-col mb-2'>
                            <input value={plaintext} disabled={true} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type='text' name='plain' placeholder='Plaintext' id='cipher' />
                        </div>
                        </>
                        )

                        }
                        
                        <div className='mt-4 flex gap-3 justify-center items-center'>
                            <button onClick={prev} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                            <button onClick={() => window.location.reload(false)} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Restart</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default EncryptPage
