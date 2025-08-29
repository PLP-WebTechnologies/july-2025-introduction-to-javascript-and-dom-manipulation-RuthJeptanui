// an object of  grade info 
const gradeInfo = {
    1:"Grade 1: basic reading and writing skills",
    2:"Grade 2: basic arithmetic and problem-solving skills",
    3:"Grade 3: multiplication, division, and basic fractions", 
    4:"Grade 4: multi-digit multiplication, long division, and decimals",
    5:"Grade 5: advanced multiplication, division, and fractions",
    6:"Grade 6: ratios, percentages, and basic geometry",
    7:"Grade 7: pre-algebra, basic statistics, and probability",
    8:"Grade 8: algebra, geometry, and data analysis",
    9:"Grade 9: advanced algebra, geometry, and trigonometry",
    10:"Grade 10: advanced algebra, geometry, and trigonometry",
    11:"Grade 11: pre-calculus, statistics, and probability",
    12:"Grade 12: calculus, statistics, and advanced topics"
}
//adding event listener to the selected grade and display in tghe texterea
document.getElementById("grade").addEventListener("change", ()=>{
    const selectedGrade = gradeInfo.value;
    document.getElementById("selectedGradeInfo").value = gradeInfo[selectedGrade] || "There is nothing to display";
});



//toggling subjects fucntion
function toggleSubjects(){
    const subjectList = document.getElementById("subjectList");
    const toggleBtn = document.getElementById("toggleButton");

    if(subjectList.style.display === "none"){
        subjectList.style.display = "block";
        toggleBtn.style.backgroundColor = "blue";
        toggleBtn.innerText = "Hide Subjects";
    } else{
        subjectList.style.display = "none";
        toggleBtn.style.backgroundColor = "green";
        toggleBtn.innerText = "Show Subjects";
    }
}

//countdown timer function that shows how long you have been on the page since the last refresh
let secondsOnPage = 0;

// function to update the display
function updateTimer() {
  secondsOnPage++;
  const display = document.getElementById("countDisplay");
  const minutes = Math.floor(secondsOnPage / 60);
  const seconds = secondsOnPage % 60;
  display.innerText = ` You have been on this page for ${minutes}m ${seconds}s`;
}

// start updating every second once the page loads
setInterval(updateTimer, 1000);

//  reset when button is clicked
document.getElementById("countBtn").addEventListener("click", function () {
  secondsOnPage = 0;
  document.getElementById("countDisplay").innerText = " Timer reset!";
});



