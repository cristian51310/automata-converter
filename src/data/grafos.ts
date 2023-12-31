export const grafoOriginal = `
  digraph { 
    node [shape = circle]
    rankdir=RL;

    inicio [style = invis] 
    inicio -> q0 
    q0 -> q0 [label="0"]; 
    q0 -> q1 [label="0"]; 
    q0 -> q0 [label="1"]; 
    q1 -> q2 [label="0"]; 
    q1 -> q0 [label="1"]; 
    q1 -> q2 [label="1"]; 

    q2 [shape = doublecircle] 
  } 
`

export const grafoResultante = `
  digraph { 
    node [shape = circle] 
    rankdir=RL; 

    inicio [style = invis] 
    inicio -> q0 
    q0 -> q0 [label="0"]; 
    q0 -> q1 [label="0"]; 
    q0 -> q0 [label="1"]; 
    q1 -> q2 [label="0"]; 
    q1 -> q0 [label="1"]; 
    q1 -> q2 [label="1"]; 
    q0q1 -> q0 [label="0"]; 
    q0q1 -> q1 [label="0"]; 
    q0q1 -> q2 [label="0"]; 
    q0q1 -> q0 [label="1"]; 
    q0q1 -> q2 [label="1"]; 
    q0q2 -> q0 [label="0"]; 
    q0q2 -> q1 [label="0"]; 
    q0q2 -> q0 [label="1"]; 
    q1q2 -> q2 [label="0"]; 
    q1q2 -> q0 [label="1"]; 
    q1q2 -> q2 [label="1"]; 
    q0q1q2 -> q0 [label="0"]; 
    q0q1q2 -> q1 [label="0"]; 
    q0q1q2 -> q2 [label="0"]; 
    q0q1q2 -> q0 [label="1"]; 
    q0q1q2 -> q2 [label="1"]; 
    q2 [shape = doublecircle] 
  }
`