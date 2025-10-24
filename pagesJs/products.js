// הוצאת שני המערכים
let AllCategories = localStorage.getItem('Categories')
AllCategories = JSON.parse(AllCategories)
let AllData = localStorage.getItem('data')
AllData = JSON.parse(AllData)
// יצירת מקום שעליו יהיה כל מוצרים
let a = document.createElement('article')
a.id = 'articleProducts'
// תפיסת המסך מלבד התפריט
let o = document.querySelector('aside')

// פונקציה לבנית והצגת מוצר הנשלח אליה
function creatProduct(product) {
    
    // debugger
    let d = document.createElement('div')
    d.className = 'products'
    let smallD = document.createElement('div')
    smallD.className = 'smallD'
    let img = document.createElement('img')
    img.className = 'productsImg'
    img.addEventListener('click', get)
    
    // יעבור על מערך הקטגוריות ויבדוק מה שם הקטגוריה הנוכחי כדי להגיע לקישור
    let j
    for (j = 0; j < AllCategories.length && AllCategories[j].idC != product.CategoryId; j++);
    let thisCategory = AllCategories[j].CategoryName
    img.setAttribute('data-cataName',thisCategory)
    // קישור לתמונה
    img.src = '../pics/' + thisCategory + '/' + product.img + '.webp'
    
    img.setAttribute('data-product', product.img)
    // מוציא  את שמות המוצרים
    let pName = document.createElement('p')
    pName.innerText = product.nameP
    pName.className = 'pName'
    // מוציא את מחירי המוצרים
    let pPrice = document.createElement('p')
    pPrice.className = 'pPrice'
    // שרשור מחיר
    pPrice.innerText = '₪' + product.price
    // כפתור הוספה לסל
    let b = document.createElement('button')
    b.className = 'add'
    b.innerText = 'הוספה לסל'
    b.setAttribute('data-product', product.img)
    // b.setAttribute('data-aba', r2)
    b.addEventListener('click', cart)
    // הוספה למסך
    a.appendChild(d)
    d.appendChild(img)
    d.appendChild(smallD)
    smallD.appendChild(pName)
    smallD.appendChild(pPrice)
    smallD.appendChild(b)
}
// פונקציה שבלחיצה על קטגוריה יציג את כל התמונות של אותה קטגוריה
function products() {
    // פינוי הדף הקודם
    o.innerHTML = ' '
    // פינוי מקום המוצרים
    a.innerHTML = ' '
    // שמירת ערך הקטגוריה הנשלחת ויצירת תמונה של הקטגוריה הנוכחית
    CategoryId = sessionStorage.getItem('id')
    let cataImg = document.createElement('img')
    cataImg.id = 'cataImg'
    // בודק איזה קטגוריה
    let k
    for (k = 0; k < AllCategories.length && AllCategories[k].idC != CategoryId; k++);
    cataImg.src = AllCategories[k].img
    // פסקה של קטגוריה
    let cataP = document.createElement('p')
    cataP.id = 'cataP'
    cataP.innerText = AllCategories[k].p
    // יעבור על מערך מוצרים
    for (let i = 0; i < AllData.length; i++) {
        // בודק האם תואם קטגוריה
        if (AllData[i].CategoryId == CategoryId) {
            //שליחת המוצר הנוכחי לפנוקציה שתבנה ושתציג אותו על המסך
            creatProduct(AllData[i])
            // הוספה למסך
            o.appendChild(cataP)
            o.appendChild(cataImg)
            o.appendChild(a)
        }
    }
}

// ---------פונקצית לכל המוצרים
function allProducts() {
    o.innerHTML = ' '
    a.innerHTML = ' '
    let cb = document.createElement('p')
    cb.id = 'casaBella'
    cb.innerText = 'CasaBella'
    o.appendChild(cb)
    // יעבור על כל מערך המוצרים וכל פעם שליחה לפונקציה שצבנה ותכין את המוצר
    for (let i = 0; i < AllData.length; i++)
        creatProduct(AllData[i])
    o.appendChild(a)

}

// פונקציה להוצאת המוצרים שבמבצע
function sale() {
    o.innerHTML = ' '
    a.innerHTML = ' '
    let s = document.createElement('p')
    s.id = 'sale'
    s.innerText = 'SALE'
    o.appendChild(s)
    for (let i = 0; i < AllData.length; i++) {
        if (AllData[i].isSale == 'yes')
            creatProduct(AllData[i])
        o.appendChild(a)

    }
}
// function detailsProduct() {

// }
// לכרטיסים הקטנים
function cart() {
    // יבדוק מי שמשתמש האחרון
    if (localStorage.getItem('productCart') == null) {
        let productCart = []
        localStorage.setItem('productCart', JSON.stringify(productCart))
    }
    let productCart = JSON.parse(localStorage.getItem('productCart'))
    // נבדוק מה התמונה עליה לחצו
    let e = event.currentTarget
    let dataProduct = e.getAttribute('data-product')
    console.log(dataProduct);

    // נחפש את התמונה במערך התמונות
    let i
    for (i = 0; i < AllData.length && AllData[i].img != dataProduct; i++);


    // הגדרת אובייקט עם הערכים
    let newProduct = {
        CategoryId: AllData[i].CategoryId,
        nameP: AllData[i].nameP,
        price: AllData[i].price,
        details: AllData[i].details,
        isSale: AllData[i].isSale,
        img: AllData[i].img,
        amount: AllData[i].amount
    }
    let u
    for (u = 0; u < productCart.length && productCart[u].img != dataProduct; u++);
    if (u == productCart.length){
        productCart.push(newProduct)
    time()}
    else{
    productCart[u].amount=productCart[u].amount+1
    console.log(productCart[u].amount);
time()}
    //  console.log(newProduct);
    // debugger

    localStorage.setItem('productCart', (JSON.stringify(productCart)))

}
function hover(){
    count=1
    let x=setInterval(
        //אין צורך בשם הפונקציה - כי לא ניתן לזמן אותה ממקום נוסף
        //function וכן המילה 
        // מיותרת כי ידוע שמתקבל כאן פונקציה
        //יש להוסיף חץ בין ראש הפונקציה לתוכן
         ()=> {
            
            let hoverPic = document.getElementById('pic1')
            hoverPic.src= '../pics/cataPics/'+count+'.png'
            count++
        }
        , 3000)
}