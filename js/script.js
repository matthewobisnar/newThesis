

function ajaxRequest (payload = null, options = null, callback, errocallback = null)
{
    try {
        var defaults = {
            type: "POST",
            cache: false,
            async: true,
            processData: true,
        }

        var object = {
            data: payload,
            dataType:"json",
            success: function (response) {
                if (response.error != null) {
                    if (response.error.error == "401! Unauthorized Access.") {
                        window.location.replace(redirect_login);//("/")
                    }
                }

                callback(response);
            },

            error: function (response) { 
                if (errocallback) {
                    errocallback(response);
                }
            }
        };

        var ajaxRequest = Object.assign({}, object, defaults, options);
        
        return $.ajax(ajaxRequest);

    } catch (e) {
        alert(e);
    }

    return true;
}

function setToLocalStorage($object, callback = null)
{
    for ($key in $object) {
        if (typeof localStorage.getItem($key) != "undefined") {
            localStorage.removeItem($key);
        }

        localStorage.setItem($key, $object[$key]);
    }

    if (callback != null) {
        callback();
    }

    return true;
}

function unsetLocalStorage($unsetKey, callback= null)
{
    for (var i =0; i<$unsetKey.length; i++) {
        localStorage.removeItem($unsetKey[i]);
    }

    if (callback != null) {
        callback();
    }
}

function assignAuthHeader($object = getToLocalStorage(['user_id', 'token']))
{
    var output = {
        Authorization: "no-code",
        Userid: "no-id"
    };

    for (var key in $object) {
        if (localStorage.getItem(key) == null 
            || typeof localStorage.getItem(key) == 'undefined') {
              return null;
        }

        switch(key) {
            case 'token':
                output['Authorization'] =  localStorage.getItem(key);
            break;
            case 'user_id':
                output['Userid'] =  localStorage.getItem(key);
            break;
        }
    }

    return output;
}

function getToLocalStorage($obj)
{
    var output = {};

    for (var i =0; i<$obj.length; i++) {
        if (localStorage.getItem($obj[i]) == null 
            || typeof localStorage.getItem($obj[i]) == "undefined" ) {
                return null;
        }

        output[$obj[i]] =  localStorage.getItem($obj[i]);
    }
    
    return output;
}

function genCountTemplate($elemId, $value){
    return $($elemId).empty().html($value);
}

function generateRequestTemplate($elemId, $elementValue,num)
{                       
    $($elemId).empty();

    if ($elementValue.length > 0) {

       for (var el = 0; el<$elementValue.length; el++) {

            $items = 
                ['<div class="list-group-item d-flex g-3 py-3">',
                    '<i class="material-icons pending pe-3">assignment_ind</i>',
                    '<div class="d-flex gap-2 w-100 justify-content-between">',
                        '<a href="" class="text-decoration-none text-black" aria-current="true" data-bs-toggle="modal" data-info="'+$elementValue[el].customer_id+'" data-bs-target="#request_modal-'+num+'" id="dataTarget">',
                                '<div class="endtext">',
                                    '<h6 class="mb-0 fcapital" id="emp_name">' + $elementValue[el].customer_last_name +' ',
                                    (num == 0 ? '<small class="opacity-50" id="updated_at">.'+(time_ago(new Date($elementValue[el].customer_created_at)))+'</small></h6>' : '' ),
                                    (num == 1 ? '<small class="opacity-50" id="updated_at">.'+(time_ago(new Date($elementValue[el].customer_updated_at)))+'</small></h6>' : '' ),
                                    (num == 2 ? '<small class="opacity-50" id="updated_at">.'+(time_ago(new Date($elementValue[el].customer_updated_at)))+'</small></h6>' : '' ),
                                '</div>',
                                '<p class="mb-0 opacity-75" id="request_details_in_list">'+textLimit($elementValue[el].customer_inquiry_details, 20)+'</p>',
                '</a>',
                        (num == 1 ?'<button type="button" id="turndown" data-id="'+$elementValue[el].customer_id+'" class="btn" title="Turndown"><small class="opacity-50 text-nowrap"><span class="material-icons">archive</span></small></button>' : ''),
                        (num == 2 ? '<button type="button" id="approved" data-id="'+$elementValue[el].customer_id+'" class="btn" title="Approve"><small class="opacity-50 text-nowrap"><i class="fas fa-clipboard-check fs-5"></i></small></button>' : ''),
                    '</div>',
                   '</div>'];
           
            $($elemId).append($items.join(""));
        }
        
    }
}

