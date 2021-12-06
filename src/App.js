import React, {useState} from 'react';
import './App.css';
import UserEntry from './UserEntry.js'
import MockVimrc from './MockVimrc.js'
import InvalidMessageAlert from './InvalidMessageAlert.js'

    const exampleCommandData = [
    {
            id: 'e1',
            mode: 'nnoremap',
            keybind: '<Space>sr',
            command: ':%s//g<Left><Left>',
            comment: 'Search and replace'
    },
    {
            id: 'e2',
            mode: 'inoremap',
            keybind: '<Tab>',
            command: '<C-P>',
            comment: 'Auto Complete set to Tab'
    }
    ];

function App() {

    const [commandData, setCommandData] = useState(exampleCommandData);
    const [invalidMessage, setInvalidMessage] = useState('');
    
    const inputChecker = (newCommandData) => {
    //check that the input entered by the user is valid
        if ( newCommandData.keybind.includes(' '))
        {
            setInvalidMessage('Can not include a space in your keybinds. please use <Space> instead.');
            return(false);
        }
        if ( newCommandData.command.includes(' '))
        {
            setInvalidMessage('Can not include a space in your command');
            return(false);
        }
        console.log('No space');
            setInvalidMessage('');
        return(true);
    }

    const onCommandSubmition = (newCommandData) => {
        setCommandData((prevCommandData) => {
            return [newCommandData, ...prevCommandData];
        });
    }

    const invalidMessageOkay = () => {
        setInvalidMessage('');
    }


  return (
    <div className="App">
        <UserEntry onCommandSubmition={onCommandSubmition} inputChecker={inputChecker}/>
        <MockVimrc commandData={commandData} />
        {invalidMessage.length > 0 &&   <InvalidMessageAlert invalidMessage={invalidMessage} invalidMessageOkay={invalidMessageOkay}/> }
    </div>
  );
}

export default App;
