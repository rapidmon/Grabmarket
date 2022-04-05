function Child(props){
    const {name, age} = props;
    return (
    <div>
        <p>
            Hello~ I'm {name} and I'm {age}!
        </p>
    </div>
    )
}

export default Child;