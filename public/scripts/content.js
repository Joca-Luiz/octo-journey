const contents = document.querySelector('.contents')
const addContentDivEL = document.getElementById('add');
const addContentButtonEL = document.getElementById('new');

addContentButtonEL.addEventListener('click', () => {
    const form = createContentForm();
    contents.insertBefore(form, addContentDivEL);
});

const createContentForm = () => {
    // Form
    const contentForm = document.createElement('form');
    contentForm.className = "content";
    contentForm.action = "";
    contentForm.method = "POST";

    // Title
    const input = document.createElement('input');
    input.name = "title";
    input.type = "text";
    input.maxLength = "50";
    input.placeholder = "Título";

    // Texto
    const textarea = document.createElement('textarea');
    textarea.name = "text";
    textarea.type = "text";
    textarea.maxLength = "900";
    textarea.placeholder = "Seu conteudo....";

    // Submit
    const submit = document.createElement('input');
    submit.type = "submit";

    contentForm.appendChild(input);
    contentForm.appendChild(textarea);
    contentForm.appendChild(submit);

    return contentForm;
}