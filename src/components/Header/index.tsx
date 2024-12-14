import styles from './styles.module.css';
import link from 'next/link'

export function Header(){
    return(
        <header className={styles.header}> 
            <section className={styles.content}>
                <nav className={styles.nav}>

                    
                    <h1>Tarefas+</h1>
                    
                </nav>
            </section>
        </header>
    );
}