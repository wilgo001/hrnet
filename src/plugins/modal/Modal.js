import { useState } from 'react';
import './Modal.css';

const Modal = (props) => {
    const text = props.text;
    const backgroundClassName = props.classNames.background || '';
    const containerClassName = props.classNames.container || '';
    const textClassName = props.text || '';
    const closeClassName = props.classNames.close || '';
    const closeCallBack = () => props.closeCallBack || {};
    const isOpen = props.isOpen;
    const toggle = props.toggle;

    return(
        isOpen &&
        <div className={"md-background " + backgroundClassName}>
            <div className={"md-container " + containerClassName}>
                <p className={textClassName}>{text}</p>
                <p className={"md-closeBtn " + closeClassName} onClick={(e) => {toggle(); closeCallBack()}}>x</p>
            </div>
        </div>
    )
}

const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return ({ isOpen, toggle});
}

const useCreateModal = ({text, classNames, callBack}) => {
    const { isOpen, toggle } = useToggle();
    const modal = <Modal text={text} classNames={classNames || {}} isOpen={isOpen} toggle={toggle} closeCallBack={callBack}/>
    return ({modal, toggle})
}

export default useCreateModal;