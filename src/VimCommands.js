const VimCommands = ({command, commandIndex}) => {
    return (
        <div className="vim-line">
            <p>
                <span>{(commandIndex * 2) + 1} </span>
                <span className="vim-comment">"{command.comment}</span>
            </p>
            <p>
                <span>{(commandIndex * 2 ) + 2} </span>
                <span className="command-mode">{command.mode} </span> 
                <span className="command-keybind">{ command.keybind } </span>
                <span className="command-command">{command.command} </span> 
                <span className="delete-line">X</span>
            </p>
        </div>
    );
}

export default VimCommands;

