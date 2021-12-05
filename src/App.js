import React, {useState} from 'react';
import './App.css';
import UserEntry from './UserEntry.js'
import MockVimrc from './MockVimrc.js'

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
    
    const inputChecker = () => {
    //check that the input entered by the user is valid
        console.log('Hello');
        return(true);
    }

    const onCommandSubmition = (newCommandData) => {
        setCommandData((prevCommandData) => {
            return [newCommandData, ...prevCommandData];
        });
    }

  return (
    <div className="App">
        <UserEntry onCommandSubmition={onCommandSubmition} inputChecker={inputChecker}/>
        <MockVimrc commandData={commandData} />
    </div>
  );
}

export default App;
