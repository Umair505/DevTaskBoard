function getInnerText(id)
{
    const value = document.getElementById(id).innerText;
    return parseFloat(value);

}
function getElementById(id)
{
    const value = document.getElementById(id);
    return value;
}
function setInnerText(id,value)
{
    document.getElementById(id).innerText = value;
}

function taskCompleted(taskId)
{
    document.getElementById(taskId).addEventListener("click",
        function(event){
            event.preventDefault();
            const task = getInnerText("task");
            const taskCompleted = getInnerText("task-completed");
            const sum = task - 1;
            const comp = taskCompleted + 1;
            setInnerText("task", sum);
            setInnerText("task-completed", comp);
            const button = getElementById(taskId);
            button.disabled = true;
            const title = getInnerText("task-title");
            alert("Board Updated Successfully!");
            if(sum === 0){
                alert("Congratulations! All tasks completed!");
            }
            document.getElementById("history").innerText += `You have completed the task ${task}, Completed tasks: ${comp}`;
        }
    )
}
taskCompleted("first-task");
taskCompleted("second-task");
taskCompleted("third-task");
taskCompleted("fourth-task");
taskCompleted("fifth-task");
taskCompleted("sixth-task");

document.getElementById("clear-history").addEventListener("click",
    function(event)
    {
        event.preventDefault();
        document.getElementById("history").innerText = "";
    }
)