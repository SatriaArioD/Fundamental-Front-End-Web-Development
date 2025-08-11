//JQUERY DOM
/*
$(document).ready(function(){
    //console.log($("h2"));
    let h2 = $("h2");
    //console.log(h2.html());
    //h2.text("Selamat Datang");
    h2.html("<em> Selamat Datang Youkoso</em>");
    h2.append("<i> Customer</i>"); //menambahkan kata di akhir h2
    h2.prepend("<u>Halo</u>"); //menambahkan kata di awal h2
    h2.after("<bold>Halooo</bold>"); //menambahkan kata/konten sesudah h2
    h2.before("<em>Hai</em>"); //menambahkan kata/konten sebelum h2
    let input = $("input");
    console.log(input.val(""));
    //h2.empty(); //untuk mengosongkan isi h2
    //h2.remove(); //untuk menghilangkan semua h2
});
*/

//JQUERY CSS
$(document).ready(function(){
    let h2 = $("h2");
    h2.html("<em> Selamat Datang Youkoso</em>");
    h2.append("<i> Customer</i>"); 
    h2.prepend("<u>Halo</u>"); 
    h2.after("<bold>Halooo</bold>"); 
    h2.before("<em>Hai</em>"); 

    //h2.addClass("biru"); //menambahkan class menggunakan jquery
    //h2.removeClass("border"); //menghilangkan class menggunakan jquery
    let style = {
        color: "salmon",
        fontSize: "100px",
    }
    h2.css(style);

    //h2.css("color", "salmon"); //menambahkan css di h2
    

    //document.querySelector("h2").classList.add("biru")
    //document.querySelector("h2").style.color = "blue"
})



