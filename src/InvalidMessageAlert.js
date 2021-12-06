

const InvalidMessage = ({invalidMessage, invalidMessageOkay}) => {

    return (
        <div className="invalid-message" onClick={invalidMessageOkay}>
        <div className="invalid-message-box">
            <div className="invalid-message-header">
                <div>Invalid input</div>
            </div>
            <div className="invalid-message-text">
                <p>{invalidMessage}</p> 
                <button onClick={invalidMessageOkay}>Okay</button>
            </div>  
        </div>
        </div>
    );
}

export default InvalidMessage;

