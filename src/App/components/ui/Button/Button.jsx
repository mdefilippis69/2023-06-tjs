import React, {useState , useEffect} from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    const [isClicked, setIsClicked] = useState(false);
    useEffect(()=> {
        if(isClicked) {
            setTimeout(()=>{
                setIsClicked(false)
            }, 4000)
        }  
        
    }, [isClicked])
    /*console.log(props)*/
    return (
    <button type={props.type}
            className={`${style.Button} btn${
                undefined!==props.className ? ' ' + props.className : ''
            }${true === isClicked ? ' '+ style.clicked : ''}`}
            onClick={(evt)=>{
                setIsClicked(true)
                if(undefined!==props.onClick && typeof props.onClick === 'function') {
                    props.onClick('click');
                }
                }
            }>
        {props.children}
    </button>);
}

Button.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.oneOf(['primary', 'error'])
}

Button.defaultProps={
    type:'button',
    onClick: ()=>{console.log('default')}
}
export default Button;