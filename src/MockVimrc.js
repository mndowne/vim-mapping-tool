import VimCommands from './VimCommands.js'


const MockVimrc = ({ commandData }) => {


    return (
        <ul className="vim-wrapper">
            {commandData.map( command =>
                <VimCommands key={command.id} command={command} />
            )}
        </ul>
    );
}

export default MockVimrc;

