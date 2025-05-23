document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const dept = document.getElementById('deptName').value.trim();
  const sem = document.getElementById('semester').value.trim();
  const roll = document.getElementById('rollNumber').value.trim();

  const students = JSON.parse(localStorage.getItem('students') || '[]');
  const student = students.find(s =>
    s.deptName === dept &&
    s.semester === sem &&
    s.rollNumber === roll
  );

  const resultDiv = document.getElementById('result');
  if (student) {
    let subjectNames = '';
    let marksCells = '';
    for (let i = 1; i <= 6; i++) {
      subjectNames += `<th>${student['subject' + i]}</th>`;
      marksCells += `<td>${student['marks' + i]}</td>`;
    }

    resultDiv.innerHTML = `
      <table class="student-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Reg. Number</th>
            <th>Department</th>
            <th>Semester</th>
            ${subjectNames}
            <th>Total Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>${student.studentName}</td>
            <td>${student.rollNumber}</td>
            <td>${student.deptName}</td>
            <td>${student.semester}</td>
            ${marksCells}
            <td>${student.totalMarks}</td>
            <td>${student.percentage}</td>
          </tr>
        </tbody>
      </table>
    `;
    showPopup("Student data found!");
  } else {
    resultDiv.innerHTML = `<p style="color:red;">No student found with the given details.</p>`;
    showPopup("No student found!", true);
  }
});

document.getElementById('backHome').onclick = function () {
  window.location.href = "Home.html";
};

function showPopup(message, isError) {
  const popup = document.getElementById('popup');
  popup.innerText = message;
  popup.style.background = isError ? "#fee2e2" : "#d1fae5";
  popup.style.color = isError ? "#b91c1c" : "#065f46";
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}