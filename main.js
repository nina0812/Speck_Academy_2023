window.addEventListener('load', ()=>{
    technologies=JSON.parse(localStorage.getItem('technologies')) || [];
    const form=document.querySelector('#new-technology-form');
    const input=document.querySelector('#new-technology-input');
    const el=document.querySelector('#technologies');
    const remove=document.querySelector("#remove-technologies");

    //ADDING NEW TECHNOLOGY
    form.addEventListener('submit', (e)=>{
        e.preventDefault(); //stoping from refreshing page
        const technology=input.value;
        
        if(!technology)
        {
            alert("Please add technology in input field!");
            return;
        } 

        const technology_element=document.createElement("div");
        technology_element.classList.add("box");

        technology_element.innerText=technology;

        el.appendChild(technology_element);

        technologies.push(technology);
        localStorage.setItem('technologies', JSON.stringify(technologies));

        console.log("Successfully added technology");

        e.target.reset();
    })

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    
    remove.addEventListener('click', (e)=> {
        const container = document.querySelector('#technologies');
        removeAllChildNodes(container)
    
    })
});

//onemogućeno dodavanje tehnologija pritiskom na tipku enter (dodavanje isključivo pritiskom na botun add)
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});