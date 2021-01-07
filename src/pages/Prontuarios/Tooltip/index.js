import React from 'react';

import { Container } from './styles';

function Tooltip({selected}) {
  return (
      selected? <Container >
          <div id='wrapper'>
                <div>fechar</div>
                <ul>           
                    {selected && Object.entries(selected).map(item=>
                    item[0]==='prontuarios'?"":
                    item[0]==='status'?
                    (
                        <li>
                        <span>Status: </span>
                        <span>{item[1]?'Em baixa fonoaudiológica': 'Em alta fonoaudiológica'}</span>
                        </li>
                    ):
                    item[0]==='observacoes'?
                    (
                        <li>
                        <span>{item[0]}: </span>
                        <mark>{item[1].toUpperCase()}</mark>
                    </li>
                    ):
                    (<li>
                        <span>{item[0]}: </span>
                            <span>{item[1]}</span>
                    </li>)
                    )}
        
                </ul>
        </div>
    </Container>:'');
}

export default Tooltip;