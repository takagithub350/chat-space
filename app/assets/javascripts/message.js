$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="chat-main__message-list__box">
            <div class="chat-main__message-list__box__list">
              <div class="chat-main__message-list__box__list__name">
                ${message.user_name}
              </div>
              <div class="chat-main__message-list__box__list__time">
                ${message.cereate_at}
              </div>
            </div>
          </div>
          <div class="chat-main__message-list__comment">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html
    } else { 
      var html =
      `<div class="message" data-message-id=${message.id}>
        <div class="chat-main__message-list__box">
          <div class="chat-main__message-list__box__list">
            <div class="chat-main__message-list__box__list__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__box__list__time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__comment">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>
      </div>`
      return html;
    };
  }
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
});