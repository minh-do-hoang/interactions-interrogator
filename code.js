hovered = false;
async function yeet(htmlelement){
    while(!hovered){
        await sleep(500);
    }
    main = htmlelement;
    if(htmlelement.querySelectorAll('div[role="main"]')){
        main = htmlelement.querySelectorAll('div[role="main"]')[0].children[3].firstChild;
    }
//     root = htmlelement.getElementsByClassName("root")
    while(!htmlelement.querySelectorAll('span[role="tooltip"]')[0]){
        await sleep(500);
    }
    time = htmlelement.querySelectorAll('span[role="tooltip"]')[0].firstChild.firstChild.firstChild.innerText;
    time = time.substring(time.indexOf(",") + 1)
    all_comments_button = main.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb bp9cbjyn pq6dq46d sf5mxxl7")[0];
    all_comments_button.click();
    await sleep(500);
    all_comments_button = document.querySelectorAll('div[role="menuitem"]')[2];
    all_comments_button.click();
    
    while(!main.getElementsByClassName("j83agx80 bkfpd7mw jb3vyjys hv4rvrfc qt6c0cv9 dati1w0a l9j0dhe7")[1]){
        await sleep(500);
    }
    while(!main.getElementsByClassName("j83agx80 bkfpd7mw jb3vyjys hv4rvrfc qt6c0cv9 dati1w0a l9j0dhe7")[1].firstChild){
        await sleep(500);
    }
    while(main.getElementsByClassName("j83agx80 bkfpd7mw jb3vyjys hv4rvrfc qt6c0cv9 dati1w0a l9j0dhe7")[1].firstChild){
        main.getElementsByClassName("j83agx80 bkfpd7mw jb3vyjys hv4rvrfc qt6c0cv9 dati1w0a l9j0dhe7")[1].firstChild.children[1].click();
        await sleep(500);
    } 
    replies = main.querySelector("ul:not([class])").children;    
    for(var i = replies.length - 1; i >= 0; i--){
        if(replies[i].lastChild.firstChild.firstChild){
            replies[i].lastChild.firstChild.firstChild.lastChild.click();
        }
    }
    information = {};

    comments = main.querySelector("ul:not([class])").querySelectorAll('a[role="link"][tabindex="0"]');
    for(var i = 0; i < comments.length; i++){
        comment = comments[i].querySelectorAll('span[dir="auto"]')[0];
        if(comment){
            name = comment.innerText;
            if(information[name]){
                information[name][0]++;
            }
            else{
                information[name] = [1, false, false];
            }
        }
    }
    await sleep(500);
    all_reacts = main.getElementsByClassName("gpro0wi8 cwj9ozl2 bzsjyuwj ja2t1vim")[0].click();
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
        if(information[name]){
            information[name][1] = true;
        }
        else{
            information[name] = [0, true, false];
        }
    }

    possible_buttons = main.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh gpro0wi8 dwo3fsh8 ow4ym5g4 auili1gw du4w35lb gmql0nx0");
    for(var i = 0; i < possible_buttons.length; i++){
        possible_buttons[i].click();
    }
    while(!htmlelement.getElementsByClassName("dati1w0a hv4rvrfc f0kvp8a6 j83agx80")[0]){
        await sleep(500);
    }
    while(htmlelement.getElementsByClassName("j83agx80 cbu4d94t lzcic4wl ni8dbmo4 stjgntxs oqq733wu l9j0dhe7 du4w35lb cwj9ozl2 ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi nwpbqux9 gc7gaz0o k4urcfbm")[1].getElementsByClassName("j83agx80 pybr56ya hv4rvrfc f10w8fjw dati1w0a")[0]){
        htmlelement.getElementsByClassName("dati1w0a hv4rvrfc f0kvp8a6 j83agx80")[0].firstChild.scrollBy(0,1000);
        await sleep(500);
    }
    await sleep(500);
    shares = htmlelement.getElementsByClassName("dati1w0a hv4rvrfc f0kvp8a6 j83agx80")[0].getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p");
    s = "";
    for(var i = 0; i < shares.length; i++){
        name = shares[i].innerText;
        console.log(name)
        if(information[name]){
            information[name][2] = true;
        }
        else{
            information[name] = [0, false, true];
        }
    }

    document.querySelectorAll('div[aria-label="Close"]')[0].click();
    for (i in information){
        
        s += time + "," + i.replaceAll(",",".") +"," + information[i].join(",") + "\r\n";
    }
    console.log(s);
}
document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 b1v8xokw")[0].onmouseover = function lmao(){ hovered = true; console.log("yeet")}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
yeet(document);
