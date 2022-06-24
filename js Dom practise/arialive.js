prophets={
    rasul:{
        title:'rasul',
        description: "who was muhammad? muhammad was he founder and the proclaimer of the Quran, Islam's sacred scripture. He spent his entire life in what is now the country of Saudi Arabia"
    },

    jesus:{
        title:'jesus',
        description:'jesus,also referred to as Jesus of Nazareth or Jesus Christ, was a first-century Jewish preacher and religious leader.'
    },

    moses:{
        title:'moses',
        description:'nyMoses is considered the most important prophet in Judaism and one of the most important prophets in Christianity, Islam, the Druze faith'
    },

    david:{
        title:'david',
        description:'David rules as king of the Israelites until his death at age 70, prior to which he chooses Solomon, a son born to him and Bathsheba, to be his successor instead '
    }
}

const person_name=document.querySelector('#person_name');

const person_description=document.querySelector('#person_description');

function renderPerson(person){
    const selectProphet=document.getElementById('prophets');
    
    const selectedProphet=selectProphet.option[selectProphet.selectedIndex].value;

    if(person in prophets){
        person_name.textContent=prophets[person].title;
        person_description=prophets.[person].description;
    }
        
   
}