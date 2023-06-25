/**
*
*/
// 这段 JavaScript 代码是实现图片轮播功能的。

// 首先，它创建了一个名为 scroll_img 的数组，用于存储图片的地址。然后，它定义了一个名为 nowPic 的变量，用于存储当前显示的图片编号，默认值为 2。

// 接下来，它定义了一个名为 loopShow 的函数，用于切换图片和设置对应的数字样式。这个函数接受一个参数 d1，表示要显示的图片编号。

// 在函数内部，它首先将当前图片编号设置为传入的参数 d1，然后将图片的 src 属性设置为 scroll_img 数组中对应编号的图片地址。接着，它循环遍历数字样式，并根据当前图片编号设置相应的样式。最后，它判断当前图片编号是否大于等于 5，如果是则将其重置为 1，否则将其加 1。

// 最后，它使用 setInterval 函数来循环调用 loopShow 函数，每隔 2 秒钟切换一次图片
var scroll_img = new Array();
for (var i = 0; i < 5; i++) {
    scroll_img[i] = "images/pic_scroll" + (i + 1) + ".jpeg";
}
var nowPic = 2;
function loopShow(d1) {
    nowPic = d1;
    document.getElementById("scroll_img").src = scroll_img[nowPic - 1];
    for (var i = 1; i < 6; i++) {
        if (nowPic == i) {
            document.getElementById("scroll_number" + i).className = "scroll_number_over";
        } else {
            document.getElementById("scroll_number" + i).className = "scroll_number_out";
        }
    }
    if (nowPic >= 5) {
        nowPic = 1;
    } else {
        nowPic++;
    }
}
setInterval("loopShow(nowPic)", 2000);

// 这段 JavaScript 代码是实现网站导航切换功能的。

// 首先，它创建了一个名为 public_id 的数组，用于存储网站导航对应的内容块的 id。

// 接下来，它定义了一个名为 Move 的函数，用于切换内容块和设置导航样式。这个函数接受两个参数，分别是要显示的内容块的 id 和被点击的导航元素 that。

// 在函数内部，它首先获取所有导航元素，并将它们的样式重置为默认值。然后，它将被点击的导航元素的样式设置为选中状态。接着，它循环遍历所有导航元素，并根据当前导航元素是否与被点击的导航元素相同来设置对应内容块的显示状态。最后，它将被点击的导航元素对应的内容块设置为显示状态。

// 最终，当用户点击导航元素时，就会调用 Move 函数来切换内容块并设置导航样式。
var public_id = ["pcu1", "pcu2", "pcu3", "pcu4", "pcu5"];
function Move(data, that) {
    var public_nav = document.getElementsByClassName("public_nav")[0].getElementsByTagName("div");
    for (var i = 0; i < 5; i++) {
        public_nav[i].style = "color:#aaa;background-color:rgba(0,0,0,0);";
    }
    that.style = "color:#f3c258;background-color:rgba(50,50,50,0.7);";
    for (var i = 0; i < 5; i++) {
        if (public_nav[i] == data) {
            document.getElementById(public_id[i]).className = "content_block";
        } else {
            document.getElementById(public_id[i]).className = "content_none";
        }
    }
    document.getElementById(data).className = "content_block";
}

// 这段 JavaScript 代码是实现游戏分类切换功能的。

// 首先，它创建了一个名为 games_id 的数组，用于存储游戏分类对应的内容块的 id。

// 接下来，它定义了一个名为 gamesMove 的函数，用于切换内容块和设置游戏分类样式。这个函数接受两个参数，分别是要显示的内容块的 id 和被点击的游戏分类元素 that。

// 在函数内部，它首先获取所有游戏分类元素，并将它们的样式重置为默认值。然后，它将被点击的游戏分类元素的样式设置为选中状态。接着，它循环遍历所有游戏分类元素，并根据当前游戏分类元素是否与被点击的游戏分类元素相同来设置对应内容块的显示状态。最后，它将被点击的游戏分类元素对应的内容块设置为显示状态。

// 最终，当用户点击游戏分类元素时，就会调用 gamesMove 函数来切换内容块并设置游戏分类样式。
var games_id = ["gcdiv1", "gcdiv2", "gcdiv3", "gcdiv4", "gcdiv5", "gcdiv6", "gcdiv7", "gcdiv8"];
function gamesMove(data, that) {
    var games_item_subnav = document.getElementsByClassName("games_item_subnav")[0].getElementsByTagName("div");
    for (var i = 0; i < 8; i++) {
        games_item_subnav[i].style = "color:#aaa;border-bottom:rgba(0,0,0,0) 3px solid;";
    }
    that.style = "border-bottom:#f3c258 3px solid;color:black;";
    for (var i = 0; i < 8; i++) {
        if (games_item_subnav[i] == data) {
            document.getElementById(games_id[i]).className = "content_block";
        } else {
            document.getElementById(games_id[i]).className = "content_none";
        }
    }
    document.getElementById(data).className = "content_block";
}

// 这段 JavaScript 代码是实现内容分类切换功能的。

// 首先，它创建了一个名为 contents_id 的数组，用于存储内容分类对应的内容块的 id。

// 接下来，它定义了一个名为 contentsMove 的函数，用于切换内容块和设置内容分类样式。这个函数接受两个参数，分别是要显示的内容块的 id 和被点击的内容分类元素 that。