function generateModelTemplateDashboard($elemId, $content)
{
    for (var el = 0; el<$content.length; el++) { 
        $($elemId + " #fullName").html( $content[el].customer_first_name+ " " +  $content[el].customer_last_name);
        $($elemId + " #email").html( $content[el].customer_email);
        $($elemId + " #mobileNumber").html($content[el].customer_mobile_number);
        $($elemId + " #dateCreated").html(humanReadableDate($content[el].customer_created_at, true));
        $($elemId + " #requestDetails").html($content[el].customer_inquiry_details);
        $($elemId + " #approved").attr('data-id',$content[el].customer_id);
        $($elemId + " #turndown").attr('data-id', $content[el].customer_id);
        $($elemId + " #deleteRequest").attr('data-id',$content[el].customer_id);
    }
}


$(document).on('click', "#copyApprovedRequest", function (e) {
    copyDataApprovedRequest();
});

function copyDataApprovedRequest()
{

    var text = "-- Customer Info --" + '\r\n' +
    'Full Name: ' + $("#request_modal-1 #fullName").html() + '\r\n' +
    'Email: ' + $("#request_modal-1 #email").html() + '\r\n' +
    'Mobile Number: ' + $("#request_modal-1 #mobileNumber").html() + '\r\n' +
    'Date Created: '+ $("#request_modal-1 #dateCreated").html() + '\r\n\r\n' +
    "-- Details --" + '\r\n' +
    $("#request_modal-1 #requestDetails").html();
  

    navigator.clipboard.writeText(text)
    .then(function (){
        // Success!
        $('.modal').modal('hide');
        Swal.fire({
            title: 'Copied!',
            text: '',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2691d9',
        });
    })
    .catch(function () {
        Swal.fire({
            title: 'Oh no!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2691d9',
        });
    });

}

function generateTodoTemplate($elem, $content, num)
{
    if ($content.length > 0) {
        
        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {
            $html = [
                '<label class="list-group-item d-flex">',
                    '<div class="flex-fill d-flex gap-3">',
                        '<input class="form-check-input checkbox mt-3" type="checkbox" value="'+$content[el].todo_id+'" style="font-size: 1.00em;" aria-label="...">',
                        '<span class="pt-1 form-checked-content">',
                            '<strong><a href="" class="text-decoration-none text-dark" data-bs-toggle="modal" data-info="'+$content[el].todo_id+'" data-bs-target="#update_todo">'+$content[el].todo_title+'</a></strong>',
                            '<small class="d-block mt-1">',
                                '<!--Due Date Observation-->',
                                ( num == 0 ?'<span class="material-icons fs-5 float-start pe-2 turndown">event</span> ': ''),
                                ( num == 1 ?'<span class="material-icons fs-5 float-start pe-2 approved">event</span> ': ''),
                                (num == 0 ? humanReadableDate($content[el].todo_deadline) + " (" + getDayDescription($content[el].todo_deadline) + ")": ''),   
                               (num == 1 ? humanReadableDate($content[el].todo_updated_at) + " (" + getDayDescription($content[el].todo_updated_at) + ")": ''),                                                                                
                            '</small>',
                        '</span>',
                    '</div>',
                    (num == 0 ? '<div class="flex-fill align-items-center"><button class="btn float-end opacity-50" id="todo-update" data-info="'+$content[el].todo_id+'" title="Completed"><i class="material-icons">task_alt</i></button></div>' : ''),
                '</label>'
            ];
        
            $($elem).append($html.join(""));
        } 
    }

}

