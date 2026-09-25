export function interactionType(question){
  return question?.interactionType || 'choice';
}

export function renderInteraction(question,container,onAnswer){
  if(!container)throw new Error('Interaction container is required');
  container.innerHTML='';
  const type=interactionType(question);
  if(type!=='choice'){
    throw new Error(`Unsupported interaction type: ${type}`);
  }
  for(const [index,choice] of (question.choices||[]).entries()){
    const button=document.createElement('button');
    button.className='answer';
    button.dataset.choiceLabel=String.fromCharCode(65+index);
    button.textContent=choice;
    button.addEventListener('click',()=>onAnswer(choice,button));
    container.appendChild(button);
  }
  return type;
}
