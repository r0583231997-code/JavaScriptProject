// כרטיס בודד
function get() {
    // debugger
    event.preventDefault()
    o.innerHTML = ' '
    // let r = document.getElementsByTagName('articale')
    // console.log(r);

    // הפונקציה מקבלת על מי לחצו
    let r2 = event.currentTarget.getAttribute('data-product')
    console.log(r2);
    let bigSingelDiv = document.createElement('div')
    bigSingelDiv.className = 'singelProduct'

    // יצירת דיב קטם
    // let smallSingelDiv = document.createElement('div')
    // smallSingelDiv.className = 'modal-content'
    // כפתור עליו ילחוצו כדי לסגור
    let b = document.createElement('button')
    b.className = 'add'
    b.innerText = 'הוספה לסל'
    // b.setAttribute('data-aba', b.getAttribute('data-product'))
    b.setAttribute('data-ada2', r2)
    console.log(r2);
    console.log(b.getAttribute('data-ada2'));
    b.addEventListener('click', addToCart)

    // שם התמונה
    let nameThis = document.createElement('h2')
    nameThis.innerText = AllData[r2 - 1].nameP
    console.log(nameThis.innerText);
    nameThis.className = 'singeiNAme'
    // מחיר
    let priceThis = document.createElement('p')
    priceThis.innerText = AllData[r2 - 1].price
    priceThis.className = 'singelPrice'
    // תאור-פרטים המוצר
    let detailsThis = document.createElement('p')
    detailsThis.innerText = AllData[r2 - 1].details
    detailsThis.className = 'singekDetails'
    // תמונת מוצר
    let imgThis = document.createElement('img')
    imgThis.className = 'singelImg'
    // imgThis.addEventListener('click',magnify('imgThis',3))
    // יבדוק על איזה קטגוריה עומד
    let j
    for (j = 0; j < AllCategories.length && AllCategories[j].idC != AllData[r2 - 1].CategoryId; j++);
    let thisCategory = AllCategories[j].CategoryName
    // קישור לתמונה
    imgThis.src = '../pics/' + thisCategory + '/' + AllData[r2 - 1].img + '.webp'
    console.log(imgThis);
    //   o.appendChild(imgThis)
    //  הופעה על המסך
    // o.appendChild(bigSingelDiv)
    // o.appendChild(smallSingelDiv)
    o.appendChild(nameThis)
    o.appendChild(imgThis)
    o.appendChild(priceThis)
    o.appendChild(detailsThis)
    o.appendChild(b)
    // console.log(smallSingelDiv);
    // מעבירה דף
    // מציגה הכל
    let quantitycontrol = document.createElement('div')
    let quantityB1 = document.createElement('button')
    quantityB1.setAttribute('data-ada', r2)
    console.log(quantityB1.getAttribute('data-ada'));
    let quantityB2 = document.createElement('button')
    quantityB2.setAttribute('data-ada', r2)
    console.log(quantityB2.getAttribute('data-ada'));
    // console.log(quantityB2.getAttribute('data-aba2'));
    let quantityI = document.createElement('input')
    quantityB1.innerText = "+"
    // quantityB1.className =AllData[r2 - 1].img
    quantityI.value = "1"
    quantityI.className = "quantityI"
    // quantityI.id=AllData[r2 - 1].img
    quantityB2.innerText = "-"
    // quantityB2.id =(AllData[r2 - 1].img+1)
    quantityB1.addEventListener('click', addpr)
    quantityB2.addEventListener('click', lasspr)
    //    הכנסת הערכים לתוך class
    quantitycontrol.className = "quantity-control"


    //הוספה למסך
    quantitycontrol.appendChild(quantityB2)
    quantitycontrol.appendChild(quantityI)
    quantitycontrol.appendChild(quantityB1)
    o.appendChild(quantitycontrol)
    // o.appendChild(Dproduct)

}
//פונקציה הוספה לסל של כרטיס הבודד
function addToCart() {

    if (localStorage.getItem('productCart') == null) {
        let productCart = []
        localStorage.setItem('productCart', JSON.stringify(productCart))
    }
    let productCart = JSON.parse(localStorage.getItem('productCart'))
    // נבדוק מה התמונה עליה לחצו
    let b = event.currentTarget
    //מקבל את האינפורמציה של התמונה שהפעילה אותו
    dataProduct = b.getAttribute('data-ada2')
    console.log(dataProduct);
    // נחפש את התמונה במערך התמונות
    let w
    for (w = 0; w < productCart.length && productCart[w].img != dataProduct; w++);
    let q = document.getElementsByClassName('quantityI')[0]
    let i
    for (i = 0; i < AllData.length && AllData[i].img != dataProduct; i++);

    if (w == productCart.length) {
        let newProduct = {
            CategoryId: AllData[i].CategoryId,
            nameP: AllData[i].nameP,
            price: AllData[i].price,
            details: AllData[i].details,
            isSale: AllData[i].isSale,
            img: AllData[i].img,
            amount: q.value
        }
        productCart.push(newProduct)
        time()
    }
    else {
        productCart[w].amount = q.value
        console.log(productCart[w].amount);
        time()
    }
    localStorage.setItem('productCart', (JSON.stringify(productCart)))
}
// סל קניות
function getCart() {
    // debugger
    let o = document.getElementById('general')
    o.innerHTML = ' '
    // document.body.innerHTML=' '
    if (localStorage.getItem('productCart') == null) {
        let productCart = []
        localStorage.setItem('productCart', JSON.stringify(productCart))
    }
    let divPay = document.createElement('div')
    divPay.id = "divPay"
    let pay = document.createElement('button')
    pay.id = 'pay'
    pay.innerText = 'לתשלום'
    pay.addEventListener('click', check)
    // let myModal = document.getElementById('myModal')
    // myModal.innerHTML = " "
    //הפיכתו למערך
    let productCart = JSON.parse(localStorage.getItem('productCart'))
    let k
    //מעבר על כל המוצרים שנכנסו לסל
    for (k = 0; k < productCart.length; k++) {//קבלת הקטגוריה של המוצר
        let j
        for (j = 0; j < AllCategories.length && AllCategories[j].idC != productCart[k].CategoryId; j++);
        //שמירת הקטגוריה
        let thisCategory = AllCategories[j].CategoryName
        //יצירת דיב שיכיל את נתוני המוצר
        let product = document.createElement('div')
        //יצירת פסקה שמכילה את הפרטים הנוספים
        // let Dproduct=document.createElement('p')
        //יצירת פסקה להצגת המחיר
        let Pproduct = document.createElement('span')

        let PIproduct = document.createElement('span')
        //יצירת תמונה להצגת המוצר
        let Iproduct = document.createElement('img')
        //יצירת כמות
        let Qproduct = document.createElement('span')
        Qproduct.innerText = " כמות:" + productCart[k].amount
        Qproduct.className = "Qproduct"
        product.className = "product"
        // Dproduct.className="Dproduct"
        Iproduct.className = "Iproduct"
        Pproduct.className = "Pproduct"
        PIproduct.className = "Pproduct"
        // כפתור הסר
        // let remove = document.createElement('button')
        // remove.className = "remove"
        // remove.innerText = "הסר"
        let removeB = document.createElement('button')
        removeB.className = 'removeB'
        removeB.innerText = 'הסר'
        removeB.setAttribute('data-product1', productCart[k].img)
        console.log(removeB.getAttribute('data-product1'));
        removeB.addEventListener('click', remove1)



        //המחיר
        Pproduct.innerText = "המחיר ליחידה:" + productCart[k].price
        PIproduct.innerText = 'סה"כ:' + productCart[k].price * productCart[k].amount
        //קישור לתמונה
        Iproduct.src = '../pics/' + thisCategory + '/' + productCart[k].img + '.webp'

        // o.innerHTML=" "
        o.appendChild(product)
        product.appendChild(Pproduct)
        product.appendChild(PIproduct)
        product.appendChild(Qproduct)
        product.appendChild(removeB)
        product.appendChild(Iproduct)
        divPay.appendChild(pay)
        o.appendChild(divPay)

    }
    //החזרת המערך למחסנית
    localStorage.setItem('productCart', (JSON.stringify(productCart)))
}
// מפנה מוצר אחד
function remove1() {
    // debugger
    let productCart = JSON.parse(localStorage.getItem('productCart'))
    let e = event.currentTarget
    e = e.getAttribute('data-product1')
    let i
    for (i = 0; i < productCart.length && productCart[i].img != e; i++);
    productCart.splice(i, 1)
    localStorage.setItem('productCart', (JSON.stringify(productCart)))
    getCart()

}
// בודק בתשלום האם רשום וכו
function check() {
    let user = sessionStorage.getItem('ThisUser')
    let masses = document.createElement('h2')
    let productCart = JSON.parse(localStorage.getItem('productCart'))
    masses.id = 'masses'
    if (!user) {
        masses.innerText = 'עליך להרשם'
        document.body.appendChild(masses)
        setTimeout(() => {
            window.location = '../pagesHtml/login.html'
        }, 2500)
    }
    else {
        masses.innerText = 'תודה שקניתם אצלינו! ההזמנה בדרך אליך'
        document.body.appendChild(masses)
        setTimeout(() => {
            localStorage.removeItem('productCart')
            window.location='../pagesHtml/index.html'
        }, 2000)

    }
    if (!productCart || productCart.length == 0) {
        masses.innerText = 'סל הקניות שלך ריק'
        document.body.appendChild(masses)
        localStorage.removeItem('productCart')
    }
    setTimeout(() => {
        let masses = document.getElementById('masses')
        masses.remove();
    }, 3000);
}
// הודעת אלרט
function time(){
    let s=document.getElementById('productAlert')
          setTimeout(() => {
    s.hidden=false;
    }, 200);
             setTimeout(() => {
    s.hidden=true;
    },2000);
}
