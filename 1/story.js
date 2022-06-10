$(document).ready(function()
{
      $("p").hide();
      $('button').click(function(){
            $("p").empty();
            const name = $(".input").val();
            const character = $(".input2").val();
            const adv = $(".input3").val();
            const adj = $(".input4").val();
            let story = `One day, my friend ${name} was visiting Astana and ran into ${adj} ${character}, who argued ${adv}`
            $("p").append(story)
            $("p").show()
      })
      //  ​$(".textDiv").text(function() {
      //   return $(this).text().replace("name", "Alibi")
      //  });​​​​​
})