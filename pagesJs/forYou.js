function forYou(){
    // לרוקן את הדף הקודם
    o.innerHTML=' '
    // ימירת 3 דיבים לשלוש סוגי בחירות
    let background=document.createElement('div')
    let textColor=document.createElement('div')
    let textFont=document.createElement('div')
    let background1=document.createElement('input')
    let background2=document.createElement('input')
    let background3=document.createElement('input')
    // יצירת 3 כפתורים בתוכם
    // לעשות שבעת לחיצה ישצור הגדרות וגם יצבע בצבע

}
function changeBackColor(color) {
    //body הגישה לתגית - לאוביsיקט - לאלמנט 
    //תהיה גישה ישירה
    // document.body
    // style - גישה לכל החלק העיצובי
    // backgroundColor - עיצוב המכיל 2 מילים - נפריד עי אות גדולה
    let l=document.getElementById('c')
    l.style.backgroundColor = color
}
function backR() {
    // מבקש צבע מוגרל
    let c = randomColor()
    // ושולח אותו לשינוי הרקע
    changeBackColor(c)

}
// הפונקציה מגרילה צבע ומחזירה אותו

function fontColor(color) {
    let l2=document.getElementById('c2')
    l2.style.color = color
}

function font(id){
    let f=document.getElementById('font')
    f.style.fontFamily=id
}
function save(){
    // debugger
    // לשמור במחסנית את כל ההגדרות שנשמרו
    let background=document.getElementById('c').style.backgroundColor
    console.log(background);
    sessionStorage.setItem('background', background)
    
    let textColor=document.getElementById('c2').style.color
    console.log(textColor);
    sessionStorage.setItem('textColor', textColor)
   
    let textFont=document.getElementById('font').style.fontFamily
    console.log(textFont);
    sessionStorage.setItem('textFont', textFont)
    
    window.history.back()
}