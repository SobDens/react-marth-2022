function Character(props){
    const {name,desc,picture}=props;
    return(
        <div>
            <h2>{name}</h2>
            <p> {desc}</p>
            <img src={picture} alt=""/>
        </div>
    )
}

export default Character;