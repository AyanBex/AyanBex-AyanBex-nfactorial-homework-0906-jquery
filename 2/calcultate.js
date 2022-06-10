$(document).ready(function()
{
      $("p").hide();
      $('button').click(function(){
            $("p").empty();
            var width = $(".input").val();
            var height = $(".input2").val();
            var noc = $(".input3").val();
            var cal = (Math.trunc((width * height * noc) / 8000) );
            let res;
            if(cal >= 10) {
                  res = `File is ${cal}KB which is larger than expected`
            } else {
                  res = `File is ${cal}KB which is ok`
            }
            $("p").append(res)
            $("p").show()
      })
})