const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function copy_to_clipboard() {
  email_data = document.getElementById('email_button_message');
  email_data.innerText = "Copied to clipboard!";
  copyText("solanav@qq.com");

  sleep(2000).then(() => {
      email_data.innerText = "Email";
  });
}

function copyText(text) {
  function selectElementText(element) {
      if (document.selection) {
          var range = document.body.createTextRange();
          range.moveToElementText(element);
          range.select();
      } else if (window.getSelection) {
          var range = document.createRange();
          range.selectNode(element);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
      }
  }
  var element = document.createElement('DIV');
  element.textContent = text;
  document.body.appendChild(element);
  selectElementText(element);
  document.execCommand('copy');
  element.remove();
}

function openPost(evt, post) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(post).style.display = "block";
  evt.currentTarget.className += " active";
}