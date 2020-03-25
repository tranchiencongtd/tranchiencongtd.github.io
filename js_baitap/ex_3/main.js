let icandoit = {
    id: 1,
    title: 'task 1',
    description: 'task 1',
    type: 'task',
    priority: 'high',
    allowFor: ['back_end', 'front_end', 'function_test', 'performance_test'],
    createdBy: 'Joo',
    assignee: 'joo',
    estimate: '20/03/2020',
    state: 'todo'
};

const formUpdate = document.form;

document.querySelector('#thisisproblem').innerText = JSON.stringify(icandoit, null, 3);

function show() {
    let showAll = document.querySelector('#update');
    showAll.style.display="block";
    formUpdate.title.value = icandoit.title;
    formUpdate.description.value = icandoit.description;
    formUpdate.type.value = icandoit.type;
    formUpdate.priority.value = icandoit.priority;
    formUpdate.createdBy.value = icandoit.createdBy;
    formUpdate.assignee.value = icandoit.assignee;
    formUpdate.estimate.value = icandoit.estimate;
    formUpdate.state.value = icandoit.state;
    statusCheckBox();
};

// Save
function save() {
    icandoit.title = formUpdate.title.value;
    icandoit.description = formUpdate.description.value;
    icandoit.type = formUpdate.type.value;
    icandoit.priority = formUpdate.priority.value;
    icandoit.createdBy = formUpdate.createdBy.value;
    icandoit.assignee = formUpdate.assignee.value;
    icandoit.estimate = formUpdate.estimate.value;
    icandoit.state = formUpdate.state.value;
    icandoit.allowFor = getValue();
    console.log(icandoit.allowFor);
    hide();
    document.querySelector('#thisisproblem').innerText = JSON.stringify(icandoit, null, 3);
}

// Value allowFor
function getValue() {
    let hold = document.getElementsByName('allowFor');
    let value = [];
    for (i = 0; i < hold.length; i++) {
        let tem = hold[i].checked;
        if (tem) {
            value.push(hold[i].value);
        }
    };
    return value;
}

function statusCheckBox() {
    let allowFor = document.getElementsByName('allowFor');
    for(let i=0;i<allowFor.length;i++) {
        allowFor[i].checked = false
    };

    for (i = 0; i < icandoit.allowFor.length; i++) {
        document.getElementById(icandoit.allowFor[i]).checked = true;
    }
};


// Close
function hide() {
    let showAll = document.querySelector('#update');
    showAll.style.display="none";
};