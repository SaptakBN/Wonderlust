// num scroll

var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 4000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});

// form validation


function validation() {
    var name = document.forms["userform"]["name"];
    var mail = document.forms["userform"]["email"];
    var sub = document.forms["userform"]["subject"];
    var msg = document.forms["userform"]["message"];
  
    if (name.value == "") {
      window.alert("Please enter your Name");
      name.focus();
      return false;
    }
    if (mail.value == "") {
      window.alert("Please enter a valid email ID");
      mail.focus();
      return false;
    }
    if (sub.value == "") {
      window.alert("Please the subject of quary");
      sub.focus();
      return false;
    }
    if (msg.value == "") {
      window.alert("Please write your concerns");
      msg.focus();
      return false;
    }
  
    return true;
  }

  

