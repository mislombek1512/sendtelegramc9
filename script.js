let name = document.getElementById("name");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

function send() {
    if(name.value=='' || phone.value=='' || message.value==''){
        alert("Formani to'liq to'ldiring");
    } else{
        let sendmessage = `Ismi: ${name.value}; Telefon raqami: ${phone.value}; Xabar: ${message.value}`;
        sendtelegram(sendmessage);
    }

}

// sendtelegram
function sendtelegram(message) {
  let telegram_bot_id = "6794613369:AAGuCs1jr8TpMb5s2YKma1j7WvpxulEOG5k";
  let chat_id = 700727696;
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({ chat_id: chat_id, text: message }),
  };
  $.ajax(settings).done(function (response) {
    alert("Sizning xabaringiz Ibrohimga yuborildi!");
    name.value = '';
    phone.value = '';
    message.value = '';
  });
}
