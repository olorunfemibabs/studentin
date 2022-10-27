import Link from 'next/link'
import styles from '../../styles/Student.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {users: data}
    }

}


const Student = ({ users}) => {
    return ( 
        <div>
            <h1>Student Names</h1>
             {users.map(user => (
                <Link href={`/students/${user.id}`} key={user.id} legacyBehavior>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
             ))}
        </div>
     );
}
 
export default Student;