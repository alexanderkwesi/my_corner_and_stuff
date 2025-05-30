if (typeof document !== "undefined") 
    {


    const backgd = document.getElementById('backgrd') as HTMLDivElement;
    backgd.style.position = "fixed";
    backgd.style.marginTop = "-5vmin";
    backgd.style.marginLeft = "-1vmin";
    backgd.style.borderBottomLeftRadius = "30vmin";    
    backgd.style.borderBottomRightRadius = "30vmin";
    backgd.style.transform = "rotateY(35deg)";


    const backgred = document.getElementById('backgred') as HTMLDivElement;
    backgred.style.position = "fixed";
    backgred.style.marginTop = "-5vmin";
    backgred.style.marginLeft = "1450px";
    backgred.style.borderBottomLeftRadius = "30vmin";    
    backgred.style.borderBottomRightRadius = "30vmin";
    backgred.style.transform = "rotateY(35deg)";


    const img_src = document.getElementById('imgsrc') as HTMLImageElement;
    img_src.src = './construction.gif';
    img_src.style.width = '1000px';
    img_src.style.height = '700px';
    img_src.style.marginTop = "5vmin";
    img_src.style.marginLeft = "32vmin";
    img_src.style.borderRadius = "30vmin";
    

    const backcyan = document.getElementById('backcyan') as HTMLDivElement;
    backcyan.style.position = "fixed";
    backcyan.style.marginTop = "-0vmin";
    backcyan.style.marginLeft = "-1vmin";
    backcyan.style.borderTopLeftRadius = "30vmin";    
    backcyan.style.borderTopRightRadius = "30vmin";
    backcyan.style.transform = "rotateY(35deg)";


    const backgcyan = document.getElementById('backgcyan') as HTMLDivElement;
    backgcyan.style.position = "fixed";
    backgcyan.style.marginTop = "-0vmin";
    backgcyan.style.marginLeft = "1450px";
    backgcyan.style.borderTopLeftRadius = "30vmin";    
    backgcyan.style.borderTopRightRadius = "30vmin";
    backgcyan.style.transform = "rotateY(35deg)";



    const cuppy= document.getElementById('cuppy') as HTMLDivElement;
    cuppy.style.position = "fixed";
    cuppy.style.top = "90vmin";
    cuppy.style.marginLeft = "15vmin";
    /*(URL('/Users/alexanderkwesi/Desktop/my-website-alex-o-kwesi/we\ are\ under\ cconstruction.gif'));*/

   
        const date:Date = new Date();
        const daet = document.getElementById('dated') as HTMLSpanElement;
        daet.textContent = date.getFullYear().toString();

    

    /*window.addEventListener('mouseover', getdate_ontime);*/
}
