const UserEntry = ({onCommandSubmition}) => {

    const [enteredMode, setEnteredMode] = useState('');
    const [enteredKeybind, setEnteredKeybind] = useState('');
    const [enteredCommand, setEnteredCommand] = usestate('');

    const keybindHandler = (e) => {
        setEnteredKeybind(e.target.value);
    };
        
    const commandHandler = (e) => {
        setEnteredCommand(e.target.value);
    }

    const commandHandler = (e) => {
        setEnteredCommand('');
        setEnteredKeybind('');
        setEnteredMode('');
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const commandData = {
            mode: enteredMode,
            keybind: enteredKeybind,
            command: enteredCommand
        }
    }

    return (
        <div className="user-entry">
            <form className="user-entry-form" onSubimit={submitHandler}>
                <select name="mode" id="mode">
                    <option value="Normal">nnoremap</option>
                    <option value="Visual">xnoremap</option>
                    <option value="Insert">inoremap</option>
                    <option value="Command">:command</option>
                </select>
                <input
                    value={keybind}
                    type='text'
                    onChange={keybindHandler}
                />
                <input
                    value={command}
                    type='text'
                    onChange={commandHandler}
                />
                <button type="button" onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Command</button>
            </form>
        </div>
    );
}

export default UserEntry;

