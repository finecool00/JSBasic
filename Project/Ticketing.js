/* 영화 목록 추가 */

// var movieList = document.querySelector(".movie_select_list");

// var movieLi = document.createElement("li");
// var movieImg = document.createElement("img");
// var movieA = document.createElement("a");

// movieImg.src = "imgs/ageAll.svg";
// movieA.innerHTML = '도라이몽-징구와 하늘의 유토피아';

// movieLi.appendChild(movieImg);
// movieLi.appendChild(movieA);
// movieList.appendChild(movieLi);

/* 영화 정렬 */
//예매율 순
// var sort = document.querySelector(".movie_select_sort");
// sort.addEventListener('click', function() {
// });

/* 영화 선택결과 */
var list1 = document.querySelector(".movie_select_list .lists .a");
var list2 = document.querySelector(".movie_select_list .lists .b");
var list3 = document.querySelector(".movie_select_list .lists .c");
var list4 = document.querySelector(".movie_select_list .lists .d");
var list5 = document.querySelector(".movie_select_list .lists .e");

var movie_info_img = document.querySelector(".movie_info_img");
var movie_info_text = document.querySelector(".movie_info_text");

list1.onclick = function() {
 
    movie_info_img.src = "imgs/small04.jpg";
    movie_info_text.innerHTML = "도라에몽<br/>"
                                + "-진구와 하늘의 유토피아-";

}

list2.onclick = function() {

    movie_info_img.src = "imgs/small05.jpg";
    movie_info_text.innerHTML = "악마들"

}

list3.onclick = function() {

    movie_info_img.src = "imgs/small01.jpg";
    movie_info_text.innerHTML = "미션 임파서블<br/>"
                                + "-데드 레코딩-";

}

list4.onclick = function() {

    movie_info_img.src = "imgs/small02.jpg";
    movie_info_text.innerHTML = "스파이더맨<br/>"
                                + "-어크로스 더 유니버스-";

}

list5.onclick = function() {

    movie_info_img.src = "imgs/small03.jpg";
    movie_info_text.innerHTML = "엘리멘탈"

}

/* 극장 선택결과 */

var store_select_store1 = document.querySelector(".store_select_list > li > .a");
var store_select_store2 = document.querySelector(".store_select_list > li > .b");
var store_select_store3 = document.querySelector(".store_select_list > li > .c");

var store_select_store4 = document.querySelector(".store_select_list2 > li > .a2");
var store_select_store5 = document.querySelector(".store_select_list2 > li > .b2");
var store_select_store6 = document.querySelector(".store_select_list2 > li > .c2");

var theater_info_result = document.querySelector(".theater_info_result");


store_select_store1.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store1.innerHTML;
}
store_select_store2.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store2.innerHTML;
}
store_select_store3.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store3.innerHTML;
}

store_select_store4.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store4.innerHTML;
}
store_select_store5.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store5.innerHTML;
}
store_select_store6.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store6.innerHTML;
}


/* 날짜 선택결과 */

var marker1 = document.querySelector(".marker1");
var marker2 = document.querySelector(".marker2");
var marker3 = document.querySelector(".marker3");
var marker4 = document.querySelector(".marker4");
var marker5 = document.querySelector(".marker5");
var marker6 = document.querySelector(".marker6");

var marking1 = document.querySelector(".marking1");
var marking2 = document.querySelector(".marking2");
var marking3 = document.querySelector(".marking3");
var marking4 = document.querySelector(".marking4");
var marking5 = document.querySelector(".marking5");
var marking6 = document.querySelector(".marking6");

var lili = document.querySelectorAll(".date_list > li");

var result_dow1 = document.querySelector(".dows1");
var result_dow2 = document.querySelector(".dows2");
var result_dow3 = document.querySelector(".dows3");
var result_dow4 = document.querySelector(".dows4");
var result_dow5 = document.querySelector(".dows5");
var result_dow6 = document.querySelector(".dows6");

var result_dow_num1 = document.querySelector(".dow_num1");
var result_dow_num2 = document.querySelector(".dow_num2");
var result_dow_num3 = document.querySelector(".dow_num3");
var result_dow_num4 = document.querySelector(".dow_num4");
var result_dow_num5 = document.querySelector(".dow_num5");
var result_dow_num6 = document.querySelector(".dow_num6");

var month = document.querySelector(".year_month_box2 > .month");
var theater_info_date = document.querySelector(".theater_info_date");


marker1.onclick = function() {
    
  

    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";

    marking1.style.display = "inline"
    marking1.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num1.innerHTML + '일(' + result_dow1.innerHTML + ')';

}
marker2.onclick = function() {

    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";

    marking2.style.display = "inline";
    marking2.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num2.innerHTML + '일(' + result_dow2.innerHTML + ')';
}
marker3.onclick = function() {

    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";

    marking3.style.display = "inline";
    marking3.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + + result_dow_num3.innerHTML + '일(' + result_dow3.innerHTML + ')';
}
marker4.onclick = function() {

    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";

    marking4.style.display = "inline";
    marking4.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num4.innerHTML + '일(' + result_dow4.innerHTML + ')';
}
marker5.onclick = function() {

    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";

    marking5.style.display = "inline";
    marking5.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num5.innerHTML + '일(' + result_dow5.innerHTML + ')';
}
marker6.onclick = function() {

    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";

    marking6.style.display = "inline";
    marking6.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num6.innerHTML + '일(' + result_dow6.innerHTML + ')';
}


var placeholder_hidden = document.querySelector(".placeholder_hidden");

if(theater_info_result != null && theater_info_date != null) {
    placeholder_hidden.style = "visibility:hidden";
}


























