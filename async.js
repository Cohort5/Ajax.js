window.onload = function(){
    var http = newXMLHttpRequest();
    
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
        console.log(JSON.parse(http.response));
            
        }
        // console.log(http);
    };
    
    http.open("GET" ,"data/tweets.json" , true);
    http.send("");
    console.log("test");
    
};

// //READY STATES

// 0 - request not initialized
// 1 - request has been setup
// 3 - request is in process
// 4 - request is complete


