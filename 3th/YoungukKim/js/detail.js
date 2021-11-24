const heart=document.getElementById("heart3");
            function hearts(){
                if (heart.style.fontWeight!="bold"){
                    heart.style.fontWeight="bold";
                }
                else {heart.style.fontWeight="normal";
                }
                }
            
            heart.addEventListener("click",hearts);




            let reviewComment = document.getElementsByClassName("reviewcomment")[0]; //인풋 창을 칭하는 div 태그
            
            let commentBox = document.getElementsByClassName("Allcomment")[0]; //전체 댓글을 포괄하는 div tag

            
            let spanID = document.createElement("span"); //id의 span
            spanID.className = "id";
            spanID.innerHTML="G-DRAGON";
            
            let spanMent = document.createElement("span"); // ment의 span
            spanMent.className = "ment";
            

            
            function test() {

                    
                
                    if (reviewComment.value.length>=1) {
                        let commentDiv = document.createElement("div"); 
                        // 댓글 한줄의 div tag
                        commentDiv.className="comment";
                        spanMent.innerHTML=reviewComment.value;
                        commentDiv.appendChild(spanID);
                        commentDiv.appendChild(spanMent);
                        commentBox.appendChild(commentDiv);
                        return;

                    }
                    else {
                        alert("댓글을 입력해주세요.");
                        return;
                    }
                
            }