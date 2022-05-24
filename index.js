$(document).ready(
    function(){  
        $.ajax({ 
            url:"https://jsonplaceholder.typicode.com/posts/",
            type:"GET",
            success:function(data){ 
            //console.log(data);

            $.each(data,
                function(i,item){
                //console.log(item.userId);

                $('#resultado').append(
                    '<li><a href="resultado.html?opcao=' +item.id+'">'+item.title+'</a></li>'
                )
             })

            },
            error:function(data){

            }
         })
 })
