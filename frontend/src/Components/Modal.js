import ReactDom from 'react-dom';
import { useRef } from 'react'
import '../Css/modal-styles.css'
const Modal = ({ heading, children, active, setActive }) => {
    const ModalRef = useRef()
    const closeModal = (e) => {
        e.stopPropagation()
        setActive(false)
    }
    const toggleOn = () => {
        ModalRef.current.style.display = 'flex';
    }
    const toggleOn1 = () => {
        ModalRef.current.style.opacity = "1";
    }
    const toggleOff = () => {
        if (ModalRef.current){
            ModalRef.current.style.opacity = "0";  
        }
    }
    const toggleOff1 = () => {
        if (ModalRef.current){
            ModalRef.current.style.display = 'none';
        }
    }
    
    return ReactDom.createPortal(
        <div className={`Modal-backdrop`} ref={ModalRef}>
            <div style={{display: 'none'}}>{active ? toggleOn() : toggleOff()}
            {active ? setTimeout(toggleOn1, 30) : setTimeout(toggleOff1, 200)}</div>
           <div className="mumble-Modal" onClick={(e) => e.stopPropagation()}>
                <div className="Modal-header">
                    <h4>{heading}</h4>
                    <div className="close-Modal" style={{position: 'absolute', top: '0', right: '0', cursor: 'pointer', padding: '5px'}} onClick={closeModal}><i className="fa fa-times" aria-hidden="true" style={{fontSize: '16px'}}/></div>
                </div>
                <div className="line-break"></div>
                <div className="Modal-content">
                   {children}
                </div>
           </div>
       </div>,
        document.getElementById('modal')
    )
}
export default Modal