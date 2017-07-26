$(document).ready(function(){
    //default-css when js is enabled
    // if($('#slider-templete'))
    // {}
    // $(".navbar-default").addClass('override-navbar')
    // $(".navbar-brand").addClass('override-navbar-brand')
    // $(".primary-menu").addClass('override-primary-menu')
    // $(".nav-link").on("mouseover",function(){
    //       $(".nav-link").css('color','#fff');
    //     });

    //fetching the screenHeight
    var screenHeight= $(window).height();

    console.log($(window).height());
    console.log($("#img-slider").css("height"));
    //scroll animation
    $(document).on("scroll",function(){
      if($(document).scrollTop() > 100/*$("#img-slider").css("height")*/)
      {
        console.log("if statement");
        $(".upper-header").addClass('hidden')
        // $(".navbar-brand").removeClass('override-navbar-brand')
        // $(".primary-menu").removeClass('override-primary-menu')
      }
      else {
        console.log("else statement");
         $(".upper-header").removeClass('hidden')
        // $(".navbar-brand").addClass('override-navbar-brand')
        // $(".primary-menu").addClass('override-primary-menu')
      }
    });
    //on maximize
    $(document).on("",function(){});
    //set defaults
    // $(".carousel-image").css('min-height',screenHeight+"px");
    // $(".carousel-inner").css("height",screenHeight+"px");
    $("#aim_source").click(function(){
      $('html, body').animate({
        scrollTop:$("#What-We-Do").offset().top-0
      }, 3000);
    });
      $("#packages_source").click(function(){
        $('html, body').animate({
          scrollTop:$("#packages").offset().top-0
        }, 3000);
      });

      $("#contact_source").click(function(){
        $('html, body').animate({
          scrollTop:$("#contact-us").offset().top-0
        }, 3000);
      });

      $("#developer_source").click(function(){
        $('html, body').animate({
          scrollTop:$("#developer").offset().top-0
        }, 3000);
      });
      if($('#img-slider').css('top') >= screenHeight)
      {
        $('#img-slider').css('background-color','rgba(256,256,256,0.5)');
      }
    });

$(document).ready(function($) {

  $("#client_form").submit(function(event) {

    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var number = $("#number").val();
    var subject = $("#subject").val();
    var comments = $("#comments").val();

    // console.log(email);

    // Set Validation

    // validate_form();



    if ( name.length == 0 || name.length <= 3 || name.length == " " )
    {
      alert("Please Enter Valid Name")
    }
    else if ( number.length == 0 || number.length <= 9 || number.length == " " )
    {
      alert("Please Enter Valid Number 10 Digits");
    }
    else if ( subject.length == 0 || subject.length <= 3 || subject.length == " " )
    {
      alert("Please Enter Proper Subject");
    }
    else if ( comments.length == 0 || comments.length <= 10 || comments.length == " " )
    {
      alert("Please Enter Proper Comment");
    }
    else if( !validateEmail(email) )
    {
      alert("Enter Emial Properly");
    }

    else
    {
      // Doing AJAX
      $.ajax({
        url: 'mail.php',

        type: 'POST',
        dataType: 'html',
        data: {c_name: name, c_email: email, c_number: number, c_subject: subject, c_message: comments },
        beforeSend: function() {
              $(".loader-icon").show();
          },
        success: function(data)
        {
          //console.log(data);
          console.log("data" + data );
          if (data == 'Mail Sent') {
            alert('Mail Sent');
            $(".loader-icon").fadeOut('slow');
            /*$(".show-text-message").append('<p class="text-danger">Your mail is sent</p>').fadeOut('slow');*/
            $("#client_form")[0].reset();
          }
        },
      });
    }



  });

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }


});
