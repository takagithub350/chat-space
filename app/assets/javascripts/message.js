$(function(){


  var buildHTML = function(message) {

    var template = 
  `<div class="chat-main__message-list__box__list">
    <div class="chat-main__message-list__box__list__name">
      ${message.user_name}
    </div>
    <div class="chat-main__message-list__box__list__time">
      ${message.created_at}
    </div>
  </div>`

    if (message.content && message.image) {
      var html = `<div class="message" data-message-id=${message.id}>
        ${template}
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
            <img src="${message.image}" class="lower-message__image" >
          </div>
        </div>`

    } else if (message.content) {
      var html = `<div class="message" data-message-id=${message.id} >
         ${template}
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`

    } else if (message.image) {
      var html = `<div class="message" data-message-id=${message.id} >
        ${template}
        <div class="lower-message"> 
          <img src="${message.image}" class="lower-message__image"
        </div>
      </div>`
    };
    return html;
  };
  

  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
        alert("メッセージ送信に失敗しました。");
    })
  });

  var reloadMessages = function(){
    var last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      if(messages.length !== 0){
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function(){
      alert('error');
    });
  };

  if(document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 7000);
  }
});
