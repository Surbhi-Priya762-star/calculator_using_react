

const Button = (props) => {

    return ( 
    <button className={`button ${props.value === '=' ? 'equal' : ""}`}
       onClick={() => props.handleClick(props.value)} >
        
        
        {props.value}
        </button> 
        );
};
 
export default Button;