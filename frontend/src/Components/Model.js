import ReactDom from 'react-dom';
import { useRef } from 'react'
import '../Css/model-styles.css'
const Model = ({ heading, children, active, setActive }) => {
    const modelRef = useRef()
    const closeModel = (e) => {
        e.stopPropagation()
        setActive(false)
    }
    const toggleOn = () => {
        modelRef.current.style.display = 'flex';
    }
    const toggleOn1 = () => {
        modelRef.current.style.opacity = "1";
    }
    const toggleOff = () => {
        if (modelRef.current){
            modelRef.current.style.opacity = "0";  
        }
    }
    const toggleOff1 = () => {
        if (modelRef.current){
            modelRef.current.style.display = 'none';
        }
    }
    
    return ReactDom.createPortal(
        <div className={`model-backdrop`} ref={modelRef}>
            <div style={{display: 'none'}}>{active ? toggleOn() : toggleOff()}
            {active ? setTimeout(toggleOn1, 30) : setTimeout(toggleOff1, 200)}</div>
           <div className="mumble-model" onClick={(e) => e.stopPropagation()}>
                <div className="model-header">
                    <h4>{heading}</h4>
                    <div className="close-model" style={{position: 'absolute', top: '0', right: '0', cursor: 'pointer', padding: '5px'}} onClick={closeModel}><i className="fa fa-times" aria-hidden="true" style={{fontSize: '16px'}}/></div>
                </div>
                <div className="line-break"></div>
                <div className="model-content">
                   {children}
                </div>
           </div>
       </div>,
        document.getElementById('model')
    )
}
export default Model