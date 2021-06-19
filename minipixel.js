let elements = document.getElementsByClassName("contact-field");

let hidePlaceholder = function() {
      this.placeholder='';
  }

let showPlaceholder = function(event, text) {
    if (event.target.value === "") {
        event.target.placeholder = text;
    }
};

for (var i = 0; i < elements.length; i++) {
    let placeholder = elements[i].placeholder;
    elements[i].addEventListener('focusin', hidePlaceholder, false);
    elements[i].addEventListener('blur', function(event) {showPlaceholder(event, placeholder)}, false)
}