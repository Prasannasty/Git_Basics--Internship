document.getElementById('studentForm').addEventListener('submit', function(e) {
    const editRoll = localStorage.getItem('editRollNumber');
    if (editRoll) {
        e.preventDefault();
        showEditModal(function(confirmed) {
            if (confirmed) {
                saveStudentForm();
            }
        });
        return false;
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
    saveStudentForm();
});

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

// Show the modal and handle callback
function showEditModal(callback) {
    const modal = document.getElementById('editConfirmModal');
    modal.style.display = 'flex';
    const submitBtn = document.getElementById('modalSubmitBtn');
    // Remove previous listeners
    submitBtn.onclick = null;
    submitBtn.onclick = function() {
        closeEditModal();
        callback(true);
    };
}

function closeEditModal() {
    document.getElementById('editConfirmModal').style.display = 'none';
}

// Show green popup at top
function showTopMessage(msg, callback) {
    let msgDiv = document.getElementById('msg');
    msgDiv.innerText = msg;
    msgDiv.style.display = "block";
    setTimeout(() => {
        msgDiv.style.display = "none";
        if (callback) callback();
    }, 900);
}

// In your saveStudentForm, after saving:
function saveStudentForm() {
    const form = document.getElementById('studentForm');
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
    const editRoll = localStorage.getItem('editRollNumber');
    if (editRoll) {
        const idx = students.findIndex(s => s.rollNumber == editRoll);
        if (idx !== -1) {
            students[idx] = student;
            localStorage.setItem('students', JSON.stringify(students));
            localStorage.removeItem('editRollNumber');
            showTopMessage("Data has been changed!", () => {
                window.location.href = "Home.html";
            });
            return;
        }
    }
    // New student
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    showTopMessage("Student details saved!", () => {
        window.location.href = "Home.html";
    });
    form.reset();
}