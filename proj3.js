const body=document.querySelector('body')
const input=document.querySelector('#note');
const button=document.querySelector('#button');
const cards=document.getElementById('cards');
const noteTitle=document.querySelector('#noteTitle')

localStorage.getItem('cards')
button.addEventListener('click', (e)=>{
    
    e.preventDefault();
    if(input.value=='' || noteTitle.value==''){
        alert('Please do not create an empty note')
    }else{
    const cardsAlign=document.createElement('div')
    cardsAlign.className='col-4 float-sm-start'
    const div=document.createElement('div');
    div.className='card mt-3 mb-3';
    div.style="width: 18rem;";
    const div2=document.createElement('div');
    div2.className='card-body';
    const title=document.createElement('h5');
    title.innerText=noteTitle.value
    title.className='card-title';
    const parg=document.createElement('p');
    parg.innerText=input.value
    parg.className='card-text';
    parg.classList.add('content')
    parg.setAttribute('readonly','readonly');
    const cardButton=document.createElement('button');
    cardButton.innerText='Read more'
    cardButton.className='btn btn-primary';
    

    const editButton=document.createElement('button');
    editButton.innerText='edit'
    editButton.className='btn btn-primary ms-2';

    const deleteButton=document.createElement('button');
    deleteButton.innerText='delete'
    deleteButton.className='btn btn-danger ms-2';

    div2.appendChild(title);
    div2.appendChild(parg);
    div2.appendChild(cardButton);
    div2.appendChild(editButton);
    div2.appendChild(deleteButton);

    div.appendChild(div2);

    cardsAlign.appendChild(div);
    cards.appendChild(cardsAlign);

    


    
    const div1=document.createElement('div')
    div1.classList.add('popUp')
    const divChild1=document.createElement('div')
    divChild1.classList.add('popUp-header')
    const divChild2=document.createElement('div')
    divChild2.classList.add('popUp-body')
    // divChild2.style='display:flex'
    const h3=document.createElement('h3')
    h3.classList.add('header')
    h3.innerText='Note'
    const h3Button=document.createElement('button')
    h3Button.classList.add('closing-button')
    h3Button.innerText='x'
    const textArea=document.createElement('textarea')
    textArea.cols='50'
    textArea.rows='6'
    const textAreaButton=document.createElement('button')
    textAreaButton.className='btn btn-primary btn-sm ms-5 mb-3'
    textAreaButton.innerText='save'
    textAreaButton.style='position: absolute; top: 80%; left: 38%;'
    const overlayDiv=document.createElement('div')
    overlayDiv.classList.add('overlay')

    divChild1.appendChild(h3)
    divChild1.appendChild(h3Button)
    divChild2.appendChild(textArea)
    divChild2.appendChild(textAreaButton)
    div1.appendChild(divChild1)
    div1.appendChild(divChild2)

    body.appendChild(div1)
    body.appendChild(overlayDiv)

    localStorage.setItem('cards',input.value);

    cardButton.addEventListener('click',function(e){
    textArea.setAttribute('readonly','readonly')
    textArea.value=parg.innerText;
    div1.classList.add('active')
    overlayDiv.classList.add('active')
        
    })

    h3Button.addEventListener('click',function(){
        div1.classList.remove('active')
        overlayDiv.classList.remove('active')
    })

    overlayDiv.addEventListener('click',function(){
        div1.classList.remove('active')
        overlayDiv.classList.remove('active')
    })

    editButton.addEventListener('click',function(){
        textArea.value=parg.innerText;
        div1.classList.add('active')
        overlayDiv.classList.add('active')
        textArea.removeAttribute('readonly')

        textAreaButton.addEventListener('click',function(){
            div1.classList.remove('active')
            overlayDiv.classList.remove('active')
            parg.innerText=textArea.value
        })
    })
        


    deleteButton.addEventListener('click',function(e){
        cards.removeChild(cardsAlign)
    })



    input.value=''
    noteTitle.value=''
    }  
})









