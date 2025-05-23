window.onload = function() {
    const roll = localStorage.getItem('viewRollNumber');
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const student = students.find(s => s.rollNumber == roll);
    const detailsDiv = document.getElementById('studentDetails');
    if (!student) {
        detailsDiv.innerHTML = "<p style='color:#b91c1c;'>Student not found.</p>";
        return;
    }
    detailsDiv.innerHTML = `
        <table class="students-table">
            <tr><th>Name</th><td>${student.studentName}</td></tr>
            <tr><th>Reg. Number</th><td>${student.rollNumber}</td></tr>
            <tr><th>Department</th><td>${student.deptName}</td></tr>
            <tr><th>Semester</th><td>${student.semester}</td></tr>
            ${student.subject1 ? `<tr><th>${student.subject1}</th><td>${student.marks1}</td></tr>` : ""}
            ${student.subject2 ? `<tr><th>${student.subject2}</th><td>${student.marks2}</td></tr>` : ""}
            ${student.subject3 ? `<tr><th>${student.subject3}</th><td>${student.marks3}</td></tr>` : ""}
            ${student.subject4 ? `<tr><th>${student.subject4}</th><td>${student.marks4}</td></tr>` : ""}
            ${student.subject5 ? `<tr><th>${student.subject5}</th><td>${student.marks5}</td></tr>` : ""}
            ${student.subject6 ? `<tr><th>${student.subject6}</th><td>${student.marks6}</td></tr>` : ""}
            <tr><th>Total Marks</th><td>${student.totalMarks}</td></tr>
            <tr><th>Percentage</th><td>${student.percentage}</td></tr>
            <tr>
                <td colspan="2" style="text-align:center;">
                    <button class="action-btn edit" onclick="editStudent('${student.rollNumber}')"><i class="fas fa-edit"></i> Edit</button>
                    <button class="action-btn delete" onclick="deleteStudent('${student.rollNumber}')"><i class="fas fa-trash-alt"></i> Delete</button>
                </td>
            </tr>
        </table>
    `;
};

window.editStudent = function(rollNumber) {
    localStorage.setItem('editRollNumber', rollNumber);
    window.location.href = "details_Form.html";
};

window.deleteStudent = function(rollNumber) {
    if (confirm("Are you sure you want to delete this student?")) {
        let students = JSON.parse(localStorage.getItem('students') || '[]');
        students = students.filter(s => s.rollNumber != rollNumber);
        localStorage.setItem('students', JSON.stringify(students));
        localStorage.setItem('deleteMsg', 'Student has been deleted!');
        window.location.href = "All_Student.html";
    }
};

document.getElementById('backBtn').onclick = function() {
    window.location.href = "All_Student.html";
};