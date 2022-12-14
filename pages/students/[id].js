import styles from '../../styles/Student.module.css';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { user: data }
    }
}

const Details = ({ user }) => {
    return ( 
        <div>
            <h1>Name: {user.name }</h1>
            <p className={styles.text}>Email: { user.email }</p>
            <p className={styles.text}>Website: { user.website }</p>
            <p className={styles.text}>Phone: { user.phone }</p>
            <p className={styles.text}>City: { user.address.city }</p>
        </div>
     );
}
 
export default Details;