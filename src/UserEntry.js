import React, {useState} from 'react';


const UserEntry = ({onCommandSubmition, inputChecker}) => {

    const [enteredMode, setEnteredMode] = useState('');
    const [enteredKeybind, setEnteredKeybind] = useState('');
    const [enteredCommand, setEnteredCommand] = useState('');
    const [enteredComment, setEnteredComment] = useState('');

    const keybindHandler = (e) => {
        setEnteredKeybind(e.target.value);
    };
        
    const commandHandler = (e) => {
        setEnteredCommand(e.target.value);
    }

    const modeHandler = (e) => {
        setEnteredMode(e.target.value);
    }

    const commentHandler = (e) => {
        setEnteredComment(e.target.value);
    }

    const cancelHandler = (e) => {
        setEnteredCommand('');
        setEnteredKeybind('');
        setEnteredMode('');
        setEnteredComment('');
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const newCommandData = {
            id: Math.random().toString(),
            mode: enteredMode,
            keybind: enteredKeybind,
            command: enteredCommand,
            comment: enteredComment
        }

        if ( inputChecker(newCommandData) ) {
            onCommandSubmition(newCommandData);
        };
        setEnteredCommand('');
        setEnteredKeybind('');
        setEnteredMode('');
        setEnteredComment('');
    }

    return (
        <div className="user-entry">
            <form className="user-entry-form" onSubmit={submitHandler}>
                <div>Editor Mode: </div>
                <select value={enteredMode} onChange={modeHandler}>
                    <option value="nnoremap">Normal</option>
                    <option value="xnoremap">Visual</option>
                    <option value="inoremap">Insert</option>
                    <option value=":command">Command</option>
                </select>
                <div>Shortcut Keybind: </div>
                <input
                    value={enteredKeybind}
                    type='text'
                    onChange={keybindHandler}
                />
                <div>Vim Command to be executed: </div>
                <input
                    value={enteredCommand}
                    type='text'
                    onChange={commandHandler}
                />
                <div>Vimrc comment</div>
                <input
                    value={enteredComment}
                    type='text'
                    onChange={commentHandler}
                />
                <button type="button" onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Command</button>
            </form>
        </div>
    );
}

export default UserEntry;

