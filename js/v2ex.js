var about = '' 
        + "\n"
        + "\n"
        +"***********************************************************************************************************\n"
        + "***********************************************************************************************************\n"
        + "\n"
        + "                                         *** v2ex 楼层引用***\n"                                 
        + "\n"
		+ "                                       安装此插件后，引用回复自动显示楼层。\n"
        + "\n"
        + "                                                                           by tonghs\n"
        + "                                                                           http://tonghs.com\n"
        + "\n"
        + "***********************************************************************************************************\n"
        + "***********************************************************************************************************\n";
        + "\n"
        + "\n"

console.log(about);
$(".fr > a").attr("onclick", "");

$(".fr > a").click(function(){
    $('body').scrollTop($('body').height());

    var no = $(this).parent(".fr").children(".no").text();
    var name = $(this).parent(".fr").parent().children("strong").children("a").text();

    var val = $("#reply_content").val();
    var exists = "@" + name + " (" +  no + "楼)";
    var msg = "";
    if (val != "" && val != null && val.indexOf(exists) >= 0){
        msg = val.replace(exists + " \n" , "");
        msg = msg.replace(exists + " " , "");
        msg = msg.replace(exists, "");
    }else{
        if (val != "" && val.lastIndexOf("\n") != val.length - 1){
            msg = val + "\n@" + name + " (" +  no + "楼) ";
        }else{
            msg = val + "@" + name + " (" +  no + "楼) ";
        }
    }
    $("#reply_content").val(msg);
});
