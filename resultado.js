$(document).ready(
    function(){

        var params = new URLSearchParams(location.search);
        var id = params.get("opcao");
        alert(id);
        
        $.ajax({ 
            url:"https://jsonplaceholder.typicode.com/posts/"+id,
            type:"GET",
            success:function(data){ 
            console.log(data);

            $('#titulo').append(data.title);
            $('#corpo').append('<p>'+data.body+'</p>');

            
            },
            error:function(data){
        
            }
         })

         $.ajax({ 
            url:"https://jsonplaceholder.typicode.com/posts/"+id+'/comments',
            type:"GET",
            success:function(data){ 
        
            $.each(data,
                function(i,item){
                 $('#coment').append(
                      '<div>'+
                          '<b>'+item.name+'</b><br>'+
                             item.email+
                          '<p>'+item.body+'</p>'+
                       '</div><br>'   
                )
             })
        
            },
            error:function(data){
        
            }
         })         
    },
)