// 在函数内部，它首先获取所有内容分类元素，并将它们的样式重置为默认值。然后，它将被点击的内容分类元素的样式设置为选中状态。接着，它循环遍历所有内容分类元素，并根据当前内容分类元素是否与被点击的内容分类元素相同来设置对应内容块的显示状态。最后，它将被点击的内容分类元素对应的内容块设置为显示状态。

// 最终，当用户点击内容分类元素时，就会调用 contentsMove 函数来切换内容块并设置内容分类样式。
var contents_id = ["item_t1", "item_t2", "item_t3"];
function contentsMove(data, that) {
    var contents_item_subnav = document.getElementsByClassName("contents_item_subnav")[0].getElementsByTagName("div");
    for (var i = 0; i < 3; i++) {
        contents_item_subnav[i].style = "color:#aaa;border-bottom:rgba(0,0,0,0) 3px solid;";
    }
    that.style = "border-bottom:#f3c258 3px solid;color:black;";
    for (var i = 0; i < 3; i++) {
        if (contents_item_subnav[i] == data) {
            document.getElementById(contents_id[i]).className = "content_block";
        } else {
            document.getElementById(contents_id[i]).className = "content_none";
        }
    }
    document.getElementById(data).className = "content_block";
}

// 这段代码定义了一个名为 "herosskinMove" 的函数，该函数用于在页面上切换英雄皮肤内容。具体来说，它接受两个参数：data 和 that。其中，data 是要显示的内容块的 ID，而 that 是当前被点击的子导航元素。

// 首先，该函数获取了所有子导航元素，并将前三个元素的样式重置为默认值（黑灰色文本和无边框）。然后，它将传递给函数的子导航元素（即“that”）的样式设置为选中状态（黄色底部边框和黑色文本）。

// 接下来是一个循环，它遍历了三个可能的内容块，并根据当前正在处理的元素与传递给函数的元素是否匹配来确定哪个内容块应该被显示或隐藏。最后，它将 data 参数指定的内容块的类名设置为 "content_block"，以便将其显示出来。
var herosskin_id = ["heros_skin_contents1", "heros_skin_contents2", "heros_skin_contents3"];
function herosskinMove(data, that) {
    var heros_skin_item_subnav = document.getElementsByClassName("heros_skin_item_subnav")[0].getElementsByTagName("div");
    for (var i = 0; i < 3; i++) {
        heros_skin_item_subnav[i].style = "color:#aaa;border-bottom:rgba(0,0,0,0) 3px solid;";
    }
    that.style = "border-bottom:#f3c258 3px solid;color:black;";
    for (var i = 0; i < 3; i++) {
        if (heros_skin_item_subnav[i] == data) {
            document.getElementById(herosskin_id[i]).className = "content_block";
        } else {
            document.getElementById(herosskin_id[i]).className = "content_none";
        }
    }
    document.getElementById(data).className = "content_block";
}

// 这段代码定义了两个函数，它们都用于在网页上实现一些交互效果。这些函数使用 JavaScript 操作 DOM 元素，根据用户的点击行为来显示或隐藏特定的内容块。

// 第一个函数名为 "herosskinMove"，它接受两个参数，分别是要显示的内容块的 ID 和当前被点击的子导航元素。首先，该函数获取所有子导航元素并将前三个元素的样式重置为默认值。然后，它将传递给函数的子导航元素的样式设置为选中状态。接下来是一个循环，遍历了三个可能的内容块，并根据当前正在处理的元素与传递给函数的元素是否匹配来确定哪个内容块应该被显示或隐藏。最后，它将指定的内容块的类名设置为 "content_block"，以便将其显示出来。

// 第二个函数名为 "title1Move"，它也接受两个参数，分别是要显示的内容块的 ID 和当前被点击的标题元素。该函数的逻辑与 "herosskinMove" 类似，不同之处在于它处理的是标题元素而不是子导航元素，并且有八个可能的内容块而不是三个。

var titles1_id = ["item_contents_1", "item_contents_2", "item_contents_3", "item_contents_4", "item_contents_5", "item_contents_6",
    "item_contents_7", "item_contents_8"];
function title1Move(data, that) {
    var item_contents1 = document.getElementsByClassName("item_title1")[0].getElementsByTagName("div");
    for (var i = 0; i < 8; i++) {
        item_contents1[i].style = "color:black;background-color:#f5f5f5;";
    }
    that.style = "color:white;background-color:#f3c258;";
    for (var i = 0; i < 8; i++) {
        if (item_contents1[i] == data) {
            document.getElementById(titles1_id[i]).className = "content_block";
        } else {
            document.getElementById(titles1_id[i]).className = "content_none";
        }
    }
    document.getElementById(data).className = "content_block";
}

var titles2_id = ["item_contents_9", "item_contents_10", "item_contents_11", "item_contents_12", "item_contents_13", "item_contents_14",
    "item_contents_15"];
function title2Move(data, that) {
    var item_contents2 = document.getElementsByClassName("item_title2")[0].getElementsByTagName("div");
    for (var i = 0; i < 7; i++) {
        item_contents2[i].style = "color:black;background-color:#f5f5f5;";
    }
    that.style = "color:white;background-color:#f3c258;";
    for (var i = 0; i < 7; i++) {
        if (item_contents2[i] == data) {
            document.getElementById(titles2_id[i]).className = "content_block";
        } else {
            document.getElementById(titles2_id[i]).className = "content_none";
        }
    }
    document.getElementById(data).className = "content_block";
}

