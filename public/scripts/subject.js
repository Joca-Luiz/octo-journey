const body = document.body;
const newSubjectsButtonEl = document.getElementById('newSubjectButton');
const subjectsDivEl = document.querySelector('.subjects');

newSubjectsButtonEl.addEventListener('click', e => {
    const newSubjectsDivEl = subjectsDivEl.cloneNode(true);
    newSubjectsDivEl.innerHTML = '';

    const createSubjectFormEl = createSubjectsForm();

    const backButtonEl = document.createElement('button');
    backButtonEl.id = "backButton";
    backButtonEl.innerHTML = "Voltar";
    backButtonEl.addEventListener('click', () => {
        newSubjectsDivEl.remove();
        body.appendChild(subjectsDivEl);
    });
    
    createSubjectFormEl.appendChild(backButtonEl);
    newSubjectsDivEl.appendChild(createSubjectFormEl);
    
    subjectsDivEl.remove();
    body.appendChild(newSubjectsDivEl);
});

const createSubjectsForm = () => {
    const createSubjectFormEl = document.createElement('form');
    createSubjectFormEl.id = "newSubject";
    createSubjectFormEl.action = "subjects";
    createSubjectFormEl.method = "POST";

    let inputs = [];
    for (var i = 0; i < 3; i++) {
        inputs.push(document.createElement('input'));
    }

    const h1 = document.createElement('h1');
    h1.innerHTML = "Nova Materia";
    
    // Title
    inputs[0].type = "text";
    inputs[0].className = "form1";
    inputs[0].name = "title";
    inputs[0].maxLength = "100";
    inputs[0].placeholder = "Título";
    inputs[0].required = true;

    // Subtitle
    inputs[1].type = "text";
    inputs[1].className = "form1";
    inputs[1].name = "subtitle";    
    inputs[1].maxLength = "200";
    inputs[1].placeholder = "Sub-Título";

    // Author
    inputs[2].type = "text";
    inputs[2].className = "form1";
    inputs[2].name = "author";
    inputs[2].maxLength = "50";
    inputs[2].placeholder = "Autor";
    inputs[2].required = true;

    // TextArea
    const textArea = document.createElement('textarea');
    textArea.form = "newSubject";
    textArea.maxLength = "5000";
    textArea.required = true;
    textArea.name = "text";

    // Submit
    const submit = document.createElement('input');
    submit.type = "submit";
    submit.value = "Enviar";

    createSubjectFormEl.appendChild(h1);
    inputs.forEach(el => createSubjectFormEl.appendChild(el));
    createSubjectFormEl.appendChild(textArea);
    createSubjectFormEl.appendChild(submit);

    return createSubjectFormEl;
}