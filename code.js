hovered = false;
async function yeet(htmlelement){

    react_links = { "https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/r4h1SXzlm0B.png" : "love",
            "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/fqb8rfFxpfX.png" : "like",
            "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7-3YmWpFyGJ.png" : "wow",
            "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/pPGGfJHu68A.png" : "care",
            "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/yMAXL0cdq9q.png" : "haha",
            "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/3uLTUTwjP7O.png" : "angry",
            "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/bltK5gY9gdu.png" : "sad"
    };
    
    while(!hovered || htmlelement.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh oo9gr5id hzawbc8m").length == 0){
        await sleep(500);
    }

    time = htmlelement.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh oo9gr5id hzawbc8m")[0].innerText;
    time = time.substring(time.indexOf(",") + 1)
    all_comments_button = htmlelement.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb bp9cbjyn pq6dq46d sf5mxxl7")[0];
    all_comments_button.click();
    await sleep(500);
    all_comments_button = htmlelement.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j muag1w35 enqfppq2 jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m")[2];
    all_comments_button.click();
    await sleep(500);
    do {
        more_comments_and_reply_list = htmlelement.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j muag1w35 enqfppq2 jq4qci2q a3bd9o3v lrazzd5p m9osqain");
        await sleep(500);
    } while(!more_comments_and_reply_list[2]);
    while(more_comments_and_reply_list[2]){
        more_comments_and_reply_list[2].click();
        await sleep(500);
        more_comments_and_reply_list = htmlelement.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j muag1w35 enqfppq2 jq4qci2q a3bd9o3v lrazzd5p m9osqain");
    }

    information = {};

    comments = htmlelement.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi lrazzd5p oo9gr5id");
    for(var i = 0; i < comments.length; i++){
        name = comments[i].innerText;
        if(information[name]){
            information[name][0]++;
        }
        else{
            information[name] = [1, "None", false];
        }
    }

    all_reacts = htmlelement.getElementsByClassName("gpro0wi8 cwj9ozl2 bzsjyuwj ja2t1vim")[0].click();
    while(!htmlelement.getElementsByClassName("q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 otl40fxz cxgpxx05 rz4wbd8a sj5x9vvc a8nywdso")[0]){
        await sleep(500);
    }
    while(htmlelement.getElementsByClassName("dati1w0a sj5x9vvc hv4rvrfc cxgpxx05 j83agx80 bp9cbjyn").length > 0){
        await sleep(500);
        htmlelement.getElementsByClassName("q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 otl40fxz cxgpxx05 rz4wbd8a sj5x9vvc a8nywdso")[0].scrollBy(0,1000);   
    }
    reacts = htmlelement.getElementsByClassName("q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 otl40fxz cxgpxx05 rz4wbd8a sj5x9vvc a8nywdso")[0].getElementsByClassName("ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr");
    for(var i = 0; i < reacts.length; i++){
        name = reacts[i].children[1].firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.textContent;
        react = react_links[reacts[i].firstChild.firstChild.firstChild.firstChild.children[2].firstChild.firstChild.firstChild.src]
        if(information[name]){
            information[name][1] = react;
        }
        else{
            information[name] = [0, react, false];
        }
    }

    possible_buttons = htmlelement.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh gpro0wi8 dwo3fsh8 ow4ym5g4 auili1gw du4w35lb gmql0nx0");
    for(var i = 0; i < possible_buttons.length; i++){
        possible_buttons[i].click();
    }
    while(!htmlelement.getElementsByClassName("dati1w0a hv4rvrfc f0kvp8a6 j83agx80")[0]){
        await sleep(500);
    }
    
    while(htmlelement.getElementsByClassName("j83agx80 pybr56ya hv4rvrfc f10w8fjw dati1w0a")[0]){
        htmlelement.getElementsByClassName("dati1w0a hv4rvrfc f0kvp8a6 j83agx80")[0].firstChild.scrollBy(0,1000);
        await sleep(500);
    }
    while(!htmlelement.getElementsByClassName("dati1w0a hv4rvrfc f0kvp8a6 j83agx80")[0]){
        await  sleep(500);
    }
    shares = htmlelement.getElementsByClassName("dati1w0a hv4rvrfc f0kvp8a6 j83agx80")[0].getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p");
    s = "";
    for(var i = 0; i < shares.length; i++){
        name = shares[i].innerText;
        if(information[name]){
            information[name][2] = true;
        }
        else{
            information[name] = [0, "None", true];
        }
    }

    close = htmlelement.getElementsByClassName("hu5pjgll m6k467ps sp_6vYwcjvw5IC_2x sx_50b0e1");
    for(var i = 0; i < close.length; i++){
        close[i].click();
    }
    for (i in information){
        
        s += time + "," + i.replaceAll(",",".") +"," + information[i].join(",") + "\r\n";
    }
    console.log(s);
}
document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 b1v8xokw")[0].onmouseover = function lmao(){ hovered = true;}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
yeet(document);