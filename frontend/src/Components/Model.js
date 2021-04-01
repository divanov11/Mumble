import ReactDom from 'react-dom';
import { useRef } from 'react'
import '../Css/model-styles.css'
const Model = ({ heading, children, active, setActive }) => {
    const modelRef = useRef()
    const closeModel = (e) => {
        e.stopPropagation()
        setActive(false)
    }
    return ReactDom.createPortal(
        <div className={`model-backdrop ${active && "active"} ${!active && "inactive"}`} ref={modelRef}>
           <div className="mumble-model" onClick={(e) => e.stopPropagation()}>
                <div className="model-header">
                    <h4>{heading}</h4>
                    <div className="close-model" style={{position: 'absolute', top: '0', right: '0', cursor: 'pointer', padding: '5px'}} onClick={closeModel}><i className="fa fa-times" aria-hidden="true" /></div>
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