const form = document.querySelector('#getFact');
const input1 = document.querySelector('#type');
const input2 = document.querySelector('#amount');
const div = document.querySelector('#catFact');
async function getCatFacts(type,amount) {
    const facts = await axios.get(form.action, {params:{type,amount}});
    for(let fact of facts.data) {
        const p = document.createElement('P');
        p.innerText = fact.text;
        div.append(p);
        // console.log(fact.text)
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    getCatFacts(input1.value, input2.value);
    input1.value = '';
    input2.value = '';
});