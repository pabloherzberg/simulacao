import React, {useState} from 'react';

import Details from './Details'
import Table from './Table'

import { Wrapper } from './style';

function Prontuarios() {

  const [selectedPerson, setSelectedPerson] = useState(false)
  const [selectedKey, setSelectedKey] = useState(0)
  const [length, setLength] = useState(0)
  const [newPerson, setNewPerson] = useState(false)

  console.log(newPerson)
  

  return(
    <Wrapper>
        <Details length={length} newPerson={newPerson} selectKey={selectedKey} selected={selectedPerson} />
        <Table length={length} setLength={setLength} setNewPerson={setNewPerson} setSelectedKey={setSelectedKey} select={setSelectedPerson}/>
    </Wrapper>
  )
}

export default Prontuarios;