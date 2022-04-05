import Child from './child.js';
import TimerComponent from './timer';

function Basic(){
    const text = "hey~!";
    const sayHello = function(){
        return <h3>love you</h3>;
    }
    const sayHello1 = function(){
        alert('hi~');
    }
    return(
        <div>
            <h1>good</h1>
            <h2>{text}</h2>
            {sayHello()}
            <Child name="Kevin" age={27}/>
            <div onClick = {function () {
                alert('no way~');
                {sayHello1()}
            }}>
            <p>Click</p>
            </div>
            <TimerComponent />
        </div>
    );
}

export default Basic;