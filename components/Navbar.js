import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Image src='/logo.png' alt="logo" width={100} height={95} />
        </div>
        <Link href='/' className={styles.btn}>Home</Link>
        <Link href='/about' className={styles.btn}>About</Link>  
        <Link href='/students' className={styles.btn}>Student</Link>
    </nav>
  )
}

export default Navbar