function getTodoModalTemplate($elem, $content, $num)
{

    $($elem).empty();

    var $html = [
        '<div class="row">',
            '<div class="col">',
                '<p>Project Name:</span> <span class="opacity-75 ms-2" id="td_title">'+$content.todo_title+ '</span></p>',
                '<p>Address: <span class="opacity-75 ms-2" id="td_address">'+$content.todo_address+ '</span></p>',
            '</div>',
            '<div class="col">',
                '<p>Created At: <span class="opacity-75 ms-2" id="td_created">'+humanReadableDate($content.todo_created_at)+'</span></p>',
                ($content.todo_status == 0 ? '<p>Due: <span class="opacity-75 ms-2" id="td_due">'+humanReadableDate($content.todo_deadline) + " (" + getDayDescription($content.todo_deadline) + ")" + '</span></p>' : '<p>Completed At: <span class="opacity-75 ms-2" id="td_due">'+humanReadableDate($content.todo_updated_at) + " (" + getDayDescription($content.todo_updated_at) + ")" + '</span></p>'),
            '</div>',
        '</div><hr>',
        '<h6>Details:</h6>',
        '<textarea class="form-control bg-white opacity-75 textarea" id="td_description" aria-describedby="help" disabled>'+ $content.todo_description +'</textarea>',
        ($content.todo_status == 0 ? '<button type="button" class="btn float-end opacity-50 mt-3" id="copyTodo">Copy<i class="material-icons fs-6">copy_all</i></button>': '')

    ];

    // if ($content.todo_status == '0') {
    //     $buttons = [
    //         '<button  id="todo-update" data-info="'+$content.todo_id+'" class="btn btn-outline-success" name="update">Complete</button>',
    //     ];
    // } else {
    //     $buttons = [
    //         '<button  class="btn btn-outline-success" id="todo-done" name="update">Done</button>'
    //     ];
    // }

    // $("#todo-buttons").empty();
    // $("#todo-buttons").append($buttons.join(""));
    $($elem).append($html.join(""));
}


$(document).on('click', "#copyTodo", function (e) {
    copyTodoData();
});

function copyTodoData()
{

    var text = "-- PROJECT DETAILS --" + '\r\n' + 
        'Project: ' + $("#update_todo #td_title").html() + '\r\n' +
        'Address: ' + $("#update_todo #td_address").html() + '\r\n' +
        'Created At: ' + $("#update_todo #td_created").html() + '\r\n' +
        'Due Date: ' + $("#update_todo #td_due").html() + '\r\n\r\n' +
        $("#update_todo #td_description").html() + '\r\n\r\n' +
        "If you have any questions, please contact this number: " + '\r\n\r\n' +
        "Thank you.";

    navigator.clipboard.writeText(text)
    .then(function (){
        // Success!
        $('.modal').modal('hide');
        Swal.fire({
            title: 'Copied!',
            text: '',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2691d9',
        });
    })
    .catch(function () {
        Swal.fire({
            title: 'Oh no!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2691d9',
        });
    });
}




function generateEmptyTemplate($elem)
{
    $($elem).empty();
    $html = [
        '<div class="text-center mt-2 p-5">',
            '<h1 class="material-icons opacity-25 fs-1">subtitles_off</h1>',
            '<p class="opacity-25">Empty</p>',
        '</div>'
    ];

    $($elem).html($html.join(""));
}

function generateEmptyTableTemplate($elem)
{
    $($elem).empty();
    $html = [
        '<div class="text-center mt-2 p-5">',   
            '<p class="opacity-25">No data</p>',
        '</div>',
    ];

    $($elem).html($html.join(""));
}


function getDayDescription(dateString)
{
    if (!dateString || dateString == '') {
        return new Date().getDay();
    } 
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    return days[d.getDay()];
}

function humanReadableDate(dateString, hours = null)
{

    if (hours) {
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'};
    } else {
        var options = { year: 'numeric', month: 'long', day: 'numeric'};
    }

    var today  = new Date(dateString);

    if (!dateString || dateString == '') {
        today  = new Date();
    }

    return today.toLocaleDateString("en-US", options);

}

function generateContactMessage($elem, $content)
{
    $($elem).empty();

    for (var el = 0; el < $content.length; el++) {
        var html = [
            '<label class="list-group-item d-flex gap-3">',
                '<input class="form-check-input class="selectContacts" flex-shrink-0" type="checkbox" value="'+$content[el].emp_mobile_number+'" style="font-size: 1.375em;">',
                '<span class="pt-1 form-checked-content">',
                    '<strong>'+$content[el].emp_first_name +" " + $content[el].emp_last_name+'</strong>',
                    '<small class="d-block text-muted">',
                        $content[el].emp_mobile_number,
                    '</small>',
                '</span>',
            '</label>'
        ];
        $($elem).append(html.join(""));
    }
}

