export const homeObjOne = {
    id: 'background',
    lightBg: true,
    lightText: false,
    lightTextTop: true,
    lightTextDesc: true,
    topLine: 'RSA (Rivest–Shamir–Adleman)', 
    headline: 'Background', 
    description: 'RSA, named after its creators Ron Rivest, Adi Shamir and Leonard Adleman, is a public-key cryptosystem that was developed in 1977. The RSA cryptosystem is composed of three algorithms used for key generation, encryption, and decryption. As with other public-key cryptosystems, a public and private key are generated when using RSA for encrypting and decrypting, respectively. The public key is the product of two large prime numbers.  As its name suggests, the public key is public and is known by everyone. However, the two numbers used to generate it are not public. Thus, the difficulty associated with factoring large numbers is what provides security for the RSA cryptosystem.',
    imgStart: false,
    img: require('../images/rsa-creators.jpeg'),
    alt: 'Rivest, Shamir, and Adleman',
    dark: true,
    primary:  true,
    darkText: true
};

export const homeObjTwo = {
    id: 'application',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'RSA (Rivest–Shamir–Adleman)', 
    headline: 'Applications', 
    description: 'RSA encryption and decryption is most often used in secure communication protocols such as HTTPS (Hypertext Transfer Protocol Secure). In HTTPS, the server that your browser is requesting a connection to has a public and private key.  The server sends you its public key which your browser then uses to encrypt the session key it generated. The encrypted session key is then shared with the server. The server then decrypts the session key using its private key establishing a secure connection. RSA is also used for assigning digital signatures. In this case, the owner of the private key named Alice first encrypts a cryptographic hash value of her message using the private key to create a digital signature. Alice then sends Bob the original message along with the digital signature. Once Bob receives the message, he generates the cryptographic hash value for the message and decrypts the hash value using Alice’s public key. If the message has not been altered, the hash value generated from the message and the decrypted digital signature should be the same.',
    imgStart: false,
    img: require('../images/https3.png'),
    alt: 'https',
    dark: true,
    primary:  true,
    darkText: true
};