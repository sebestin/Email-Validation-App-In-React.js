import classes from './Home.module.css';
import Card from '../UI/Card/Card';
const Home =(props) =>
{
    return(
        <Card className={classes.home}>
            <h1>Welcome Back..!!!</h1>
        </Card>
    )
}

export default Home;