function time_ago(time) {

    var aDay = 24 * 60 * 60 * 1000;

    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }

    var time_formats = [
      [60, 'seconds', 1], // 60
      [120, '1 minute ago', '1 minute from now'], // 60*2
      [3600, 'minutes', 60], // 60*60, 60
      [7200, '1 hour ago', '1 hour from now'], // 60*60*2
      [86400, 'hours', 3600], // 60*60*24, 60*60
      [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
      [604800, 'days', 86400], // 60*60*24*7, 60*60*24
      [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
      [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
      [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
      [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
      [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];

    var seconds = (+new Date() - time) / 1000,
      token = 'ago',
      list_choice = 1;
  
    if (seconds == 0) {
      return 'Just now'
    }

    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'from now';
      list_choice = 2;
    }

    var i = 0, format;

    while (format = time_formats[i++])
      if (seconds < format[0]) {
        if (typeof format[2] == 'string')
          return format[list_choice];
        else
          return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    return time;
}

function shortDate(dateString) 
{
    var options = {month: 'short', day: 'numeric'};
    var today  = new Date(dateString);

    if (!dateString || dateString == '') {
        today  = new Date();
    }

    return today.toLocaleDateString("en-US", options);
}

function generateTemplateEmployee($elem, $content, $num)
{
    $($elem).empty();

    for (var el =0; el<$content.length; el++) {

        id="tfname_'+$content[el].emp_id+'"
        
        $html = [
           '<tr data-href="" data-bs-toggle="modal" data-info="'+$content[el].emp_id+'" data-bs-target="#edit_emp_modal">',
                '<td data-label="Employee Information">',
                '<span class="material-icons '+ ($content[el].emp_status == 1 ? "approved": "offline") +'">'+ ($content[el].emp_status == 1 ? "person": "person") +'</span></td>',
                '<td data-label="Employee Name""><span class="fcapital">',
                    '<span id="tfname_'+$content[el].emp_id+'">'+$content[el].emp_first_name +'</span> ', 
                    '<span id="tlname_'+$content[el].emp_id+'">'+ $content[el].emp_last_name +'</span></span>',
                '</td>',
                '<td id="tnumber_'+$content[el].emp_id+'" data-label="Email Address">'+ $content[el].emp_mobile_number +'</td>',
                '<td id="temail_'+$content[el].emp_id+'" data-label="Mobile Number">'+$content[el].emp_email+'</td>',
                '<td data-label="Status"><span class="'+ ($content[el].emp_status == 1 ? "approved": "offline") +'">'+ ($content[el].emp_status == 1 ? "Active" : "Inactive") +'</span></td>',
                // '<td>',
                //     '<button class="btn btn-sm" id="deleteEmployee" data-info="'+$content[el].emp_id+'">',
                //         '<span class="material-icons text-muted material-icons-outlined fs-3">delete</span>',
                //     '</button>',
                // '</td>',
            '</tr>'
        ];

        $($elem).append($html.join(""));
        
    }

}

function generateTemplateSentMessage($elem, $content)
{
    $("#sent-messages").empty();

    for (var el =0; el<$content.length; el++) {

        $html = [
            '<label class="list-group-item d-flex">',
                '<div class="flex-fill d-flex gap-3">',
                    '<input class="form-check-input checkbox2 mt-3" type="checkbox" value="'+$content[el].sent_message_id+'" style="font-size: 1.00em;" aria-label="...">',
                    '<span class="pt-1 form-checked-content">',
                        '<strong><a href="" class="text-decoration-none text-dark" data-bs-toggle="modal" data-info="'+$content[el].sent_message_id+'" data-bs-target="#view-message">'+ $content[el].emp_first_name + " " + $content[el].emp_last_name +' <small class="opacity-50 text-secondary">'+time_ago(new Date($content[el].sent_created_at))+'</small></a></strong>',
                        '<small class="d-block text-muted mt-1">',
                        textLimit($content[el].message_content, 30),
                        '</small>',
                    '</span>',
                '</div>', 
                '<div class="flex-fill align-items-center">',
                    '<small class="float-end opacity-50">'+shortDate($content[el].sent_created_at)+'</small>',
               '</div>',
            '</label>'
        ];

        $("#sent-messages").append($html.join(""));
    }
}

function generateTemplateMessageDetail($elem, $content)
{

    $($elem).empty();

    for (var el =0; el<$content.length; el++) {

        var html = [
            '<div class="row">',
                '<div class="col">',
                    '<p>Recipient Name: <span class="opacity-75 ms-2">'+$content[el].emp_first_name +" "+ $content[el].emp_last_name +'</span></p>',
                '</div>',
                '<div class="col">',
                    '<p>Recieved: <span class="opacity-75 ms-2">'+humanReadableDate($content[el].todo_created_at, true)+'</span></p>',
                '</div>',
            '</div>',
            '<div class="row">',
                '<div class="col">',
                    '<p>Mobile Number : <span class="opacity-75 ms-2">'+$content[el].emp_mobile_number+'</span></p>',
                '</div>',
                '<div class="col">',
                    '<p>Email Address: <span class="opacity-75 ms-2">'+$content[el].emp_email+'</span></p>',
                '</div>',
            '</div>',
            '<hr/>',
            '<h6>Message:</h6>',
            '<textarea class="form-control bg-white opacity-75 textarea" id="td_description" aria-describedby="help" disabled>',
                $content[el].message_content,
            '</textarea>'
        ];

        $($elem).html(html.join(""));
    }

}

function textLimit(text, length)
{
    if (text.length > length) {
        return text.substring(0, length) + '...' ;
    }

    return text;
}


function generateModelTemplateEmployee(elem, $content, $num)
{
    $($elem).empty();

    var $html = [
        '<div class="row">',
            '<div class="col">',
                '<p>Project Name:</span> <span class="opacity-75 ms-2" id="td_title">'+$content.todo_title+ '</span></p>',
                '<p>Address: <span class="opacity-75 ms-2" id="td_address">'+$content.todo_address+ '</span></p>',
            '</div>',
            '<div class="col">',
                '<p>Created At: <span class="opacity-75 ms-2" id="td_created">'+humanReadableDate($content.todo_created_at)+'</span></p>',
                '<p>Due: <span class="opacity-75 ms-2" id="td_due">'+humanReadableDate($content.todo_deadline) + " (" + getDayDescription($content.todo_deadline) + ")" + '</span></p>',
            '</div>',
        '</div><hr>',
        '<h6>Details:</h6>',
        '<textarea class="form-control bg-white opacity-75 textarea" id="td_description" aria-describedby="help" disabled>'+ $content.todo_description +'</textarea>',
        '<button type="button" class="btn float-end opacity-50 mt-3" id="copyTodo"><i class="material-icons">copy_all</i></button>'
    ];

    $($elem).append($html.join(""));

    
}

$(document).ready(function (e) {

    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
    
    function showTime(){
        var date = new Date();
        var h = date.getHours(); 
        var m = date.getMinutes(); 
        var s = date.getSeconds(); 
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("DigitalCLOCK").innerText = time;
        document.getElementById("DigitalCLOCK").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
    showTime();
})
$(document).ready(function(e){
    
    var currentpage= ($('body').attr('id'))

    $(".footer").children().each(function(item) {
        if ($(this).attr("data-info") == currentpage) {
            $(this).addClass("footer__link--active");
        }
    });

})

$(document).ready(function(e){
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $(function() {
    $('[data-toggle="tooltip"]').tooltip()
    })
})

function generateTemplateService($elem, $content)
{
    $($elem).empty();

    for (var el = 0; el<$content.length; el++) {

        id = "stitle'+$content[el].service_id+'"
    
        $html = [
            '<tr data-href="" data-bs-toggle="modal" data-info="'+$content[el].service_id+'" data-bs-target="#editService">',
            '<td><span class="fcapital">',
            '<span id="simage'+$content[el].service_id+'"><img src="'+display_image+$content[el].service_image +'" width="20" heigth="20"></span> ', 
                    '<span id="stitle'+$content[el].service_id+'">'+$content[el].service_title +'</span> ', 
                '</td>',
                '<td id="sdesc'+$content[el].service_id+'">'+ textLimit($content[el].service_description, 20)+'</td>',
                '<td>PHP <span id="sprice'+$content[el].service_id+'">'+$content[el].service_price+'</span></td>',
            '</tr>'
        ];

        $($elem).append($html.join(""));
        
    }
 
}

// function generateModalService($elemId, $content)
// {
//     for (var el = 0; el < $content.length; el++) {
        
//         $($elemId + " #eserv_name").html($content[el].service_title);
//         $($elemId + " #eserv_price").html($content[el].service_price);
//         $($elemId + " #eserv_description").html($content[el].service_description);

//     }
// }

function generateModalService($elem, $content)
{
    $($elem).empty();

    for (var el =0; el<$content.length; el++) {

        var html = [
            '<div class="row g-2 mb-3">',
            '<input type="hidden" id="eserv_id" value="' + $content[el].service_id + '">',
                '<div class="col-md">',
                    '<label for="serv_name" class="form-label">Name of Service:</label>',
                    '<input type="text" class="form-control" id="eserv_name" value="' + $content[el].service_title + '">',
                    // '<label for="serv_name" class="form-label mt-3">Price Rate:</label>',
                    // '<input class="form-control" type="number" id="eserv_price" value="'+$content[el].service_price +'">',
                '</div>',
                '<div class="col-md">',
                    '<label for="serv_price" class="form-label">Price Rate:</label>',
                    // '<span id="simage'+$content[el].service_id+'"><center><img src="'+display_image+$content[el].service_image +'" width="120" heigth="120" style="border: solid 1px; border-color: #dddddd;"></center></span> ', 
                    '<input class="form-control" type="number" id="eserv_price" value="'+$content[el].service_price +'">',
                '</div>',
            '</div>',
            
                '<div class="mb-3">',
                    '<label for="serv_description" class="form-label">Description:</label>', 
                    '<textarea class="form-control textarea2"  id="eserv_description" rows="3">'+$content[el].service_description +'</textarea>',
                '</div>',     
            '<div class=" d-grid gap-2 mb-3 mt-5">',
                '<button type="button" class="btn btn-outline-primary" id="UpdateService">Update</button>',
                '<button type="button" class="btn btn-outline-secondary" id="DeleteService">Delete</button>',
            '</div>',
        ];

        $($elem).html(html.join(""));
    }

}


function generateTemplateProduct($elem, $content)
{
    $($elem).empty();

    for (var el = 0; el<$content.length; el++) {

        id = "ptitle'+$content[el].product_id+'"
    
        $html = [
            '<tr data-href="" data-bs-toggle="modal" data-info="'+$content[el].product_id+'" data-bs-target="#editProduct">',
            '<td><span class="fcapital">',
                    '<span id="pimage'+$content[el].product_id+'"><img src="'+display_image+$content[el].product_image +'" width="20" heigth="20"></span> ', 
                    '<span id="ptitle'+$content[el].product_id+'">'+$content[el].product_name+'</span> ', 
                '</td>',
            '<td>PHP <span id="pprice'+$content[el].product_id+'">'+$content[el].product_price+'</span></td>',
            '</tr>'
        ];

        $($elem).append($html.join(""));
        
    }

}

$(document).ready(function () {
    // const tx = document.getElementsByTagName("textarea");
    const tx = document.getElementsByClassName("_txtarea");
    for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
    }
});

$("#searchclear").click(function(){
    location.reload () 
});

function renderPagination (total, id,className, offset = 0, limit = 10) {
    
    var elem = $(id);
    elem.empty();
    var html = [];
    var page = Math.ceil(total/limit);
    var offsetCount = (offset - limit) + limit;
    var minusOffset = (offset - limit);

    // html.push('<li class="page-item '+className+' ' +((minusOffset + limit) > limit > 0 ? '' : ' disabled ')+'" data-info="'+minusOffset+'"><a class="page-link" tabindex="-1">Previous</a></li>');

    for (var i = 1; i<=page; i++) {

        var label = i;

        if (i < limit) {
            html.push('<li class="page-item '+className + ((offset == i || (offset == 0 && i == 1)) ? ' active ' : '') +'" data-info="'+i+'"><a class="page-link" >'+(label)+'</a></li>');
        } else {
            html.push('<li class="page-item disabled"><a class="page-link" >...</a></li>');
        }
        
    }

    // if (minusOffset < limit) {
    //     if (offsetCount > limit) {
    //         html.push('<li class="page-item disabled"><a class="page-link" >...</a></li>');
    //     }
    // } else {
    //     if (offset>limit) {
    //         html.splice(1, minusOffset - 1);
    //         html.splice(1, 0, '<li class="page-item disabled"><a class="page-link" >...</a></li>');
    //     }
    // }

    // html.push('<li class="page-item '+className+'"><a class="page-link">Next</a></li>');
    elem.append(html.join(""));
}

NumberComms = new Intl.NumberFormat('en-US')