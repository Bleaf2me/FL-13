let log = prompt('Enter your login', ''),
    pass,
    currentHours = new Date().getHours(),
    minLength = 4,
    startDay = 8,
    endDay = 20;
console.log(currentHours);

if (log !== '' && log !== null && log.length < minLength) {
    alert(`I don't know any users having name length less than 4 symbols`);
} else {
    switch (log) {
        case '':
        case null:
            alert('Cancelled');
            break;
        case 'User':
        case 'Admin':
            pass = prompt('Enter the password', '');

            if (pass === '' || log === null) {
                alert('Cancelled');
            } else if (log === 'User' && pass === 'UserPass') {
                alert(currentHours > startDay && currentHours < endDay ? 
                'Good day, dear User!' : 'Good evening, dear User');
            } else if (log === 'Admin' && pass === 'RootPass') {
                alert(currentHours < startDay || currentHours > endDay ? 
                'Good day, dear Admin!' : 'Good evening, dear Admin');
            } else {
                alert('Wrong password');
            }
            
            break;
        default:
            alert('I don’t know you');
    }
}