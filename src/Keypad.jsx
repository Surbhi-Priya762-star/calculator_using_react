import Button from "./Button";


const Keypad = (props) => {

    const key=[7,8,9,"/",4,5,6,"*",1,2,3,"-",0,".","+","="];
    return ( 
        <div className='keypad'>
            {key.map((item)=>{ return<Button {...props} key={item} value={item}/>})}
           
        </div>
     );
}
 
export default Keypad;