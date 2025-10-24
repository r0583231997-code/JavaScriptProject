// פונקציה שתעביר דף
function movePage(id)
{
    // שמירה במחסנית
    sessionStorage.setItem('id',id)
    // מעבר לדף הבא
    products()
    
}
function picH() {
    getName()
    let hoverPic = document.getElementById('pic1')
    let pic60 = document.getElementById('spaceilSale')
    if (pic60 != null && hoverPic!=null) {
        count = 2
        event.preventDefault()
        count2 = 2
        setInterval(
            () => {
                if (count2 == 3)
                    count2 = 1


                pic60.src = '../pics/picSale/' + count2 + '.png'
                count2++
            }

            , 500)
        setInterval(

            //אין צורך בשם הפונקציה - כי לא ניתן לזמן אותה ממקום נוסף
            //function וכן המילה 
            // מיותרת כי ידוע שמתקבל כאן פונקציה
            //יש להוסיף חץ בין ראש הפונקציה לתוכן
            () => {
                if (count == 6)
                    count = 1
                
                hoverPic.src = '../pics/hover/' + count + '.png'
                count++
            }
            , 2000)

        inSale()
    }
}

function inSale(){
    // מחפש את המקום לגלות אותו
    let h=document.getElementById('inSale')
    h.hidden=false
    // יבנה מערך ויכניס את כל המוצרים שבמבצע
    let inSale=[]
    for(let i=0; i<AllData.length; i++)
    {
        if(AllData[i].isSale=='yes')
        {
            let productInSale = {
                CategoryId: AllData[i].CategoryId,
                nameP: AllData[i].nameP,
                price: AllData[i].price,
                details: AllData[i].details,
                isSale: AllData[i].isSale,
                img: AllData[i].img,
                amount: AllData[i].amount
            }
            inSale.push(productInSale)
        }
    }
    // console.log(inSale);
    
    // רוצה שיביא לי מערך של 4 תמונות לא חוזרות על עצמם מתוך המוצרים שבמבצע
    let fore=[]
    let index=0
    let count=0
    while(count<4)
    {
        let r = Math.floor(Math.random() * inSale.length)
        let j
        for(j=0;j<fore.length && fore[j]!=r;j++);
        if(j==fore.length)
        {
            fore[index]=r
            index++
            count++
            
        } 
    }
    // console.log(fore);
    // debugger
    // תיצר כרטיס עם תמונה למערך התמונות שממבצע
//    מקום עליו יניח את הכרטיסים
let sale2=document.getElementById('inSale')
if(sale2!=null)
sale2.id='sale2'
    for(j=0;j<fore.length;j++){
        let d = document.createElement('div')
        d.className = 'products'
        let smallD = document.createElement('div')
        smallD.className = 'smallD'
        let img = document.createElement('img')
        img.className = 'productsImg'
        img.addEventListener('click', get)
        
        // יעבור על מערך הקטגוריות ויבדוק מה שם הקטגוריה הנוכחי כדי להגיע לקישור
        let l=0
        // let r2 = event.currentTarget.getAttribute('data-product')
      
        for (l = 0; l < AllCategories.length && AllCategories[l].idC !=inSale[fore[l]].CategoryId ; l++);
        // console.log(l);
        // console.log(inSale[fore[j]].nameP);
        // שם הקטגוריה של התמונה
        // console.log(inSale[fore[j]].CategoryId);
        let k
        for(k=0;k<AllCategories.length && AllCategories[k].idC!=inSale[fore[j]].CategoryId;k++);
        
        // console.log(AllCategories[k].CategoryName);
        let cataN=AllCategories[k].CategoryName
    
        
        // קישור לתמונה
        img.src = '../pics/' + cataN + '/' + inSale[fore[j]].img + '.webp'
        img.setAttribute('data-product', inSale[fore[j]].img)
        // מוציא  את שמות המוצרים
        let pName = document.createElement('p')
        pName.innerText = inSale[fore[j]].nameP
        pName.className = 'pNameSale'
        // מוציא את מחירי המוצרים
        let pPrice = document.createElement('p')
        pPrice.className = 'pPrice'
        // שרשור מחיר
        pPrice.innerText = '₪' + inSale[fore[j]].price
        // כפתור הוספה לסל
        let b = document.createElement('button')
        b.className = 'add'
        b.innerText = 'הוספה מהירה לסל'
        b.setAttribute('data-product', inSale[fore[j]].img)
        b.addEventListener('click', cart)
        // n.setAttribute('data-translate', arr[index][la2])
  
    
        // -------------------------------------------------------------------------//
        // let m = document.createElement('div')
        // m.className = 'modal'
        // a.appendChild(m)
        // let m2 = document.createElement('div')
        // m2.className = 'modal-content'
        // let sp = document.createElement('span')
        // sp.className = 'close'
        // m.appendChild(m2)
        //   <p>Some text in the Modal..</p>
        // --------------------------------------------------------------------------//
        // הוספה למסך
        // if(sale2!=null){
        sale2.appendChild(d)
        d.appendChild(img)
        d.appendChild(smallD)
        smallD.appendChild(pName)
        smallD.appendChild(pPrice)
        smallD.appendChild(b)}
    // }
}