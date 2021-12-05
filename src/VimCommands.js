const VimCommands = ({command}) => {
    return (
        <div className="vim-line">
            <p className="vim-comment">"{command.comment}</p>
            <p>
                <span className="command-mode">{command.mode} </span> 
                <span className="command-keybind">{ command.keybind } </span>
                <span className="command-command">{command.command} </span> 
                <span className="delete-line">X</span>
            </p>
        </div>
    );
}

export default VimCommands;

