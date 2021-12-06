import VimCommands from './VimCommands.js'


const MockVimrc = ({ commandData }) => {


    return (
        <ul className="vim-wrapper">
            {commandData.map( (command, index) =>
                <VimCommands key={command.id} command={command} commandIndex={index}/>
            )}
        </ul>
    );
}

export default MockVimrc;

