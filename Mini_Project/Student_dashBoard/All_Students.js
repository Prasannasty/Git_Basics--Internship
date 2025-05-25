function renderTable() {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const table = document.getElementById('studentsTable');
    if (!students.length) {
        table.innerHTML = `<tr><td colspan="6" style="color:#b91c1c;">No students found.</td></tr>`;
        return;
    }
    let thead = `
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Semester</th>
                <th>View</th>
            </tr>
        </thead>
    `;
    let tbody = '<tbody>';
    students.forEach((student, idx) => {
        tbody += `
            <tr>
                <td>${idx + 1}</td>
                <td>${student.studentName}</td>
                <td>${student.deptName}</td>
                <td>${student.semester}</td>
                <td>
                    <button class="action-btn see" title="See Details" onclick="seeStudent('${student.rollNumber}')">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    tbody += '</tbody>';
    table.innerHTML = thead + tbody;
}

window.seeStudent = function(rollNumber) {
    localStorage.setItem('viewRollNumber', rollNumber);
    window.location.href = "studentDetails.html";
};

window.onload = renderTable;

document.getElementById('backHome').onclick = function() {
    window.location.href = "Home.html";
};

function showPopup(message, isError) {
    const popup = document.getElementById('popup');
    popup.innerHTML = isError
        ? `<i class="fas fa-times-circle" style="color:#b91c1c;margin-right:8px;"></i>${message}`
        : `<i class="fas fa-check-circle" style="color:#065f46;margin-right:8px;"></i>${message}`;
    popup.style.background = isError ? "#fee2e2" : "#d1fae5";
    popup.style.color = isError ? "#b91c1c" : "#065f46";
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

window.editStudent = function(rollNumber) {
    if (confirm("Are you sure you want to edit this student?")) {
        localStorage.setItem('editRollNumber', rollNumber);
        window.location.href = "details_Form.html";
    }
};

window.deleteStudent = function(rollNumber) {
    if (confirm("Are you sure you want to delete this student?")) {
        let students = JSON.parse(localStorage.getItem('students') || '[]');
        students = students.filter(s => s.rollNumber !== rollNumber);
        localStorage.setItem('students', JSON.stringify(students));
        showPopup("Student has been deleted!", false);
        setTimeout(() => {
            window.location.href = "All_Student.html";
        }, 1200);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const msg = localStorage.getItem('deleteMsg');
    if (msg) {
        showPopup(msg, false);
        localStorage.removeItem('deleteMsg');
    }
});