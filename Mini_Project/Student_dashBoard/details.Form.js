document.getElementById('studentForm').addEventListener('submit', function(e) {
    // Only show confirmation if editing
    const editRoll = localStorage.getItem('editRollNumber');
    if (editRoll) {
        if (!confirm("Are you sure you want to save these changes?")) {
            e.preventDefault();
            return false;
        }
    }

    // Semester: only numbers between 1 and 8
    const semester = document.getElementById('semester').value;
    if (!/^\d+$/.test(semester) || semester < 1 || semester > 8) {
        alert('Semester must be a number between 1 and 8.');
        e.preventDefault();
        return false;
    }

    // Subject Names: only letters and spaces
    for (let i = 1; i <= 6; i++) {
        const subject = document.getElementById('subject' + i).value.trim();
        if (!/^[A-Za-z ]+$/.test(subject)) {
            alert('Subject ' + i + ' Name must contain only letters and spaces.');
            e.preventDefault();
            return false;
        }
        // Marks: number between 0 and 100
        const marks = document.getElementById('marks' + i).value;
        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert('Marks for Subject ' + i + ' must be a number between 0 and 100.');
            e.preventDefault();
            return false;
        }
    }

    e.preventDefault();

    const form = e.target;
    const student = {
        studentName: form.studentName.value,
        rollNumber: form.rollNumber.value,
        deptName: form.deptName.value,
        semester: form.semester.value,
        totalMarks: form.totalMarks.value,
        percentage: form.percentage.value
    };
    for (let i = 1; i <= 6; i++) {
        student['subject' + i] = form['subject' + i].value;
        student['marks' + i] = form['marks' + i].value;
    }

    let students = JSON.parse(localStorage.getItem('students') || '[]');
    // Check if editing
    if (editRoll) {
        const idx = students.findIndex(s => s.rollNumber == editRoll);
        if (idx !== -1) {
            students[idx] = student;
            localStorage.setItem('students', JSON.stringify(students));
            localStorage.removeItem('editRollNumber');
            showTopMessage("Your data has been changed!");
            setTimeout(() => {
                window.location.href = "Home.html";
            }, 1000);
            return;
        }
    }
    // New student
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    showTopMessage("Student details saved!");
    setTimeout(() => {
        window.location.href = "Home.html";
    }, 600);
    form.reset();
});

// Show message at top of screen
function showTopMessage(msg) {
    let msgDiv = document.getElementById('msg');
    if (!msgDiv) {
        msgDiv = document.createElement('div');
        msgDiv.id = 'msg';
        msgDiv.style.position = 'fixed';
        msgDiv.style.top = '30px';
        msgDiv.style.left = '50%';
        msgDiv.style.transform = 'translateX(-50%)';
        msgDiv.style.background = '#d1fae5';
        msgDiv.style.color = '#065f46';
        msgDiv.style.padding = '16px 32px';
        msgDiv.style.borderRadius = '8px';
        msgDiv.style.fontWeight = 'bold';
        msgDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
        msgDiv.style.zIndex = '9999';
        document.body.appendChild(msgDiv);
    }
    msgDiv.innerText = msg;
    msgDiv.style.display = "block";
    setTimeout(() => {
        msgDiv.style.display = "none";
    }, 900);
}

// Autofill form if editing
window.onload = function() {
    const roll = localStorage.getItem('editRollNumber');
    if (roll) {
        let students = JSON.parse(localStorage.getItem('students') || '[]');
        let student = students.find(s => s.rollNumber == roll);
        if (student) {
            document.getElementById('studentName').value = student.studentName || '';
            document.getElementById('rollNumber').value = student.rollNumber || '';
            document.getElementById('deptName').value = student.deptName || '';
            document.getElementById('semester').value = student.semester || '';
            for (let i = 1; i <= 6; i++) {
                if (document.getElementById('subject' + i))
                    document.getElementById('subject' + i).value = student['subject' + i] || '';
                if (document.getElementById('marks' + i))
                    document.getElementById('marks' + i).value = student['marks' + i] || '';
            }
            if (document.getElementById('totalMarks'))
                document.getElementById('totalMarks').value = student.totalMarks || '';
            if (document.getElementById('percentage'))
                document.getElementById('percentage').value = student.percentage || '';
        }
    }
};

// Calculate total marks and percentage
document.addEventListener('DOMContentLoaded', function () {
    const marksInputs = document.querySelectorAll('.marks');
    const totalMarksInput = document.getElementById('totalMarks');
    const percentageInput = document.getElementById('percentage');

    function calculateTotalAndPercentage() {
        let total = 0;
        let count = 0;
        marksInputs.forEach(input => {
            const val = parseFloat(input.value);
            if (!isNaN(val)) {
                total += val;
                count++;
            }
        });
        totalMarksInput.value = total;
        percentageInput.value = count > 0 ? (total / (count * 100) * 100).toFixed(2) : '';
    }

    marksInputs.forEach(input => {
        input.addEventListener('input', calculateTotalAndPercentage);
    });

    calculateTotalAndPercentage();
});

// Deleting a student record
function deleteStudent(rollNumber) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students = students.filter(s => s.rollNumber !== rollNumber);
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('deleteMsg', 'Student has been deleted!');
    window.location.href = "All_Student.html";
}