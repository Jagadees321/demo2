document.getElementById('StudentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const NAME = document.getElementById('Name1').value;
    const DOB = document.getElementById('dob').value;
    const STUDENTEMAIL = document.getElementById('STUDENTEMAIL').value;
    const PHONENO = document.getElementById('PHONENO').value;

    function calculateAge(dob) {
        const dobDate = new Date(dob);
        const diffMs = Date.now() - dobDate.getTime();
        const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
        return Math.floor(diffMs / millisecondsInYear);
    }

    let countCap = 0;
    
    
    let countChar = 0;

    for (let i = 0; i < NAME.length; i++) {
        if (NAME[i] >= 'A' && NAME[i] <= 'Z') {
            countCap++;
        }  else {
            countChar++;
        }
    }

    const nameField = document.getElementById('Name1');
    const existingError = document.querySelector('#nameError');
    if (existingError) {
        existingError.remove();
    }

    if (countCap === 0 ||  NAME.length < 5) {
        let errorMsg = '';
        if (countCap === 0) errorMsg += 'At least one capital letter required. ';
       
        if (NAME.length < 5) errorMsg += 'Minimum 5 characters required. ';

        let errorTag = document.createElement('p');
        errorTag.id = 'nameError';
        errorTag.style.color = 'red';
        errorTag.textContent = errorMsg;
        nameField.parentNode.insertBefore(errorTag, nameField.nextSibling);
        return;
    }

    const age = calculateAge(DOB);
    
    const table = document.getElementById('STUDENT').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const NameCell = newRow.insertCell(0);
    const AgeCell = newRow.insertCell(1);
    const DOBCell = newRow.insertCell(2);
    const STUDENTEMAILCELL = newRow.insertCell(3);
    const PHONENOCELL = newRow.insertCell(4);

    NameCell.textContent = NAME;
    AgeCell.textContent = age;
    DOBCell.textContent = DOB;
    STUDENTEMAILCELL.textContent = STUDENTEMAIL;
    PHONENOCELL.textContent = PHONENO;

    document.querySelector('body').style.backgroundColor = 'green';
    document.getElementById('StudentForm').reset();
});