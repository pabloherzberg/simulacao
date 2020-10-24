import React, {useState} from 'react';

import Details from './Details'
import Table from './Table'

import { Wrapper } from './style';

function Prontuarios() {

  const [selectedPerson, setSelectedPerson] = useState(false)
  const [selectedKey, setSelectedKey] = useState(0)


  return(
    <Wrapper>
        <Details selectKey={selectedKey} selected={selectedPerson} />
        <Table setSelectedKey={setSelectedKey} select={setSelectedPerson}/>
    </Wrapper>
  )
}

export default Prontuarios;