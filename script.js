document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
    
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();
    let hours = now.getHours() - dob.getHours();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }

    const ageText = `You are ${years} years, ${months} months, ${days} days, and ${hours} hours old.`;
    document.getElementById('ageDisplay').textContent = ageText;
    document.getElementById('result').style.display = 'block';
});
