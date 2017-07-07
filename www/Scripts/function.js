function GetCategory() {
    $.ajax({
        url: 'http://api.le-av.com/api/category/GetCategory',
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var catItem = "";
            for (var i = 0; i < msg.length; i++) {
                catItem += "<a class=\"dropdown-item\" href=\"category.html?cat_id=" + msg[i].cat_id+ "\">" + msg[i].cat_name+ "</a>";
            }
            $("#dropdown-menu").html(catItem);
        },
        error: function (e) {
            console.log("error");
        }
    });    
}

function GetActor() {
    $.ajax({
        url: 'http://api.le-av.com/api/Actor/GetActor',
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var actorItem = "";
            for (var i = 0; i < msg.length; i++) {
                actorItem += "<div class=\"col-md-2 col-lg-2 col-xl-2\" style=\"text-align:center\">";
                actorItem += "<div style=\" width:100%; margin:3px; padding:5px; background-color:#f45cf6;\">";
                actorItem += "<a href =\"actor_detail.html?id="+msg[i].actor_id+"\" style=\"color:#fff;\">";
                actorItem += "<img src=\""+msg[i].cover_path+"\" class=\"img-fluid\" />";
                actorItem += "<br />";
                actorItem += msg[i].actor_name;
                actorItem += "</a>";
                actorItem += "</div>";
                actorItem += "</div>  ";              
            }
            //console.log(actorItem);
            $("#actorDiv").html(actorItem);
        },
        error: function (e) {
            console.log("error");
        }
    });    
}