import World from "./World";
import styles from "./Hello.module.css";
const Hello = () => {
    return (
        <>
            <p>Hello</p>
            <World/>
            <div className = {styles.box}>hellobox</div>
        </>

    );
}

export default Hello;