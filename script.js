$(document).ready(function () {
    $('#addTaskBtn').on('click', function () {
        const taskText = $('#taskInput').val().trim();
        if (taskText === '') {
            alert('Digite uma tarefa.');
            return;
        }

        const $li = $('<li>').text(taskText);

        // Riscar ao clicar
        $li.on('click', function () {
            $(this).toggleClass('task-completed');
        });

        $('#taskList').append($li);
        $('#taskInput').val('');
    });

    // Pressionar ENTER também adiciona a tarefa
    $('#taskInput').on('keypress', function (e) {
        if (e.which === 13) {
            $('#addTaskBtn').click();
        }
    });
});